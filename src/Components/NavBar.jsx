import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import logomb from "../imagenes/logomb.jpg"

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> <img className='clase-logo' src={logomb} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Carteras</Nav.Link>
                        <Nav.Link href="#pricing">Billeteras</Nav.Link>
                        <Nav.Link href="#pricing">Inicio</Nav.Link>
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