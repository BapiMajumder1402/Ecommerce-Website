import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../Redux/CartSlice'
function Cart() {
  const data =useSelector(state=>state.cart)

const dispatch=useDispatch()

  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
      <h2>cart</h2>
      <div>
        {
          data.map((e)=>(
            <div>
              <img src={e.image} alt="" />
              <h5>{e.title}</h5>
              <h4>{e.price}</h4>
              <button onClick={()=>handleRemove(e.id)}>remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
