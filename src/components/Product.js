import React from 'react';
import { FaCartPlus } from 'react-icons/fa'; // Icono de carrito

function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaCartPlus /> Add to Cart
      </button>
    </div>
  );
}

export default Product;
