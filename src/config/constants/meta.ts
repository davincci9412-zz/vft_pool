import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Value Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Value Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Value Finance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Value Finance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Value Finance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Value Finance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Value Finance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Value Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Value Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Value Finance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Value Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Value Finance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Value Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Value Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Value Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Value Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Value Finance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Value Finance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Value Finance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Value Finance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Value Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Value Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Value Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Value Finance')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Value Finance')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Value Finance')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Value Finance')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Value Finance')}`,
      }
    default:
      return null
  }
}
