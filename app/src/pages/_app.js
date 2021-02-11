import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import { redTheme } from '../styles/theme'

import '../styles/pages/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={redTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
