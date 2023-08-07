import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
const Item = ({
    nombre,
    descripcion,
    stock,
    precio,
    category,

}) => {
    return (
        <>
            <Card className='contenedor-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                        {category}
                    </Card.Text>
                    <Card.Text>
                        {precio}
                    </Card.Text>
                    <Link to={'/item/${id}'}>
                        <Button  className="button-card">Ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}



export default Item