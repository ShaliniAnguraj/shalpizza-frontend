import React, { useState } from "react";
import rgimage from "../assets/rgimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";

const RegisterScreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [address, setaddress] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();

  function register() {
    if (password !== cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
        address,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div className="register">
      <div className="bg-red-500 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={rgimage} alt="pizzaimage" />
          </div>
          <div className="md:w-1/2 px-2 md:px-4">
            {loading && <Loading />}
            {success && <Success success="User Registered Successfully" />}
            {error && <Error error="Email already registred" />}
            <div>
              <h1 className="flex justify-center font-extrabold text-red-600 text-3xl m-2">
                Sign Up
              </h1>
              <p className="flex justify-center font-semibold text-lg mt-2 mb-2 text-yellow-500">
                Welcome!!!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <input
                required
                type="text"
                placeholder="name"
                className="w-full px-3 mb-2 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                required
                type="email"
                placeholder="email"
                className="w-full px-3 mb-2 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="w-full px-3 mb-3 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="confirm password"
                className="w-full px-3 mb-3 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
                value={cpassword}
                required
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <input
                type="address"
                placeholder="address"
                className="w-full px-3 mb-3 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
                value={address}
                required
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
              <button
                onClick={register}
                className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-3 hover:text-xl hover:text-black">
                  SignUp
                </span>
              </button>
              <br />
              <h3 className="mt-3 text-gray-800 text-center">
                <p className="mr-2 font-semibold text-sm">
                  Already have an account?
                  <span className="text-red-500 text-lg font-semibold hover:text-xl hover:text-orange-600">
                    <a href="/login"> Click Here To Login</a>
                  </span>
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
