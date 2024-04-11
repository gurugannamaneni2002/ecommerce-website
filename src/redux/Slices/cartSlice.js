import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../data';
const initialState = {
    value:[]
};
const cartSlice = createSlice({
    name:"cartitems",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const { id } = action.payload;
            const productToAdd = products.find(product => product.id === id);
            if (productToAdd) {
                state.value.push(productToAdd);
            }
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.value = state.value.filter(product => product.id !== id);
        }     
        }
    },
)

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;