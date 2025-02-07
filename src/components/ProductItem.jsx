import React from "react";

const ProductItem = ({ productId, productName, price, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <p>Precio: ${price}</p>
      <p>ID: {productId}</p>
    </div>
  );
};

export default ProductItem;
