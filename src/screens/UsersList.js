import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { deleteUser, getAllUsers } from "../actions/userActions";
import Breadcrumbs from "../Components/Designs/Breadcrumbs";
const UsersList = () => {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Users List" />
      <div class="px-4 base:px-6 lg:px-8">
        <div class="base:flex base:items-center">
          <div class="base:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
              Users
            </h1>
            <p class="mt-2 text-base text-gray-700">
              A list of all the users in your account including their userId, name,
              email are updated here
            </p>
          </div>
        </div>
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto base:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle base:px-6 lg:px-8 rounded">
              <table class="min-w-full divide-y">
                <thead className="bg-red-200">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-lg front-bold text-violet-800 base:pl-0"
                    >
                      User ID
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-blue-500"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-purple-700"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-center text-lg font-bold text-rose-800"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-red-500">
                  {users &&
                    users.map((user) => {
                      return (
                        <tr>
                          <td class="whitespace-nowrap py-4 pl-4 text-base font-medium  text-gray-900 base:pl-0">
                            {user._id}
                          </td>
                          <td class="whitespace-nowrap py-4 text-base text-center text-white">
                            {user.name}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-base text-center text-gray-900">
                            {user.email}
                          </td>
                          <td>
                            <FaTrashAlt
                              className="h-4 w-4 mx-7 xl:mr-12 text-white hover:text-gray-900 duration-300"
                              onClick={() => {
                                dispatch(deleteUser(user._id));
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
