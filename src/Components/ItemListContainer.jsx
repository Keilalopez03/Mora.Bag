
import ItemList from "../Components/ItemList"
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const {category}=useParams()
    const productos = [
        { id: 1, nombre: "Billetera Lola ", descripcion: "Billetera Negra", stock: 5, precio:5000, category: "Billeteras"},
        { id: 2, nombre: "Billetera Mora ", descripcion: "Billetera azul", stock: 8, precio:8000,category: "Billeteras" },
        { id: 3, nombre: "Cartera Emma ", descripcion: "Cartera verde", stock: 4 , precio:9000,category: "Carteras"},
        { id: 4, nombre: "Billetera Sol ", descripcion: "Billetera Roja", stock: 7, precio:11000,category: "Billeteras" },
        { id: 5, nombre: "Cartera Shopie ", descripcion: "Cartera Amarilla", stock: 10, precio:22000,category: "Carteras" },
        { id: 6, nombre: "Cartera Londres ", descripcion: "Cartera Celeste", stock: 2, precio:13000,category: "Carteras" },
        { id: 7, nombre: "Billetera Paris ", descripcion: "Billetera Violeta", stock: 6, precio:5000,category: "Billeteras" },
        { id: 8, nombre: "Cartera Dina ", descripcion: "Cartera Rosa", stock: 8, precio:20000,category: "Carteras" },
        { id: 9, nombre: "Billetera Lexy ", descripcion: "Cartera Lila", stock: 8, precio:20000,category: "Billeteras" },
        { id: 10, nombre: "Cartera Vega ", descripcion: "Cartera Rosa", stock: 8, precio:20000,category: "Carteras" },
    ]
    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            resolve(productos);
        } else {
            reject(new Error("no hay ningun dato"));
        }
    });
    
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductos;
                const filtered = res.filter((producto) => producto.category.toUpperCase() === category.toUpperCase());
                setFilteredProducts(filtered);
                console.log(filtered);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, [category]);
    
    return (
        <div className="tarjetas">
            <ItemList productos={filteredProducts} />
        </div>
    );
}

export default ItemListContainer