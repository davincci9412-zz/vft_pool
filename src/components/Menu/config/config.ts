import { MenuItemsType, DropdownMenuItemType } from 'uikitpanswap'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
 /* {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  }, */
  {
    label: t('VFT Pool'),
    href: '/pools',
    icon: 'Earn',
    items: [

    ],
  },
  {
    label: t('LP Mining'),
    href: 'https://lpmining.valuefinance.io',
    type: DropdownMenuItemType.EXTERNAL_LINK,
    icon: 'Earn',
    items: [

    ],
  },
  
  {
    label: t('Links'),
    href: '#',
    icon: 'Trophy',
    items: [
      {
        label: t('Website'),
        href: 'https://valuefinance.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Explorer'),
        href: 'https://bscscan.com/token/0x14e8bcd053e68a22f239b9e9bead87932465d245',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('CMC'),
        href: 'https://coinmarketcap.com/currencies/value-finance/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Coingecko'),
        href: 'https://www.coingecko.com/en/coins/value-finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('Developer'),
    href: `#`,
    icon: 'Nft',
    items: [
      {
        label: t('Github'),
        href: `https://github.com/valuefi`,
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
/*  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  }, */
]

export default config
