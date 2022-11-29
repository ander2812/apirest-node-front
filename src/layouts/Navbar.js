import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LandingPages } from '../pages/LandingPages';

const navbar = () => {
  return (
    <>
    <Navbar className="navBg" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/groups">Home</Nav.Link>
            <Nav.Link as={Link} to="/mygroups">Mis grupos</Nav.Link>
            <Nav.Link as={Link} to="/profileDetails">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet>
          
        </Outlet>

    </section>
    <LandingPages/>
    </>
  );
}

export default navbar;