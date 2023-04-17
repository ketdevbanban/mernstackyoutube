import React from "react";
import {
  FileOutlined,
  UserOutlined,
  TeamOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("ຈັດການຜູ້ໃຊ້", "sub1", <UserOutlined />, [
    getItem("ຜູ້ໃຊ້ທັງໝົດ", "3"),
    getItem("ເພີ່ມຜູ້ໃຊ້ງານ", "4"),
  ]),
  getItem("ລູກຄ້າ", "sub2", <TeamOutlined />, [
    getItem("ລູກຄ້າທັງໝົດ", "5"),
    getItem("ເພີ່ມລູກຄ້າ", "6"),
  ]),
  getItem("ເຄື່ອງຈັກ", "sub3", <ApiOutlined />, [
    getItem("ເຄື່ອງຈັກທັງໝົດ", "7"),
    getItem("ເພີ່ມເຄື່ອງຈັກ", "8"),
    getItem("ອາໄລ່ທັງໝົດ", "9"),
    getItem("ເພີ່ມອາໄລ", "10"),
  ]),
  getItem("ບົດລາຍງານ", "sub4", <ApiOutlined />, [
    getItem("ລູກຄ້າ", "11"),
    getItem("ເຄື່ອງຈັກ", "12"),
    getItem("ອາໄລ່", "13"),
    getItem("ການສ້ອມແປງ", "14"),
  ]),
  getItem("ສິດການໃຊ້ງານ", "15", <FileOutlined />),
];
export default function AdminSideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={["sub1"]}
        mode="inline"
        items={items}
        className="font-Noto "
      />
    </Sider>
  );
}
