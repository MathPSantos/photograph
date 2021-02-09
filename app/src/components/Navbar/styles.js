import styled from 'styled-components'

export const Navbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 0;
`

Navbar.Wrapper = styled.div`
  width: 100%;
  max-width: 1160px;

  padding: 20px 0;

  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

Navbar.Title = styled.span`
  font: 700 ${({ lg }) => lg ? 48 : 28}px Ubuntu, sans-serif;
  color: ${({ theme, lg }) => lg ? theme.colors.secondary : theme.colors.primary};
  text-shadow: -1px 0 ${({ theme, lg }) => lg ? theme.colors.primary : theme.colors.secondary}, 0 1px ${({ theme, lg }) => lg ? theme.colors.primary : theme.colors.secondary}, 1px 0 ${({ theme, lg }) => lg ? theme.colors.primary : theme.colors.secondary}, 0 -1px ${({ theme, lg }) => lg ? theme.colors.primary : theme.colors.secondary};
  letter-spacing: 0.05em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

Navbar.Burger = styled.div`
  width: 42px;
  height: 15px;
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  cursor: pointer;

  z-index: ${({ active }) => active ? 2 : 0};

  &::before,
  &::after {
    content: '';
    width: 40px;
    height: 4px;
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secondary};
    transition: all 0.3s linear;
    transform-origin: 1px;
  }

  &::before {
    transform: ${({ active }) => active ? 'rotate(45deg) translate(-5px,-4px)' : 'rotate(0)'};
  }

  &::after {
    transform: ${({ active }) => active ? 'rotate(-45deg)  translate(-6px, 6px)' : 'rotate(0)'};
    ${({ active }) => !active && 'margin-left: 4px;'}
  }
`

Navbar.Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};

  transform: ${({ active }) => active ? 'translateY(0)' : 'translateY(-100%)'};
  z-index: 1;

  transition: all .3s;
`

Navbar.NavWrapper = styled.div`
  width: 100%;
  max-width: 1160px;

  display: flex;
  justify-content: flex-start;

  padding: 10% 13%;
`

Navbar.NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > li + li {
      margin-top: 32px;
  }
`


Navbar.NavLink = styled.li`
  position: relative;

  font: 700 80px Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.primary}, 0 1px ${({ theme }) => theme.colors.primary}, 1px 0 ${({ theme }) => theme.colors.primary}, 0 -1px ${({ theme }) => theme.colors.primary};
  
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -12px;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;
    transition: all .3s;
  }

  &:hover {
    &::before {
        width: 115%;
    }
  }
`
