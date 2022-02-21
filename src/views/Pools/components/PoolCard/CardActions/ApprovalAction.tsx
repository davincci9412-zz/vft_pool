import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from 'uikitpanswap'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import { DeserializedPool } from 'state/types'
import { useApprovePool } from '../../../hooks/useApprove'
import { LinkExternal } from 'uikitpanswap'
import { getAddress, getVaultPoolAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import { useVaultPoolByKey, useVaultPools } from 'state/pools/hooks'
import { CardBody, Flex, Text, CardRibbon } from 'uikitpanswap'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { BIG_ZERO } from 'utils/bigNumber'
import { TokenPairImage } from 'components/TokenImage'
import { BASE_BSC_SCAN_URL } from 'config'

interface ApprovalActionProps {
  pool: DeserializedPool
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken, earningToken } = pool
  const { t } = useTranslation()
  const stakingTokenContract = useERC20(stakingToken.address || '')
  const { handleApprove, pendingTx } = useApprovePool(stakingTokenContract, sousId, earningToken.symbol)
  const { vaultKey, totalStaked, contractAddress } = pool
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getVaultPoolAddress(vaultKey)

  return (
    
      <>
        {isLoading ? (
          <Skeleton width="100%" height="52px" />
        ) : (
          <Button
            style={{
              height: '64px',
              background: '#fcd434',
              fontSize: '16px',
              color: '#212833',
              border: '1px solid rgba(255, 255, 255, 0.65)',
            }}
            isLoading={pendingTx}
            endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
            disabled={pendingTx}
            onClick={handleApprove}
            width="100%"
          >
            {t('Enable')}
          </Button>
        )}{' '}
        
        <Flex justifyContent={'space-between'} paddingTop={'24px'}>
        <LinkExternal
          style={{
            background: '#464d57',
            border: '1px solid rgba(255, 255, 255, 0.31)',
            boxSizing: 'border-box',
            borderRadius: '18px',
            padding: '24px',
            color: '#fff',
            fontSize: '12px',
            height: '64px',
            textShadow: '0px 3px 4px rgba(51, 71, 86, 0.14)',
          }}
          href={`/info/token/${earningToken.address}`}
          bold={false}
          small
        >
          {t('Token Info')}
        </LinkExternal>
        {poolContractAddress && (
            <LinkExternal
              style={{
                background: '#464d57',
                border: '1px solid rgba(255, 255, 255, 0.31)',
                boxSizing: 'border-box',
                borderRadius: '18px',
                padding: '24px',
                color: '#fff',
                fontSize: '12px',
                height: '64px',
              }}
              href={`${BASE_BSC_SCAN_URL}/address/${vaultKey ? cakeVaultContractAddress : poolContractAddress}`}
              bold={false}
              small
            >
              {t('View Contract')}
            </LinkExternal>
        )}</Flex>
      </>
    
  )
}

export default ApprovalAction
