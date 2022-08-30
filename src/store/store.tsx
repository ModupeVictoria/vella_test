import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../features/ProductSlice'
import CartSlice from '../features/CartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, ProductSlice)

  export const store = configureStore({
   
    reducer:{
        product: persistedReducer,
        cart: CartSlice
        //product: persistedReducer,
    },
})

export const persistor = persistStore(store)