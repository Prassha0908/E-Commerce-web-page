import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],

    },
    reducers: {
        itemAdded: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload.id)
            if (addedItem) {
                addedItem.quantity += 1
                
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            // console.log(action.payload)
        },
        itemDeleted: (state, action) => {
            state.items = state.items.filter((x) => x.id !== action.payload)
        },
        qnAdd: (state, action) => {
            const item = state.items.find((x) => x.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.amount;
            }
        },
        qnDel: (state, action) => {
            const item = state.items.find((x) => x.id === action.payload.id);
            if (item) {
                item.quantity -= action.payload.amount;
                if (item.quantity <= 0) {
                    state.items = state.items.filter((x) => x.id !== action.payload.id);
                }
            }
            // if (quantity <= 0) {
            //     state.items = state.items.filter((x) => x.id !== action.payload)
            // }
        }

    }
})
export const { itemAdded, itemDeleted, qnAdd, qnDel } = cartSlice.actions
export default cartSlice.reducer