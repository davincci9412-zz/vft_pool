import { FooterLinkType } from 'uikitpanswap'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Important Links'),
    items: [
      {
        label: t('Website'),
        href: 'https://valuefinance.io',
      },
      {
        label: t('Explorer'),
        href: 'https://bscscan.com/token/0x14e8bcd053e68a22f239b9e9bead87932465d245',
      },
      {
        label: t('CMC'),
        href: 'https://coinmarketcap.com/currencies/value-finance/',
      },
      {
        label: t('Coingecko'),
        href: 'https://www.coingecko.com/en/coins/value-finance',
      },
      {
        label: '—',
      },
    ],
  },
  {
    label: t('Support'),
    items: [
      {
        label: t('Email Suport'),
        href: 'mailto:support@valuefinance.io',
      },
    ],
  },
  {
    label: t('Audit & Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/valuefi',
      },
      {
        label: t('Audit'),
        href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_Value_Finance.pdf',
      },
    ],
  },
]
