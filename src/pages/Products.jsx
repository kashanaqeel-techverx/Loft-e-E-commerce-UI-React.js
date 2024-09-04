import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductsMapping from "../components/ProductsMapping";
import CategoryList from "../components/Categorylist";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const categoryParam = useParams().category;
  const [category, setCategory] = useState(
    categoryParam ? categoryParam : "smartphones"
  );
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  const allProducts = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    setProducts(response.data.products);
  };

  const getCategoryList = async () => {
    const categories = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setCategoryList(categories.data);
  };

  console.log(products);
  console.log(categoryList);

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    allProducts();
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start justify-evenly w-full pt-5 bg-gray-100 pb-5">
        <div className="min-h-screen w-1/5 self-start">
          <h1 className="text-lg font-semibold text-gray-600 text-left mt-2 ml-8">
            Products Categories
          </h1>
          <div className="border-b-2 border-gray-200 mt-3 ml-8 w-3/4"></div>
          {categoryList.map((element) => {
            return element.name != "Beauty" ? (
              <CategoryList
                onClick={() => {
                  setProducts([]);
                  setCategory(element.slug);
                }}
              >
                {element.name}
              </CategoryList>
            ) : null;
          })}
        </div>
        <div className="flex flex-col w-3/4">
          <h1 className="text-xl font-semibold text-gray-600 text-left mt-2.5 ml-1 capitalize">
            {category}
          </h1>
          <div className="grid grid-cols-3 gap-9 w-full mt-4">
            {products.map((product) => {
              return (
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
