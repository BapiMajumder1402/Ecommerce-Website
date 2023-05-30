import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, removeItem } from '../../Redux/CartSlice';

function Cart() {
  const [total, setTotal] = useState(0);
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
    dispatch(removeItem(id));
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      data.forEach((item) => {
        totalPrice += item.price ;
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
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h4>{item.price}</h4>
            {/* <p>Quantity: {item.quantity}</p> */}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total Price: {total}</p>
    </div>
  );
}

export default Cart;




