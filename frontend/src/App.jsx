import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Admin from './components/Admin'
import UpdateItem from "./components/UpdateItem"
import Addproduct from './components/AddProduct'




const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/update/:productid" element={<UpdateItem />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addproduct" element={<Addproduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
