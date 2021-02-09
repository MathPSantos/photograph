import { useState } from 'react'
import { Navbar } from './styles'

const NavbarComp = () => {
  const [active, setActive] = useState(false)

  return (
    <Navbar>
      <Navbar.Wrapper>
        <Navbar.Title>#SENAI18</Navbar.Title>
                
        <Navbar.Burger onClick={() => setActive(!active)} active={active} />
      </Navbar.Wrapper>

      <Navbar.Nav active={active} >
        <Navbar.NavWrapper>
          <Navbar.NavList>
            <Navbar.NavLink>GALERIA</Navbar.NavLink>
            <Navbar.NavLink>SOBRE</Navbar.NavLink>
          </Navbar.NavList>
        </Navbar.NavWrapper>
      </Navbar.Nav>
    </Navbar>
  )
}

export default NavbarComp
