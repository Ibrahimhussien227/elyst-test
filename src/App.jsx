import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<News />} />
      </Routes>
    </>
  );
};

export default App;
