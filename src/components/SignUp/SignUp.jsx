import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState('');
  const {createUser}=useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // Clear error if everything is okay
    setError('');

    // Email validation
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Password validation
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return passwordRegex.test(password);
    };

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one letter and one number');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be 6 characters or longer');
      return;
    }

    
    // Handle successful form submission here
    console.log(email, password, confirm);


    createUser(email, password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message);
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div
          className="bg-white shadow-md rounded-lg px-10 pt-8 pb-10 mb-4"
          style={{ boxShadow: "-10px 10px 2px rgba(249, 170, 55)" }}
        >
          <h2 className="text-center text-3xl font-bold mb-8">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
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
                name="password"
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm"
              >
                Confirm Password
              </label>
              <input
                name="confirm"
                type="password"
                id="confirm"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-5">
              <p className="text-red-600">{error}</p>
            </div>
            <div className="mb-8">
              <button
                className="bg-orange-300 hover:bg-orange-400 font-bold py-3 px-4 rounded w-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-orange-400 hover:text-orange-500"
              >
                Login
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
              className="hover:text-white hover:bg-orange-400 border-2 py-3 px-4 rounded w-full flex items-center justify-center"
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

export default SignUp;
