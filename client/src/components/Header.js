import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'

function Header() {
    return (
        
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link to='/'>Logo</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
      <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
        
    )
}

export default Header
