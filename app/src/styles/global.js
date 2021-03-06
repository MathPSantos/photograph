import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #FFFFFF;
    font: 700 16px Ubuntu, Oxygen, sans-serif;
    transition: all 0.5s;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
  }
`
