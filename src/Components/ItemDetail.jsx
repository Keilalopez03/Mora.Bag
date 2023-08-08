import React from 'react'
import { useParams, } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const ItemDetail = ({ productos }) => {
    const { id } = useParams()
    const filteredProducts = productos.filter((producto) => producto.id == id)
    return (
        <>
            {filteredProducts.map((p) => {
                return (
                    <div className='centralizar-card'>
                        < Card className='card-detalles' >
                            <Card.Header as="h5">Detalles</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h3>{p.nombre}</h3>
                                </Card.Title>
                                <Card.Text> 
                                <p>{p.descripcion}</p>
                                <h3>{p.precio}</h3>     
                            
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        
                    </div>
                )
            })
            }
        </>
    )
}
export default ItemDetail;
