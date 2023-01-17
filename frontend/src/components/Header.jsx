import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header className=''>
        <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" className='primary'/>
        <Navbar.Collapse id="navbarScroll" className=''>
          <Nav
            className="flex ml-auto"
            navbarScroll
          >
            <LinkContainer to='/cart'>
            <Nav.Link>
                <i className='fas fa-shopping-cart px-2'></i>
                Cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                  <i className='fas fa-user px-2'></i>
                  Sign In
              </Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header