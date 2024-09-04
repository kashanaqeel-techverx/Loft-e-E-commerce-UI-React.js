import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const defaultValue = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Please Enter Username"),
    password: yup.string().required("Please Enter Password"),
    confirmPassword: yup.string().required("Please Re-Enter Password"),
    email: yup.string().required("Please Enter Email").email("Invalid Email"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
      {/* bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-200 via-blue-200 to-white */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gradient-to-r from-[#2b3a8b] to-[#027eaf] rounded-3xl shadow-gray-500 shadow-lg py-5 px-6 sm:px-8 lg:px-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white my-2">
          Welcome
        </h1>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center justify-evenly w-full">
            <div className="w-full">
              <Field
                name="username"
                type="text"
                placeholder="Create Username"
                className="w-full h-8 sm:h-10 lg:h-12 px-4 py-2 mt-4 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-white mt-1 sm:mt-2 text-xs sm:text-sm"
              />
            </div>

            <div className="w-full">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-8 sm:h-10 lg:h-12 px-4 py-2 mt-4 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-white mt-1 sm:mt-2 text-xs sm:text-sm"
              />
            </div>

            <div className="w-full">
              <Field
                name="password"
                type="password"
                placeholder="Create Password"
                className="w-full h-8 sm:h-10 lg:h-12 px-4 py-2 mt-4 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-white mt-1 sm:mt-2 text-xs sm:text-sm"
              />
            </div>

            <div className="w-full">
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full h-8 sm:h-10 lg:h-12 px-4 py-2 mt-4 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-white mt-1 sm:mt-2 text-xs sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-1/4 text-[#175c9d] font-semibold text-lg sm:text-xl py-2 mt-6 bg-white rounded-xl hover:scale-95 duration-300 active:scale-90"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
