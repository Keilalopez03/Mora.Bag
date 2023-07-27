import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({
    nombre,
    descripcion,
    stock
}) => {
    return (
        <>
            <Card className='contenedor-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
            </Card>
        </>
    )
}



export default Item