import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import { FaShoppingCart } from 'react-icons/fa'; 
import PayPalPayment from './components/PayPalPayment';
import './App.css';


function App() {
  const [cart, setCart] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false); 

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Añade más productos aquí
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, id: cart.length + 1, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const increaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handlePaymentSubmit = () => {
    // Aquí puedes realizar la lógica de procesamiento del pago (por ejemplo, con la API de PayPal).
    // Una vez que se complete el pago, puedes mostrar un mensaje de confirmación o realizar otras acciones necesarias.
    // También puedes restablecer el carrito o realizar otras acciones según tus necesidades.
    setCart([]);
    setShowPaymentForm(false); // Oculta el formulario de pago después del pago exitoso.
    
  };

  return (
    <div className="App">
      <h1>
        <FaShoppingCart /> My Shopping Cart
      </h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onCheckout={() => setShowPaymentForm(true)} // Mostrar el formulario de pago al hacer clic en "Pagar"
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        
      />
      {showPaymentForm && <PayPalPayment onPaymentSubmit={handlePaymentSubmit} />}
      
      
    </div>
  );
}

export default App;
