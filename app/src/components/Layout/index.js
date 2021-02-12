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
