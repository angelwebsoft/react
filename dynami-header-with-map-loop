import { Container, Nav, Navbar } from 'react-bootstrap';

import BusinessLogo from '../assets/img/white-logo.svg';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function Header() {
  const navLinks = navigation.map((item, index) => (
    <li key={item.name}>
      <Nav.Link href={item.href} >
        {item.name}
      </Nav.Link>
    </li>
  ));

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={BusinessLogo} alt="Business Logo" />
          </Navbar.Brand>
          <Nav as={'ul'} className="me-auto">
            {navLinks}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
