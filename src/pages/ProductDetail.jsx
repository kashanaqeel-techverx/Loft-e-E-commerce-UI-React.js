import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import {
  addItem,
  incrementItemByAmount,
} from "../Redux/Features/items_In_Cart";

const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [noOfItems, setNoOfItems] = useState(1);

  const id = useParams().id;
  console.log(id);

  const details = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setDetail(response.data);
  };

  console.log(detail);

  useEffect(() => {
    details();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start min-h-screen w-full bg-gray-100">
        <div className="w-full max-w-6xl mx-16 p-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm md:text-base text-gray-700 my-5 ml-4">
            <Link to="/products" className="font-semibold hover:text-blue-700">
              Products
            </Link>
            <span>&gt;</span>
            <Link
              to={"/products/" + detail.category}
              className="font-semibold hover:text-blue-700 capitalize"
            >
              {detail.category}
            </Link>
            <span>&gt;</span>
            <span className="text-gray-500">{detail.title}</span>
          </div>

          {detail.images ? (
            <div className="flex flex-col md:flex-row items-start md:items-center pt-3">
              {/* Product Image with Box */}
              <div className="w-full md:w-1/2 h-96 flex justify-center mb-6 md:mb-0">
                <div className="w-3/4 h-full bg-gray-300 p-4 rounded-xl flex justify-center">
                  <img
                    src={detail.images[2]}
                    alt={detail.title}
                    className="w-auto h-full rounded-xl"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 h-96 pl-0 md:pl-7 flex flex-col justify-center pb-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                  {detail.title}
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-gray-500 capitalize mb-7 pl-2">
                  {detail.category}
                </h2>
                <p className="text-base md:text-lg font-semibold text-gray-600 mb-7 pl-2">
                  {detail.description}
                </p>
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-7 pl-2">
                  ${detail.price} USD
                </h1>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ml-3"
                    onClick={() => {
                      dispatch(incrementItemByAmount(noOfItems));
                      dispatch(addItem([noOfItems, detail]));
                    }}
                  >
                    Add to Cart
                  </button>
                  <div className="ml-10">
                    <button
                      className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold text-md py-1.5 pb-3 px-3.5 rounded"
                      onClick={() => setNoOfItems(noOfItems + 1)}
                    >
                      +
                    </button>
                    <span className="px-4 text-lg font-semibold text-gray-700">
                      {noOfItems}
                    </span>
                    <button
                      className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold text-md py-1.5 pb-3 px-4 rounded"
                      onClick={() =>
                        noOfItems >= 1
                          ? setNoOfItems(noOfItems - 1)
                          : setNoOfItems(0)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
