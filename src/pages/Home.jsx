import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductsMapping from "../components/ProductsMapping";
import { useNavigate } from "react-router-dom";
import blackFriday from "../assets/black_friday.jpg";

const Home = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [slicedArray, setSlicedArray] = useState([]);
  const [featuredHeading, setFeaturedHeading] = useState("Featured Products");
  const navigate = useNavigate();

  const getHomeProducts = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=180"
    );
    setHomeProducts(response.data.products);
  };

  const handleSearch = async () => {
    if (search) {
      setSlicedArray([]);
      const searchResponse = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setSlicedArray(searchResponse.data.products);
      if (searchResponse.data.products.length === 0) {
        setFeaturedHeading("No Results Found");
      } else setFeaturedHeading(`Search Results for ${search}`);
    }
  };

  const arraySlicing = () => {
    // using Fisher-Yates algorithm
    for (let i = homeProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [homeProducts[i], homeProducts[j]] = [homeProducts[j], homeProducts[i]];
    }
    setSlicedArray(homeProducts.slice(0, 8));
    console.log(slicedArray);
  };

  useEffect(() => {
    getHomeProducts();
  }, []);

  useEffect(() => {
    arraySlicing();
  }, [homeProducts]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-100 pb-5">
        <div className="flex flex-row items-center justify-center w-full max-w-6xl relative">
          <input
            className="w-3/5 mt-2 bg-gray-400 text-gray-50 text-lg font-semibold h-10 rounded-3xl px-5 placeholder:text-gray-300 focus:outline-gray-600"
            type="text"
            placeholder="Search Products, Categories etc."
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value === "") {
                setSlicedArray([]);
                arraySlicing();
                setFeaturedHeading("Featured Products");
              }
            }}
          />
          <img
            className="w-7 mt-2 absolute right-60 mr-1 active:scale-90 cursor-pointer"
            src="https://img.icons8.com/ios-filled/50/EBEBEB/search--v1.png"
            alt="search--v1"
            onClick={handleSearch}
          />
        </div>
        <div className="w-full h-1/5 mt-4">
          <img
            src={blackFriday}
            alt="Effortless Shopping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full my-2">
          <div className="border-b-2 border-gray-300 my-4 w-2/5 pt-2"></div>
          <h1 className="text-2xl font-semibold text-gray-600 text-center mt-2.5">
            {featuredHeading}
          </h1>
          <div className="border-b-2 border-gray-300 my-4 w-2/5 pt-2"></div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {slicedArray.map((product) => (
            <ProductsMapping
              image={
                product.images.length <= 1
                  ? product.images[0]
                  : product.images[2]
              }
              name={product.title}
              category={product.category}
              price={product.price}
              detail={() => navigate(`/products/detail/${product.id}`)}
              item={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
