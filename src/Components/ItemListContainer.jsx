
import ItemList from "../Components/ItemList"

const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "Billetera Lola ", descripcion: "Billetera Negra", stock: 5, precio:5000 },
        { id: 2, nombre: "Billetera Mora ", descripcion: "Billetera azul", stock: 8, precio:8000 },
        { id: 3, nombre: "Cartera Emma ", descripcion: "cartera verde", stock: 4 , precio:9000},
        { id: 4, nombre: "Billetera Sol ", descripcion: "Billetera Roja", stock: 7, precio:11000 },
        { id: 5, nombre: "Cartera Shopie ", descripcion: "cartera Amarilla", stock: 10, precio:22000 },
        { id: 6, nombre: "Cartera Londres ", descripcion: "cartera Celeste", stock: 2, precio:13000 },
        { id: 7, nombre: "Billetera Paris ", descripcion: "Billetera Violeta", stock: 6, precio:5000 },
        { id: 8, nombre: "Cartera Dina ", descripcion: "cartera Rosa", stock: 8, precio:20000 },
        { id: 9, nombre: "Billetera Lexy ", descripcion: "cartera Rosa", stock: 8, precio:20000 },
        { id: 10, nombre: "Cartera Vega ", descripcion: "cartera Rosa", stock: 8, precio:20000 },
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
        
            <ItemList productos={productos} />
    )
}

export default ItemListContainer