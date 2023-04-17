import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";

import AdminSideBar from "./components/sidebar/adminsidebar";
import AdminDashboard from "./pages/admin/admindashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/test" element={<AdminSideBar />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
