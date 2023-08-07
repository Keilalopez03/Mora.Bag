import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'




const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <link to={'/'}>
                        <img className='clase-logo' src={logomb} />
                    </link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        < link to={'/category/${"Carteras"}'}>
                            <Nav.Link href="#pricing">Carteras</Nav.Link>
                        </link>
                        < link to={'/category/${"Billeteras"}'}>
                            <Nav.Link href="#pricing">Billeteras</Nav.Link>
                        </link>
                        < link to={'/category/${"Home"}'}>
                        <Nav.Link href="#pricing">Inicio</Nav.Link>
                        </link>
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