import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setProducts } from "../../features/ProductSlice"
import {cartItems } from "../../features/CartSlice"

const Cart: React.FC = () => {
  const [proList, setProList] = useState([]);

  const cart = useSelector((state:any) => state?.cart?.value);
  let myarray: any = cart;

  // How to access the redux store
  const products = useSelector((state:any) => state?.product?.value);

   // This is used to update the store
   const dispatch = useDispatch();

   const [checked,setChecked] = useState<any>(true);
   console.log(checked)

   const checkout = React.useCallback(() =>{
   dispatch(cartItems([]))
   setChecked(false)
},[])


 
  return (
    <>
      <div className="">
        <div className="my-10 mx-6 grid grid-cols-1 md:grid-cols-4 md:gap-4" style={{maxHeight:'70vh',overflow:'auto'}}>
          {cart.length ?cart?.map((product: any, index:any) => (
            <Link to={`/productDetail/${product?.id}`}>
              <div key={index} className="p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <div>
                  <img
                    className="rounded-t-lg w-full h-[300px]"
                    src={product?.image}
                    alt="product"
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {product?.title}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700">
                    Price: $ {product?.price}
                  </p>
                </div>

                     </div>
            </Link>

          )) :''}



        </div>
        <div className="mt-5 text-center">
            {cart.length ? 
             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-[50%]" onClick={checkout}>Checkout</button>
       :
       <Link to={`/`}>
       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-[50%]" onClick={checkout}>GoHome</button>
       </Link>
            }
           
            </div>
      </div>
    </>
  );
};

export default Cart;