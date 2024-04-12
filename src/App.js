import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Header from "./Components/Home/Header/Header";
import HeaderBottom from "./Components/Home/Header/HeaderBottom";
import Footer from "./Components/Home/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import MenuScreen from "./screens/MenuScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import AdminScreen from "./screens/AdminScreen";
import UsersList from "./screens/UsersList";
import OrdersList from "./screens/OrdersList";
import PizzasList from "./screens/PizzasList";
import AddPizza from "./screens/AddPizza";
import EditPizza from "./screens/EditPizza";
import OrderScreen from "./screens/OrderScreen";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/admin" element={< AdminScreen />} />
        <Route path="/admin/userslist" element={< UsersList />} />
        <Route path="/admin/orderslist" element={< OrdersList />} />
        <Route path="/admin/pizzaslist" element={< PizzasList />} />
        <Route path="/admin/addpizza" element={< AddPizza />} />
        <Route path="/admin/editpizza/:pizzaid" element={< EditPizza />} />
      1 
      </Route> 

    
      
      <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
    </Route>
    

  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
