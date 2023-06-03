import React, { useState, useEffect } from 'react';
import pro from './Products.module.css';
import { add, addItem } from '../../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../../Redux/ProductsSlice';
import { setStatus } from '../../Redux/ProductsSlice';

function Products() {
    const { data: products, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    function handleAdd(product) {
        dispatch(addItem(product));
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <img src="https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/200w.webp?cid=ecf05e474own80jqpt7dtup401jsg8tnwadbuxhelx5zpjv3&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="" />;
    }

    let filteredProducts = products;
    if (selectedCategory !== 'all') {
        filteredProducts = products.filter(
            (product) => product.category === selectedCategory
        );
    }

    return (
        <div className={pro.main}>
            <div className={pro.select}>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Ornaments</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
            <div className={pro.products} >
                {filteredProducts.map((product) => (
                    <div>
                        <div className={pro.box} key={product.id}>
                            <div className={pro.img}>
                                <img src={product.image} alt="product" />
                            </div>
                            <div className={pro.details}>
                                <h4>{product.title}</h4>
                                <h4>${product.price}</h4>
                                <div className={pro.btn}>
                                <button className={pro.add} onClick={() => handleAdd(product)}>Add to cart</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Products;
