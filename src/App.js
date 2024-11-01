import "./App.css";

import React from "react";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const dummyProducts = [
    {
      id: 1,
      name: "Boba Milk Tea",
      price: 8.99,
      image_url:
        "https://hpxezonhbbsjcymbdafz.supabase.co/storage/v1/object/public/disc-product-images/product-images/1730133510983-n58q2c.jpeg",
    },
    {
      id: 2,
      name: "Boba Milk Tea",
      price: 8.99,
      image_url:
        "https://hpxezonhbbsjcymbdafz.supabase.co/storage/v1/object/public/disc-product-images/product-images/1730133510983-n58q2c.jpeg",
    },
    {
      id: 3,
      name: "Boba Milk Tea",
      price: 8.99,
      image_url:
        "https://hpxezonhbbsjcymbdafz.supabase.co/storage/v1/object/public/disc-product-images/product-images/1730133510983-n58q2c.jpeg",
    },
    {
      id: 4,
      name: "Boba Milk Tea",
      price: 8.99,
      image_url:
        "https://hpxezonhbbsjcymbdafz.supabase.co/storage/v1/object/public/disc-product-images/product-images/1730133510983-n58q2c.jpeg",
    },
  ];

  return (
    <div>
      <h1>Ume Products</h1>
      <div className="products">
        {dummyProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
