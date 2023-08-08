import React from 'react'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

        const productos = [
            { id: 1, nombre: "Billetera Lola ", descripcion:<p>En su interior tiene espacio para 6 tarjetas de crédito, sección para billetes, un bolsillo con cierre, un porta lapicera y una solapa extra para guardar lo que quieras</p>, stock: 5, precio:5000, category: "Billeteras"},
            { id: 2, nombre: "Billetera Mora ", descripcion:<p> En su interior tiene espacio para 8 tarjetas de crédito, sección para billetes y un bolsillo con cierre.</p>, stock: 8, precio:8000,category: "Billeteras" },
            { id: 3, nombre: "Cartera Emma ", descripcion: <p>Está confeccionada en material alternativo al cuero con tachas y correa al tono. Luce una exclusiva chapa en metal de Mora Bag, alojada en el frente. Y posee una cómoda correa regulable y extraíble con un hermoso detalle de corazón</p>, stock: 4 , precio:9000,category: "Carteras"},
            { id: 4, nombre: "Billetera Sol ", descripcion: <p> En su interior tiene espacio para 8 tarjetas de crédito, sección para billetes y un bolsillo con cierre.</p>, stock: 7, precio:11000,category: "Billeteras" },
            { id: 5, nombre: "Cartera Shopie ", descripcion: <p> El interior cuenta con divisiones y un compartimento con cierre en el centro.
            Posee cierre con un botón imantado, seguro y a la vez muy práctico. Tiene manijas semirrígidas.
            En el interior dispone de varios bolsillos, uno de ellos con cierre, y un llavero</p>, stock: 10, precio:22000,category: "Carteras" },
            { id: 6, nombre: "Cartera Londres ", descripcion:<p>En su interior cuenta con bolsillos, uno de ellos con cierre y un llavero. Posee manija semirrígida, correa regulable y extraíble así la podés usar como bandolera</p> , stock: 2, precio:13000,category: "Carteras" },
            { id: 7, nombre: "Billetera Paris ", descripcion: <p> En su interior tiene espacio para 8 tarjetas de crédito, sección para billetes y un bolsillo con cierre.</p>, stock: 6, precio:5000,category: "Billeteras" },
            { id: 8, nombre: "Cartera Dina ", descripcion:<p>Está Diseñada para adaptarse a diferentes ocasiones. Posee chapa de Juanita en silicona en el frente, una correa regulable y extraíble, para que la uses como sobre. En el interior dispone de dos bolsillos, uno de ellos con cierre</p>, stock: 8, precio:20000,category: "Carteras" },
            { id: 9, nombre: "Billetera Lexy ", descripcion: <p> En su interior tiene espacio para 8 tarjetas de crédito, sección para billetes y un bolsillo con cierre.</p>, stock: 8, precio:20000,category: "Billeteras" },
            { id: 10, nombre: "Cartera Vega ", descripcion: <p>En su interior, vas a encontrar dos bolsillos, uno de ellos con cierre, para mantener sus tesoros organizados en este mundo rosa. La correa es regulable y extraíble, dándote la libertad de llevarla como un elegante bolso</p>, stock: 8, precio:20000,category: "Carteras" },
        ]
        const getProductos = new Promise((resolve, reject) => {
            if (productos.length > 0) {
                resolve(productos);
            } else {
                reject(new Error("no hay ningun dato"));
            }
        });
        
        getProductos
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        return (
            
                < ItemDetail productos={productos} />
        )
    }

export default ItemDetailContainer