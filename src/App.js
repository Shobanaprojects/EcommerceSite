import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assets/Custom.css';
import './assets/Responsive.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
export default App;