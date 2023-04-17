import React from "react";
import { SearchOutlined } from "@ant-design/icons";
export default function Header() {
  return (
    <div className="flex justify-between items-center bg-green-800 h-[70px] text-white font-Noto shadow-xl">
      <div className="text-3xl font-semibold text-gray-200">
        <p>ທີມງານສ້ອມແປງເຄື່ອງຈັກ</p>
      </div>
      <div className="w-[600px] items-center flex text-center  bg-white rounded-lg p-2">
        <SearchOutlined style={{ fontSize: '16px', color: '#08c' ,marginLeft: '10px' ,cursor:'pointer'}}/>
        <input placeholder="ຄົ້ນຫາ" className="w-full text-center rounded-lg outline-none text-gray-800"/>
      </div>
      <div className="flex justify-between items-center text-center">
        <div className="p-5">ທ້າວ ເກດອຸດອນ </div>
        
      </div>
    </div>
  );
}
