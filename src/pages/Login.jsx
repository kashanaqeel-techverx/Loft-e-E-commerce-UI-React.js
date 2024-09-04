import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const Login = () => {
  const defaultValue = {
    userName: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required("Please Enter Username"),
    password: yup.string().required("Please Enter Password"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 bg-gray-100">
      {/* bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-200 via-indigo-200 to-indigo-100 */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gradient-to-r from-[#2b3a8b] to-[#027eaf] rounded-3xl shadow-gray-500 shadow-lg py-8 pb-5 px-6 sm:px-8 lg:px-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Welcome Back
        </h1>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center w-full">
            <div className="w-full mb-4">
              <Field
                name="userName"
                type="text"
                placeholder="Username"
                className="w-full h-10 sm:h-12 lg:h-14 px-4 py-2 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-white text-xs sm:text-sm mt-2"
              />
            </div>
            <div className="w-full mb-6">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full h-10 sm:h-12 lg:h-14 px-4 py-2 border-none rounded-xl text-gray-500 font-semibold text-lg focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-white text-xs sm:text-sm mt-2"
              />
            </div>
            <button
              type="submit"
              className="w-1/4 bg-white text-[#175c9d] font-semibold text-lg sm:text-xl py-2 rounded-xl hover:scale-95 duration-300 active:scale-90"
            >
              Login
            </button>
          </Form>
        </Formik>
        <p className="text-white font-semibold text-xs sm:text-sm lg:text-md mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-white font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
