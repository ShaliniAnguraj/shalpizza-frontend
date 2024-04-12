import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Admin Panel" />

      <div className="grid-col-1 sm:grid md:grid-cols-2 px-8 mb-24 mt-12 py-18">
        <button>
          <Link
            className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-2xl px-8 py-4 text-center mb-12 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700"
            to="/admin/userslist"
          >
            
            Users List👥
          </Link>
        </button>

        <button>
          <Link
            className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-2xl px-8 py-4 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700"
            to="/admin/pizzaslist"
          >
            
            Pizzas List🍕
          </Link>
        </button>
      </div>

      <div className="grid-col-1 sm:grid md:grid-cols-2 px-8 mb-24">
        <button>
          <Link
            className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-2xl px-8 py-4 text-center mb-12 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700"
            to="/admin/addpizza"
          >
            {" "}
            Add Pizza 🍕
          </Link>
        </button>

        <button>
          <Link
            className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-2xl px-8 py-4 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700"
            to="/admin/orderslist"
          >
            {" "}
            Orders List 📝
          </Link>
        </button>
      </div>
      

      {/*<ul className="adminfunctions">
          <li>
            <Link className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700" to="/admin/userslist"> Users List </Link>
          </li>

          <li>
            <Link className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700" to="/admin/userslist"> Users List </Link>
          </li>

          <li>
            <Link className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700" to="/admin/userslist"> Users List </Link>
          </li>

          <li>
            <Link className="text-white m-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-700" to="/admin/userslist"> Users List </Link>
          </li>

        </ul> */}
    </div>
  );
}

/**import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
import UsersList from './UsersList';
import OrdersList from './OrdersList';
import PizzasList from './PizzasList';
import AddPizza from './AddPizza';
import EditPizza from './EditPizza';

const AdminScreen = () => {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();
  
 {/*   useEffect(() => {
      if (!currentUser.isAdmin) {
        window.location.href = "/";
      }
    }, []); *
      
    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Admin Panel"/>
    
            <ul className="adminfunctions">
                <li>
                    <Link className="moww" to={"/admin/userslist"}>Users List</Link>
                </li>
                <li>
                    <Link className="moww" to={"/admin/pizzaslist"}>Pizzas List</Link>
                </li>
                <li>
                    <Link className="moww" to={"/admin/addpizza"}>Add Pizza</Link>
                </li>
                <li>
                    <Link className="moww" to={"/admin/orderslist"}>Orders List</Link>
                </li>
            </ul>
    
            <Routes>
                <Route path="/admin" component = { UsersList } exact />
                <Route path="/admin/userslist" component = { UsersList } exact />
                <Route path="/admin/orderslist" component = { OrdersList } exact />
                <Route path="/admin/pizzaslist" component = { PizzasList } exact />
                <Route path="/admin/addpizza" component = { AddPizza } exact />
                <Route path="/admin/editpizza/:pizzaid" component = { EditPizza } exact />
                
            </Routes>
    
          
          
        </div>
      )
    }
    
    export default AdminScreen */
