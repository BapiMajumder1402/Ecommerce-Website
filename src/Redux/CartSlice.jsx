import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add(state, action) {

        //     state.push(action.payload)
        // },
        // remove(state, action) {
        //     return state.filter((item) => item.id !== action.payload)
        // },
        addItem(state, action) {
            const { id, title, price, image } = action.payload;
            const existingItem = state.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ id, title, price, image, quantity: 1 });
            }
        },
        addMoreItem(state, action) {
            const  id= action.payload;
            const existingItem = state.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } 
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    return state.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        // removeAll(state, action) {
        //     const id = action.payload;
        //     return state.filter((item) => item.id !== id);
        // },
    }
})

export const { add, remove,addItem, removeItem, removeAll ,addMoreItem} = cartSlice.actions
export default cartSlice.reducer