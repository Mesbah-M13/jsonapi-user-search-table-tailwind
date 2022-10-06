import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUserData = async () => {
    const { data } = await axios.get(baseURL);
    setUsers(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <form>
        <div className="relative m-3 mx-auto max-w-md shadow rounded border-0 p-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5  dark:text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm  bg-gray-50 rounded-lg border border-gray-200 bg-gradient-to-r from-teal-100 to-blue-400 dark:border-blue-200 dark:placeholder-neutral-600 dark:text-teal"
            placeholder="Search here for name or email....."
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>

      <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white  divide-gray-300 overflow-hidden">
        <thead className="bg-gradient-to-r from-indigo-200 to-blue-300">
          <tr className="text-black text-left">
            <th
              scope="col"
              className="font-semibold text-sm uppercase px-6 py-4 "
            >
              Id
            </th>
            <th
              scope="col"
              className="font-semibold text-sm uppercase px-6 py-4 "
            >
              Name
            </th>
            <th
              scope="col"
              className="font-semibold text-sm uppercase px-6 py-4 "
            >
              Email
            </th>
            <th
              scope="col"
              className="font-semibold text-sm uppercase px-6 py-4 "
            >
              Company Name
            </th>
            <th
              scope="col"
              className="font-semibold text-sm uppercase px-6 py-4"
            >
              Zipcode
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {users
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => {
              return (
                <tr>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-3">
                      <div>{user.id}</div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-3">
                      <div>{user.name}</div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-3">
                      <div>{user.email}</div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-3">
                      <div>{user.company.name}</div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-3">
                      <div>{user.address.zipcode}</div>
                    </div>
                  </td>
                  {/* <td className="border text-center py-2">{user.name}</td>
                  <td className="border text-center py-2">{user.email}</td>
                  <td className="border text-center py-2">
                    {user.company.name}
                  </td>
                  <td className="border text-center py-2">
                    {user.address.zipcode}
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
