import { useDispatch } from "react-redux";
import {
  addItem,
  decrementItem,
  deletItem,
  incrementItem,
  updateItem,
} from "../Redux/Features/items_In_Cart";

const CartMapping = (props) => {
  const increment = 1;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full bg-gray-100">
        <div className="w-full max-w-6xl mx-16 p-4 scale-90">
          {props.image ? (
            <div className="flex flex-col md:flex-row items-start md:items-center pt-3">
              <div className="w-full md:w-1/2 h-96 flex justify-center mb-6 md:mb-0">
                <div className="w-2/3 h-full bg-gray-300 p-4 rounded-3xl flex justify-center">
                  <img
                    src={props.image}
                    alt={props.title}
                    className="w-auto h-full rounded-xl"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 h-96 pl-0 md:pl-7 flex flex-col justify-center pb-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                  {props.title}
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-gray-500 capitalize mb-7 pl-2">
                  {props.category}
                </h2>
                <p className="text-base md:text-lg font-semibold text-gray-600 mb-7 pl-2">
                  {props.description}
                </p>
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-7 pl-2">
                  ${props.price} USD
                </h1>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ml-3"
                    onClick={() => {
                      dispatch(deletItem([props.item, props.counter]));
                    }}
                  >
                    Delete
                  </button>
                  <div className="ml-10">
                    <button
                      className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold text-md py-1.5 pb-3 px-3.5 rounded"
                      onClick={() => {
                        dispatch(incrementItem());
                        dispatch(addItem([increment, props.item]));
                      }}
                    >
                      +
                    </button>
                    <span className="px-4 text-lg font-semibold text-gray-700">
                      {props.counter}
                    </span>
                    <button
                      className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold text-md py-1.5 pb-3 px-4 rounded"
                      onClick={() => {
                        if (props.counter === 1) {
                          dispatch(deletItem([props.item, props.counter]));
                        } else {
                          dispatch(decrementItem());
                          dispatch(updateItem([increment, props.item]));
                        }
                      }}
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

export default CartMapping;
