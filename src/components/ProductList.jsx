import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products] = useState([
    { productId: 1, productName: "Laptop", price: 1200, imageUrl: "/img/laptop.jpg" },
    { productId: 2, productName: "Smartphone", price: 800, imageUrl: "/img/smartphone.jpg" },
    { productId: 3, productName: "Tablet", price: 500, imageUrl: "/img/tablet.jpg" },
    { productId: 4, productName: "Headphones", price: 150, imageUrl: "/img/headphones.jpg" },
    { productId: 5, productName: "Smartwatch", price: 300, imageUrl: "/img/smartwatch.jpg" },
    { productId: 6, productName: "Monitor", price: 250, imageUrl: "/img/monitor.jpg" },
    { productId: 7, productName: "Keyboard", price: 100, imageUrl: "/img/keyboard.jpg" },
    { productId: 8, productName: "Mouse", price: 50, imageUrl: "/img/mouse.jpg" },
    { productId: 9, productName: "Printer", price: 200, imageUrl: "/img/printer.jpg" },
    { productId: 10, productName: "Camera", price: 600, imageUrl: "/img/camera.jpg" },
  ]);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
