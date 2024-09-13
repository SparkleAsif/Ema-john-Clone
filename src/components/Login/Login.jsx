import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const{signIn}= useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event)=>{
    event.preventDefault();

    const form = event.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const loggedUser= result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error=>{
      console.log(error)
    })
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg px-10 pt-8 pb-10 mb-4"
        style={{ boxShadow: '-10px 10px 2px rgba(249, 170, 55)' }}>
          <h2 className="text-center text-3xl font-bold mb-8">Login</h2>{" "}
          <form action="" onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-8">
            <button
              className="bg-orange-300 hover:bg-orange-400 font-bold py-3 px-4 rounded w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          </form>
          <div className="text-center mb-6">
            <p className="text-gray-600">
              New to Ema-john?{" "}
              <a href="/signUp" className="text-orange-400 hover:text-orange-500">
                Create New Account
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div>
            <button
              className="hover:text-white hover:bg-orange-400 border-2  py-3 px-4 rounded w-full flex items-center justify-center"
              type="button"
            >
              <FcGoogle className="mr-2" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
