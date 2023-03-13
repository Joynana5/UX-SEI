import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  return (
    <>
      {[true, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">The Drunk Cup </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Shop All Products</Nav.Link>
                  <Nav.Link href="#action2">Staff Favorites</Nav.Link>
                  <Nav.Link href="#action1">Floral Blends</Nav.Link>
                  <Nav.Link href="#action2">Hangover Blends</Nav.Link>
                  <Nav.Link href="#action1">Seasonal Blends</Nav.Link>
                  <Nav.Link href="#action2">Store Locator</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation