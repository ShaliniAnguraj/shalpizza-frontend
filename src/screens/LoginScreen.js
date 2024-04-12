import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import lgimg from "../assets/login.jpg";
import { loginUser } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error, success } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login">
      <div className="min-h-screen flex items-center justify-center bg-red-500">
        <div className="bg-slate-50  flex rounded-2xl shadow-lg max-w-3xl p-3 px-7 items-center">
          <div
            className="relative mb-3 justify-center"
            data-te-input-wrapper-init
          >
            <div>
              <h1 className="flex justify-center font-extrabold text-red-600 text-3xl m-2">
                Sign In
              </h1>
              <p className="flex justify-center font-semibold text-lg mt-4 text-yellow-500">
                If you are already a member, easily log in
              </p>
            </div>
            <div className="flex justify-center">
              <img className="h-60 w-60" src={lgimg} alt="loginimage" />
            </div>

            {loading && <Loading />}
            {success && <Success>User Login Successfully</Success>}
            {error && <Error error="Invalid Credentials" />}

            <div>
              <input
                required
                type="email"
                placeholder="email"
                className="w-full px-3 mb-3 py-1 rounded-lg font-bold text-base bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none"
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
              <br />
              {/* <p>
              Admin : admin123@gmail.com <br />
              password : 12345
            </p> */}

              <button
                onClick={login}
                className="mt-4 tracking-wide font-semibold bg-yellow-500 text-gray-100 w-full py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-3 hover:text-xl hover:text-black">
                  Login
                </span>
              </button>
              <h3 className="mt-6 text-gray-600 text-center">
                <p className="mr-2">
                  Don't have an account?
                  <span className="text-red-500 text-lg font-semibold hover:text-xl hover:text-orange-600">
                    <a href="/register" className="mt-2">
                      {" "}
                      Click Here To Register
                    </a>
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

export default LoginScreen;
