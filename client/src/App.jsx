import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";

import AdminSideBar from "./components/sidebar/adminsidebar";
import AdminDashboard from "./pages/admin/admindashboard";
import Alluser from "./pages/admin/user/alluser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/test" element={<AdminSideBar />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/alluser" element={<Alluser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
