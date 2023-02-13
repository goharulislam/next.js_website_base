import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import Image from "next/image";
function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href={'/'}><Image src={logo} alt='logo' priority={true} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Browse Coaches</Nav.Link>
            <Nav.Link href="#home">Sign up as a coach</Nav.Link>
            <Nav.Link href="#home" className="btn1">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;