import styled, { css } from 'styled-components'
import { FiMove } from '../../styles/icons'
import { motion } from 'framer-motion'

export const Photo = styled(motion.div)`
  width: 415px;
  height: 276px;

  background-color: #CCCCCC;

  position: absolute;
  top: ${({ index }) => index === 0 ? '60px' : `${60 + (index * 168)}px`};
  left: ${({ index }) => index % 2 ? 57 : 5}%;

  &:hover{
    > div {
      opacity: 1;
    }
  }
`

Photo.Image = styled.img`
  width: 100%;
  height: 100%;
`

Photo.MoveButton = styled.div`
    position: absolute;
    top: -30px;
    right: -30px;

    width: 60px;
    height: 60px;
    background-color: #9B37B1;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: move;

    opacity: 0;
    transition: all .3s;
`

const iconCSS = css`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;
  opacity: 0.95;
  transition: 0.3s all;

  &:hover {
    opacity: 1;
  }
`

Photo.MoveIcon = styled(FiMove)`
 ${iconCSS}
`