import BigNumber from 'bignumber.js'
import React from 'react'
import { useVaultPoolByKey, useVaultPools } from 'state/pools/hooks'
import { getAddress, getVaultPoolAddress } from 'utils/addressHelpers'
import { CardBody, Flex, Text, CardRibbon } from 'uikitpanswap'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'
import { TokenPairImage } from 'components/TokenImage'
import AprRow from './AprRow'
import { StyledCard } from './StyledCard'
import CardFooter from './CardFooter'
import styled from 'styled-components'
import PoolCardHeader, { PoolCardHeaderTitle } from './PoolCardHeader'
import CardActions from './CardActions'
import { LinkExternal } from 'uikitpanswap'
import { BASE_BSC_SCAN_URL } from 'config'

interface ExpandedFooterProps {
  pool: DeserializedPool
  account: string
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 18px;
    width: 18px;
    border: 1px solid #1fc7d4;
  }
`

const PoolCard: React.FC<{ pool: DeserializedPool; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, userData } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)

  const isCakePool = earningToken.symbol === 'CAKE' && stakingToken.symbol === 'CAKE'

  const { vaultKey, totalStaked, contractAddress } = pool
  const isManualCakePool = sousId === 0

  const {
    totalCakeInVault,
    fees: { performanceFee },
  } = useVaultPoolByKey(vaultKey)
  const poolContractAddress = getAddress(contractAddress)

  const vaultPools = useVaultPools()
  const cakeInVaults = Object.values(vaultPools).reduce((total, vault) => {
    return total.plus(vault.totalCakeInVault)
  }, BIG_ZERO)

  const cakeVaultContractAddress = getVaultPoolAddress(vaultKey)

  const getTotalStakedBalance = () => {
    if (vaultKey) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(cakeInVaults)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }

  return (
    <StyledCard
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <PoolCardHeader isStaking={accountHasStakedBalance} isFinished={isFinished && sousId !== 0}>
        <PoolCardHeaderTitle
          title={isCakePool ? t('Manual') : t('Earn %asset%', { asset: earningToken.symbol })}
          subTitle={isCakePool ? t('Earn CAKE, stake CAKE') : t('Stake %symbol%', { symbol: stakingToken.symbol })}
        />
        <TokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} width={64} height={64} />
      </PoolCardHeader>
      <CardBody>
        <AprRow pool={pool} stakedBalance={stakedBalance} />
        <Flex mt="24px" flexDirection="column">
          {account ? (
            <CardActions pool={pool} stakedBalance={stakedBalance} />
          ) : (
            <>
              <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                {t('Start earning')}
              </Text>
              <ConnectWalletButton
                    style={{
                      width: '100%',
                      height: '64px',
                      marginBottom: '24px',
                      background: '#fcd434',
                      color: '#212833',
                      fontSize: '16px',
                    }}
                  />
              <Flex justifyContent={'space-between'}>
                <ExpandedWrapper style={{ width: '100%' }} justifyContent={'space-between'}>
                
                  {poolContractAddress && (
                    <Flex mb="2px" justifyContent="flex-end">
                      <LinkExternal
                        style={{
                          background: '#464d57',
                          border: '1px solid rgba(255, 255, 255, 0.31)',
                          boxSizing: 'border-box',
                          borderRadius: '18px',
                          padding: '24px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                        href={`${BASE_BSC_SCAN_URL}/address/${
                          vaultKey ? cakeVaultContractAddress : poolContractAddress
                        }`}
                        bold={false}
                        small
                      >
                        {t('Contract')}
                      </LinkExternal>
                    </Flex>
                  )}
                  {/* <LinkExternal
                    style={{
                      background: '#464d57',
                      border: '1px solid rgba(255, 255, 255, 0.31)',
                      boxSizing: 'border-box',
                      borderRadius: '18px',
                      padding: '24px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                    href={`/info/token/${earningToken.address}`}
                    bold={false}
                    small
                  >
                    {t('Token Info')}
                  </LinkExternal> */}

<LinkExternal style={{
                      background: '#464d57',
                      border: '1px solid rgba(255, 255, 255, 0.31)',
                      boxSizing: 'border-box',
                      borderRadius: '18px',
                      padding: '24px',
                      color: '#fff',
                      fontSize: '12px',
                    }} href={earningToken.projectLink} bold={false} small>
          {t('Project Site')}
        </LinkExternal>



                </ExpandedWrapper>
              </Flex>
            </>
          )}
        </Flex>
      </CardBody>
      {/* <CardFooter pool={pool} account={account} /> */}
    </StyledCard>
  )
}

export default PoolCard
