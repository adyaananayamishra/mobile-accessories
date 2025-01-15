import React from "react";
import "./Products.css";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product5.png";
import product7 from "../assets/product5.png";
import product8 from "../assets/product5.png";
import product9 from "../assets/product5.png";

const products = [
  { id: 1, name: "Product 1", price: "$99.99", image: product1 },
  { id: 2, name: "Product 2", price: "$89.99", image: product2 },
  { id: 3, name: "Product 3", price: "$79.99", image: product3 },
  { id: 4, name: "Product 4", price: "$69.99", image: product4 },
  { id: 5, name: "Product 5", price: "$59.99", image: product5 },
  { id: 6, name: "Product 6", price: "$59.99", image: product6 },
  { id: 7, name: "Product 7", price: "$59.99", image: product7 },
  { id: 8, name: "Product 8", price: "$59.99", image: product8 },
  { id: 9, name: "Product 9", price: "$59.99", image: product9 },
];

const Products = () => {
  return (
    <div className="products-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="details-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
