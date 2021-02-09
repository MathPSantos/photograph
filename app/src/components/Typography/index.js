import styled from 'styled-components'

export const H1 = styled.h1`
  font: 700 60px Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 69px;
`

export const H2 = styled.h2`
  font: 700 100px Ubuntu, sans-serif;
  color: ${({ theme, border }) => border === 'primary' ? theme.colors.secondary : theme.colors.primary};
  -webkit-text-stroke: 2px ${({ theme, border }) => theme.colors[border]}; 
  text-transform: uppercase;
  line-height: 115px;
`

export const P = styled.p`
  font: 700 20px Oxygen, sans-serif;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.05em;
  line-height: 142.3%;
`
