import React, { useState } from 'react';

function PaymentForm({ onPaymentSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Valor predeterminado: tarjeta de crédito

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para procesar el pago según el método seleccionado (creditCard, debitCard o paypal).
    onPaymentSubmit(paymentMethod); // Pasa el método de pago al componente principal para gestionar el pago.
  };

}

export default PaymentForm;
