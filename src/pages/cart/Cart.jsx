import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoreItem, removeItem } from '../../Redux/CartSlice';
import cart from './Cart.module.css';
import { SiAddthis } from 'react-icons/si'
import { IoIosRemoveCircle } from 'react-icons/io'

function Cart() {
  const [show, setShow] = useState(false);
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
    if (data.length === 0) {
      setShow(!show)
    }
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
    <div className={cart.main}>
      {!show ?
        <div className={cart.outBox}>
          <div className={cart.box}>

            {data.map((item) => (
              <div className={cart.container} key={item.id}>
                <img src={item.image} alt="" className={cart.sec} />

                <h5 className={cart.sec}>{item.title}</h5>
                <h4 className={cart.sec}>$ {item.price}</h4>
                <div className={cart.qty}>
                  <button onClick={() => handleRemove(item.id)}><IoIosRemoveCircle /></button>
                  <p> {item.quantity}</p>
                  <button onClick={() => handleAdd(item.id)}><SiAddthis /></button>
                </div>

              </div>
            ))}
          </div>
          <div className={cart.total}>
            <p >Total Price: {total}</p>
            <button>Checkout</button>
          </div>

        </div> :
        <img src="https://whiteboardsdirect.com.au/wp-content/uploads/2019/12/Your-cart-is-empty.png" alt="" className={cart.empty} />
      }


    </div>
  );
}

export default Cart;
