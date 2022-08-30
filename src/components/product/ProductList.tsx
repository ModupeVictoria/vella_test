import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setProducts } from "../../features/ProductSlice"

const ProductList: React.FC = () => {
  const [proList, setProList] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  // How to access the redux store
  const products = useSelector((state:any) => state?.product?.value);

   // This is used to update the store
   const dispatch = useDispatch();


 console.log(searchValue)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //console.log(res.data)
      const products = res.data
      setProList(products)
       dispatch(setProducts(products));
    });
  }, []);

 
  return (
    <>
      <div className="">
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>


          <div className="flex justify-end mr-6 mt-5">
            <input type="search" id="default-search" className="block p-4  w-[40%] md:w-[30%] text-sm  mr-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required defaultValue={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" onClick={(e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => null}>Search</button>
          </div>


        </form>
        <div className="my-10 mx-6 grid grid-cols-1 md:grid-cols-4 md:gap-4">
          {proList?.map((product: any, index) => (
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

                {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Buy Now</button> */}

              </div>
            </Link>

          ))}



        </div>
      </div>
    </>
  );
};

export default ProductList;