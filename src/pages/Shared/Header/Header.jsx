import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={90} gradient className='text-danger'>
        I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>


        <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features"><Link to='/' className='text-decoration-none text-black'>Home</Link></Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <div className='d-flex align-items-center'>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
        
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
    );
};

export default Header;