const CategoryList = ({ onClick, children }) => {
  return (
    <>
      <h1
        className="text-md font-semibold text-gray-600 text-left mt-2 ml-8 cursor-pointer hover:text-blue-600 duration-300"
        onClick={onClick}
      >
        {children}
      </h1>{" "}
    </>
  );
};

export default CategoryList;
