import { useState } from 'react';
import {Container, Nav, Navbar, Button, Offcanvas} from 'react-bootstrap';



import BusinessLogo from '../assets/img/white-logo.svg';
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function Header() {
  const [show, setShow] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const navLinks = navigation.map((item, index) => (
    <li key={item.name}>
      {item.name === "Contact" ? (
        <Button
        variant="secondary"
          onClick={() => handleNavItemClick(index)}
        >
          {item.name}
        </Button>
      ) : (
        <Nav.Link
          className={index === activeNavItem ? 'active' : ''}
          href={item.href}
          onClick={() => handleNavItemClick(index)}
        >
          {item.name}
        </Nav.Link>
      )}
    </li>
  ));

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={BusinessLogo} alt="Business Logo" />
          </Navbar.Brand>
          <Nav as={'ul'} className="m-auto">
            {navLinks}
          </Nav>
          <Button
            className={`menu hamburger hamburger--spin ${show ? 'is-active' : ''}`}
            variant="primary"
            onClick={handleShow}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Dynamic content for the Offcanvas.Body */}
              Some text as placeholder. In real life, you can have the elements you have chosen. Like text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
