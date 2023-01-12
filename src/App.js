import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ChatsPage } from "./Pages";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<ChatsPage />} />
    </Routes>
  );
};

export default App;
