import { createSlice } from '@reduxjs/toolkit';


export const STATUSES=Object.freeze({///readonly object
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading...",
})

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action){
            state.data=action.payload
        },
        setStatus(state, action){
            state.status=action.payload
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer


///THUNKS

export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const res=await fetch("https://fakestoreapi.com/products")
            const productData = await res.json()
            dispatch (setProducts(productData))
            dispatch(setStatus(STATUSES.IDLE))
        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}