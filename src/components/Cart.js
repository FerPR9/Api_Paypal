import React from 'react';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'; // Iconos
import PaymentForm from './PaymentForm'; // Importa el componente de formulario de pago

function Cart({ cart, onRemoveFromCart, onCheckout, onIncreaseQuantity, onDecreaseQuantity }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>
        <FaShoppingCart /> Shopping Cart
      </h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.name} - ${item.product.price} (Qty: {item.quantity})
            <button onClick={() => onIncreaseQuantity(item)}>
              <FaPlus />
            </button>
            <button onClick={() => onDecreaseQuantity(item)}>
              <FaMinus />
            </button>
            <button onClick={() => onRemoveFromCart(item)}>
              <FaTrash /> Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      {cart.length > 0 && (
        <>
          <PaymentForm onPaymentSubmit={onCheckout} /> {/* Renderiza el formulario de pago */}
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
