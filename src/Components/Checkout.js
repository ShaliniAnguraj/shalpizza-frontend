import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";

export default function Checkout({ subtotal }) {
  
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const dispatch = useDispatch();

  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully"/>}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51MooiFSHPG48nSV9oHtGi2DY3g7xDMdtNonoPDahWzqdPLfSquJRbiWwqlrg5OWmvGHWC2jCFFXtcie3jgNhrFXM007Uc237Rs"
        currency="INR"
      >
      <button className=" bg-red-500 rounded text-white px-4 py-3"> checkout </button>

      </StripeCheckout>
    </div>
  );
}