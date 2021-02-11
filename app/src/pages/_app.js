import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import { purpleTheme } from '../styles/theme'

import '../styles/pages/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
