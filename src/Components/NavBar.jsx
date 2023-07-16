import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Mora-Bag</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Inicio</Nav.Link>
                        <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Carteras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Ubicacion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Conocenos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <CartWidget href="#deets"></CartWidget>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar