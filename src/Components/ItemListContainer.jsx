
import ItemList from "..Component/ItemList"

const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "productoc A", descripcion: "cartera rosa", stock: 5 },
        { id: 2, nombre: "producto B", descripcion: "cartera azul", stock: 8 },
        { id: 3, nombre: "producto C", descripcion: "cartera verde", stock: 4 }
    ]
    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("no hay datos"))
        }
    })
    getProductos
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })






















    return (
        <>
            {<ItemList productos={productos} />}
        </>
    )
}



export default ItemListContainer