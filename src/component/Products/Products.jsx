import React, { useState, useEffect } from 'react';
import pro from './Products.module.css'
function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div className={pro.box} key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    <button>add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
