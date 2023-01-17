import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header className=''>
        <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='primary'/>
        <Navbar.Collapse id="navbarScroll" className=''>
          <Nav
            className="flex ml-auto"
            navbarScroll
          >
            <Nav.Link href="/cart">
                <i className='fas fa-shopping-cart px-2'></i>
                Cart</Nav.Link>
            <Nav.Link href="/login">
                <i className='fas fa-user px-2'></i>
                Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header