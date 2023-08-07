import React from 'react'
import { useParams, } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
    const { id } = useParams()

    const filteredProducts = productos.filter((producto) => producto.id == id)
    return (
        <>
            { filteredProducts.map((p) => {
                return (
                    <Item
                        key={p.id}
                        nombre={p.nombre}
                        descripcion={p.descripcion}
                    />
                )
            })
            }
        </>
    )
}
export default ItemDetail;