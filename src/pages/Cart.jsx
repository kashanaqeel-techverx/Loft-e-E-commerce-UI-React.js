import { useSelector } from "react-redux";
import CartMapping from "../components/CartMapping";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItemCounter.items);

  console.log(cartItems);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen w-full bg-gray-100">
      <Navbar classname="position-absolute" />
      <h1 className="text-3xl font-semibold text-gray-500 text-left capitalize py-6 pb-1 px-20 bg-gray-100 ">
        Your Product Cart
      </h1>
      {cartItems.length != 0 ? (
        cartItems.map((element) => {
          return (
            <CartMapping
              image={element.item.images[2]}
              title={element.item.title}
              category={element.item.category}
              description={element.item.description}
              price={element.item.price}
              detail={() => navigate(`/products/detail/${product.id}`)}
              counter={element.counter}
              item={element.item}
              id={element.id}
            />
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center w-full mt-36 bg-gray-100">
          <h1 className="text-3xl font-semibold text-gray-600 text-left ml-1 capitalize">
            Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
