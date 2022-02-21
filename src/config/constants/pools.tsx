import React from 'react'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
 {
     sousId: 0,
     stakingToken: serializedTokens.vft,
     earningToken: serializedTokens.vft,
     contractAddress: {
     97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
     },
     poolCategory: PoolCategory.CORE,
     harvest: true,
     tokenPerBlock: '10',
     sortOrder: 1,
     isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.vft,
    earningToken: serializedTokens.vft,
    contractAddress: {
      97: '',
      56: '0x12abf4a042643c1c2109a68843bf836924f34a3b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1',
    deployedBlockNumber: 15402761,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.vft,
    earningToken: serializedTokens.abcd,
    contractAddress: {
      97: '',
      56: '0x5C3d702706e9df002e3791cEB956A360f998279e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '30',
    deployedBlockNumber: 15402761,
  },
  {
    sousId: 8,
    stakingToken: serializedTokens.abcd,
    earningToken: serializedTokens.vft,
    contractAddress: {
      97: '',
      56: '0x47a3a25d5D5d694534953C96769C46ccB6253a29',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '12',
    deployedBlockNumber: 14875151,
  },
].filter((p) => !!p.contractAddress[CHAIN_ID])

export default pools
