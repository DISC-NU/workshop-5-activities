import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailedProduct() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://disc-product-demo-api.onrender.com/api/products/" + productId
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image_url} alt={product.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
