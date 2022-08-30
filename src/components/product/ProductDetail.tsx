import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {selectedProduct } from "../../features/ProductSlice"
import {cartItems } from "../../features/CartSlice"

const ProductDetail: React.FC = () => {
    const [proDetail,setProDetail]=useState<any>([]);

    const Product = useSelector((state:any) => state?.product?.value);

    // This is used to update the store
    const dispatch = useDispatch();
    const cart = useSelector((state:any) => state?.cart?.value);
    let myCart: any = cart.carts;
    
    const newcart = cart

    const productParams = useParams<any>();
    

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${productParams?.id}`)
        .then((res) => {
            //  console.log(res.data)
             const product = res.data
             setProDetail(product) 
             dispatch(selectedProduct(product));
          });
       },[productParams])

       
       const addToCart = React.useCallback(() =>{
          myCart = Object.assign([], myCart);
          myCart.push(proDetail);
      dispatch(cartItems(myCart))
     
    },[proDetail])
    return (
      <>
      
      <div className="md:mt-16">
      <div className=' container flex flex-col md:flex-row md:justify-between md:mt-10 md:mx-10 md:p-6 px-2 mx-3 mt-2  items-center rounded-lg border border-gray-200 shadow-md'>
      <h3 className='font-bold capitalize text-xl my-6 md:hidden'>Category: <span className='font-semibold'>{proDetail?.category}</span></h3>
      <div className='text-center mx-auto items-center'>
        <img className="w-[40%] text-center mx-auto items-center" src={proDetail?.image} alt='product'/>
      </div>
      <div className='text-left px-3'>

      <h3 className='hidden md:block font-bold capitalize text-xl my-6'>Category: <span className='font-semibold'>{proDetail?.category}</span></h3>
            <h3 className='font-bold capitalize text-xl  mt-5'>Description: <span className='text-[#777] text-lg font-semibold'>{proDetail?.description}</span></h3>
            <h3 className='font-bold text-xl mt-2'>Price: <span className='font-bold text-2xl'>${proDetail?.price}</span></h3>

            <div className="mt-5">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-[50%]" onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
      </div>
      </div>

      

      </>
    );
  };
  
  export default ProductDetail;