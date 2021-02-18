import { useState } from 'react'
import Link from 'next/link'

import { Navbar } from './styles'

const NavbarComp = ({ burger = true }) => {
  const [active, setActive] = useState(false)

  return (
    <Navbar>
      <Navbar.Wrapper burger={burger}>
        <Navbar.Title>#SENAI18</Navbar.Title>
                
        {burger && <Navbar.Burger onClick={() => setActive(!active)} active={active} />}
      </Navbar.Wrapper>

      <Navbar.Nav active={active} >
        <Navbar.NavWrapper>
          <Navbar.NavList>
            <Link href="galery" passHref>
              <Navbar.NavLink>GALERIA</Navbar.NavLink>
            </Link>

            <Link href="about" passHref>
              <Navbar.NavLink>SOBRE</Navbar.NavLink>
            </Link>
          </Navbar.NavList>
        </Navbar.NavWrapper>
      </Navbar.Nav>
    </Navbar>
  )
}

export default NavbarComp
