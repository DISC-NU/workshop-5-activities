import "./App.css";
import Products from "./components/Products/Products.jsx";
import DetailedProduct from "./components/DetailedProduct/DetailedProduct.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Hello World</h1>
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<DetailedProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
