import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../../components/layout/adminlayout";

export default function Alluser() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUserdata(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div className=" mx-auto h-screen font-noto">
        <table className="w-full whitespace-nowrap shadow-xl">
          <thead>
            <tr className="bg-pink-200 h-16 w-full text-sm leading-none text-gray-800 ">
              <th>ລຳດັບ</th>
              <th>ຊື່</th>
              <th>Username</th>
              <th>role</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="w-full">
            {userdata.map((u, index) => (
              <tr
                key={u._id}
                className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100 text-center"
              >
                <td>{index + 1}</td>
                <td>{u?.name}</td>
                <td>{u.username}</td>
                <td>{u.role}</td>
                <td>{u.enabled ? "ນຳໃຊ້" : "ຖືກປິດການນຳໃຊ້"}</td>
                <td>
                  <div className="flex justify-center">
                    <button className=" bg-yellow-300 p-2 rounded-lg text-center">Edit</button> ||
                    <button className=" bg-red-300 p-2 rounded-lg text-center ">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
