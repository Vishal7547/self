import React from 'react'
import '../Style/Navbar.css'
import {Container, Nav,Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="navbar-custom color">  
        
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ms-auto justify-content-end">
      <NavLink className='nav' to='/home'>Home</NavLink>
      <Link className='nav' to="scroll-a" smooth={true} duration={1500}>About</Link>
      <Link className='nav' to='scroll-b' smooth={true} duration={1500}>My Skills</Link>
      <Link className='nav' to="scroll-c" smooth={true} duration={1500}>Project</Link>
      <Link className='nav' to="scroll-d" smooth={true} duration={1500}>Contact Up</Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}

export default Home