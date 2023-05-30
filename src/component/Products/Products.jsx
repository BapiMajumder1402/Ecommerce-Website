import React, { useState, useEffect } from 'react';
import pro from './Products.module.css'
import { add, addItem } from '../../Redux/CartSlice';
import { useDispatch , useSelector} from 'react-redux';
import { STATUSES, fetchProducts } from '../../Redux/ProductsSlice';
import { setStatus } from '../../Redux/ProductsSlice';

function Products() {
  
    const {data:products,status}=useSelector(state=>state.product)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    function handleAdd(product){
        dispatch(addItem(product))
    }

    if(status===STATUSES.LOADING){
        return <h2>Loading...</h2>
    }
    if(status===STATUSES.ERROR){
        return <h2>OOOpssss... Something Went Wrong</h2>
    }
    return (
        <div>
            {products.map((product) => (
                <div className={pro.box} key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    <button onClick={()=>handleAdd(product)}>add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
