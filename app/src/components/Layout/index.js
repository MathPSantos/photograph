import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Landing = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  padding: 0 20px;

  transform: ${({ hide }) => hide ? 'translateX(-100%)' : 'translateX(0)' };
  transition: all .6s;
`

Landing.Content = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 100%;

  position: relative;
`

Landing.Image = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const Galery = styled.main`
  width: 100%;
  height: ${({ photoQty }) => photoQty * 240}px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 111px 20px 0 20px;
`

Galery.Content = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 100%;

  padding-top: 62px;

  position: relative;
`

export const AboutLay = styled(Galery)`
  height: auto;
`

AboutLay.Content = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 100%;

  padding-top: 62px;
  padding-bottom: 62px;

  position: relative;

  > p + p {
    margin-top: 180px;
  }
`

AboutLay.Paragraph = styled(motion.p)`
  width: 100%;
  max-width: 700px;

  position: relative;

  font: 700 18px Oxygen, sans-serif;
  color: #202020;
  letter-spacing: 0.05em;
  line-height: 150%;

  padding: ${({ index }) => index % 2 ? '0 20px 0 0' : '0 0 0 20px'};
  margin-left: ${({ index }) => index % 2 && 'auto'};

  > div + div {
    margin-top: 20px;
  }
`

AboutLay.Span = styled(motion.span)`
  font: 700 92px Ubuntu, sans-serif;
  color: #FFF;
  text-shadow: -1px 0 ${({ theme }) => theme.colors.primary}, 0 1px ${({ theme }) => theme.colors.primary}, 1px 0 ${({ theme }) => theme.colors.primary}, 0 -1px ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  position: absolute;
  top: -65px;
  ${({ index }) => index % 2 ? 'right: 70%' : 'left: 70%'};

  z-index: -1
`
