import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard/Dashboard";

import Group from "./Group/Group";
import Groupcreate from "./Group/Groupcreate";
import GroupEdit from "./Group/Groupedit";

import Menu from "./Menu/Menu";

import Users from "./Users/Users";
import Userscreate from "./Users/Userscreate";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Signin />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/userscreate" element={<Userscreate />} />

          <Route path="/group" element={<Group />} />
          <Route path="/groupadd" element={<Groupcreate />} />
          <Route path="/groupupdate/:id" element={<GroupEdit />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
