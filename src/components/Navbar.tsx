import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {cartItems } from "../features/CartSlice"

const Navbar: React.FC = () => {
 
  const cart = useSelector((state:any) => state?.cart?.value);
  return (
    <>
    <nav className="bg-white border-gray-200 px-6 py-4 rounded">
  <div className="container flex  justify-between items-center  mx-auto">
    <Link to='/' className="flex items-center pl-6">
        <span className="self-center text-xl text-blue-700 font-semibold whitespace-nowrap">Vella-Test.</span>
    </Link>
    <div>
    <Link to="/tab3" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Cart({cart.length ?cart.length:0 })</Link>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
