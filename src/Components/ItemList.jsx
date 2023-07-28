
 import Item from "./Item"





const Itemlist = ({productos}) => {
    return (
        <>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        nombre={p.nombre}
                        descripcion={p.descripcion}
                        stock={p.stock}
                        precio={p.precio}
                    />
                )
            })
            }
        </>
    )
}

export default Itemlist
