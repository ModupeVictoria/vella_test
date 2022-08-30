import { createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    carts : []
}

const cartSlice = createSlice({
    name: "Carts",
    initialState : {
        value: initialStateValue,
    },

    reducers: {
        cartItems: (state, action) =>{
            state.value = action.payload;
        },
        
    }
})

export const {cartItems} = cartSlice.actions
export default cartSlice.reducer