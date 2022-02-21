import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'uikitpanswap/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Sora', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  #__next > div.sc-fmciRz.bkEuPn > div.sc-jRQBWg.sc-eWfVMQ.gABixZ.kDzbtD > div > div.sc-jRQBWg.rtbRV.Page__StyledPage-sc-a071541c-0.eelpAm > div.Flex__FlexLayout-sc-977d3bc9-0.Pools__CardLayout-sc-8333503e-0.cBBrLS.jmiTsC > div:nth-child(3) {
    display: none;
  }
`

export default GlobalStyle
