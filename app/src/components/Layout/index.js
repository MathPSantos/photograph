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

Landing.AnimatedText = styled(motion.ul)`
  width: 544px;
  height: 208px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

Landing.AnimatedTextItem = styled(motion.li)`
  font: 700 60px Ubuntu, sans-serif;
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

AboutLay.Paragraph = styled.p`
  width: 100%;
  max-width: 700px;

  position: relative;

  font: 700 20px Oxygen, sans-serif;
  color: #202020;
  letter-spacing: 0.05em;
  line-height: 142.3%;

  padding: ${({ index }) => index % 2 ? '0 20px 0 0' : '0 0 0 20px'};
  margin-left: ${({ index }) => index % 2 && 'auto'};

  > div + div {
    margin-top: 20px;
  }
`

AboutLay.Span = styled.span`
  font: 700 92px Ubuntu, sans-serif;
  color: #FFF;
  text-shadow: -1px 0 ${({ theme }) => theme.colors.primary}, 0 1px ${({ theme }) => theme.colors.primary}, 1px 0 ${({ theme }) => theme.colors.primary}, 0 -1px ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  position: absolute;
  top: -65px;
  ${({ index }) => index % 2 ? 'right: 70%' : 'left: 70%'};

  z-index: -1
`
