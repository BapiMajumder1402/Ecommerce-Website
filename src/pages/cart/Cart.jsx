import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoreItem, removeItem } from '../../Redux/CartSlice';
import cart from './Cart.module.css';

function Cart() {
  const [total, setTotal] = useState(0);
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    
    dispatch(removeItem(id));
  };
  const handleAdd = (id) => {
    
    dispatch(addMoreItem(id));
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      data.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });

      return totalPrice;
    };

    setTotal(calculateTotalPrice());
  }, [data]);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {data.map((item) => (
          <div className={cart.img} key={item.id}>
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h4>{item.price}</h4>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleRemove(item.id)}>-</button>
            <button onClick={() => handleAdd(item.id)}>+</button>
          </div>
        ))}
      </div>
      <p>Total Price: {total}</p>
    </div>
  );
}

export default Cart;
