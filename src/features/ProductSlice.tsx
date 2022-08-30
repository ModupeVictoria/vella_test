import { createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    products :[]
}

const productSlice = createSlice({
    name: "Products",
    initialState : {
        value: initialStateValue,
    },

    reducers: {
        setProducts: (state, action) =>{
            state.value = action.payload;
        },
        selectedProduct : (state, action) =>{
            state.value = action.payload;
        }
    }
})

export const {setProducts, selectedProduct} = productSlice.actions
export default productSlice.reducer