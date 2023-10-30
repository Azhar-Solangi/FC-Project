import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],

};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const isItemExsisting = state.items.find(item => item.id === action.payload.id)
            if (!isItemExsisting) {
                state.items.push({ ...action.payload, Quantity: 1, })
            }

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(product => product.id === action.payload.id)
            if (item) {
                item.Quantity += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(product => product.id === action.payload.id)
            if (item) {
                item.Quantity -= 1
            }
        },
    }

});
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer