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
        <div className="relative ml-6 m-3">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here for name or email....."
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>

      <table className="shadow-lg bg-white">
        <thead>
          <tr >
            <th className="bg-blue-300 w-full border text-left px-16 py-2 rounded-md">
              Id
            </th>
            <th className="bg-blue-300 w-full border text-left px-16 py-2 rounded-md">
              Name
            </th>
            <th className="bg-blue-300 w-full border text-left px-16 py-2 rounded-md">
              Email
            </th>
            <th className="bg-blue-300 w-full border text-left px-16 py-2 rounded-md">
              Company Name
            </th>
            <th className="bg-blue-300 w-full border text-left px-16 py-2 rounded-md">
              Zipcode
            </th>
          </tr>
        </thead>
        <tbody>
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
                  <td className="border text-center py-2">{user.id}</td>
                  <td className="border text-center py-2">{user.name}</td>
                  <td className="border text-center py-2">{user.email}</td>
                  <td className="border text-center py-2">
                    {user.company.name}
                  </td>
                  <td className="border text-center py-2">
                    {user.address.zipcode}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
