import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Show from "./Pages/Show";
import View from "./Pages/View";
import Update from "./Pages/Update";
import DeletePost from "./Pages/DeletePost";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/show" element={<Show />} />
        <Route path="/user/:id" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/remove/:id" element={<DeletePost />} />
      </Routes>
    </div>
  );
};

export default App;
