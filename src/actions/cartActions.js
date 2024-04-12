import { toast } from "react-toastify";

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    };
    if (cartItem.quantity > 10) {
      toast.error("You cannot add more than 10 quantities");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
        toast.error("Remove from Cart");
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });

      }
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    toast.error("Deleted from Cart");

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  export const resetFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: "RESET_FROM_CART", payload: pizza });
    toast.success("Reset Successfully");
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  