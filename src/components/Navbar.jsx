import { Link, useNavigate } from "react-router-dom";
import loftELogo from "../assets/Loft_logo.png";
import cartImage from "../assets/cart.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItemsNumber = useSelector((state) => state.cartItemCounter.value);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-between w-full bg-gray-100">
      <img
        src={loftELogo}
        alt="LOFT E"
        className="w-48 mt-2 ml-10 hover:scale-95 duration-300"
        onClick={() => window.location.reload()}
      />
      <div className="flex flex-row items-center justify-evenly w-1/3 mt-1">
        <Link
          to="/"
          className="text-xl font-semibold text-gray-700 hover:text-blue-700 duration-200"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-xl font-semibold text-gray-700 hover:text-blue-700 duration-200"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-xl font-semibold text-gray-700 hover:text-blue-700 duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-xl font-semibold text-gray-700 hover:text-blue-700 duration-200"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-row items-center justify-evenly w-1/4 mt-1 mr-3">
        <div className="flex flex-row items-center justify-evenly w-1/5">
          <img
            src={cartImage}
            alt="Cart"
            className="w-10 mr-1"
            onClick={() => navigate("/cart")}
          />
          <h1 className="text-md font-semibold text-white bg-gradient-to-r from-[#2b3a8b] to-[#027eaf] p-2 py-0.5 rounded-3xl">
            {cartItemsNumber}
          </h1>
        </div>
        <Link
          to="/login"
          className="text-lg font-semibold text-white bg-gradient-to-r from-[#2b3a8b] to-[#027eaf] hover:opacity-90 p-2 px-4 rounded-2xl hover:scale-95 duration-300"
        >
          Login / Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
