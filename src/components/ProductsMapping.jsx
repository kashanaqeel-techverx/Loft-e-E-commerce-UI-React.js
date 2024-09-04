import cartImage from "../assets/cart.png";
import { addItem, incrementItem } from "../Redux/Features/items_In_Cart";
import { useDispatch } from "react-redux";

const ProductsMapping = (props) => {
  const dispatch = useDispatch();

  return props.image ? (
    <div className="flex flex-col items-center justify-between p-3 pl-5 bg-slate-300 rounded-2xl shadow-lg w-72 h-80 hover:scale-95 duration-300 cursor-pointer group">
      <div className="w-full aspect-w-1 aspect-h-1 h-3/4 flex items-center justify-center overflow-hidden group-hover:scale-105 duration-300 p-2">
        <img
          src={props.image}
          alt={props.name}
          className="h-full min-h-full object-contain group-hover:scale-105 duration-300"
          onClick={props.detail}
        />
      </div>
      <div className="flex flex-col items-start text-center mt-2 w-full h-1/4 pb-2">
        <h2 className="text-sm text-gray-500 capitalize" onClick={props.detail}>
          {props.category}
        </h2>
        <div className="flex flex-row items-center justify-between w-full">
          <div
            className="flex flex-col items-start justify-center"
            onClick={props.detail}
          >
            <h1 className="text-md font-semibold text-gray-800 text-left truncate max-w-44">
              {props.name}
            </h1>
            <h3 className="text-md text-blue-600 font-bold">
              {props.price} USD
            </h3>
          </div>
          <img
            src={cartImage}
            alt="Cart"
            className="w-10 mr-3 bg-gray-100 p-1 rounded-lg pb-0.5 group-hover:scale-105 duration-300 shadow-sm shadow-slate-400"
            onClick={() => {
              dispatch(incrementItem());
              dispatch(addItem([1, props.item]));
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductsMapping;
