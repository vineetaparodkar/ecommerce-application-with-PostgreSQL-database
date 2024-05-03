import React, { useState, useEffect } from "react";
import "./ProductCatalogue.css";
import Navbar from "../navbar/Navbar";
import axios from "axios"; // Import axios for API requests

const ProductCatalogue = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentOption, setPaymentOption] = useState("");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Mock API endpoint (replace with your actual API endpoint)
  const API_URL = "http://localhost:8080/ecommerce/products";

  useEffect(() => {
    // Fetch products from the API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("test" + data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Run only once when the component mounts

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    // Prepare checkout request payload
    const checkoutItems = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post(
        "http://localhost:8080/ecommerce/checkout",
        {
          type: paymentOption,
          cartItems: checkoutItems,
        }
      );

      // Assuming the response contains a success message upon successful checkout
      setModalMessage("Checkout Successful!");
      setShowModal(true);

      // Empty the cart after successful checkout
      setCartItems([]);
    } catch (error) {
      console.error("Error:", error);
      // Assuming the error response contains an error message
      setModalMessage("Checkout Failed. Please try again later.");
      setShowModal(true);
    }
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="product-catalogue">
        {/* Product list */}
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {/* Cart */}
        <div className="cart-column">
          <div className="cart">
            <h2>Cart</h2>
            <hr />
            <br />
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price per item: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total Price: ${item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total Price: ${calculateTotalPrice()}</h3>
            </div>
            <hr />
            {/* Payment options */}
            <div className="payment-options">
              <h3>Payment Options</h3>
              <hr />
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentOption === "card"}
                  onChange={() => handlePaymentOptionChange("card")}
                />
                Pay with Card
              </label>
              <br />
              <br />
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="crypto"
                  checked={paymentOption === "crypto"}
                  onChange={() => handlePaymentOptionChange("crypto")}
                />
                Pay with Crypto
              </label>
              <br />
              <br />
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentOption === "cash"}
                  onChange={() => handlePaymentOptionChange("cash")}
                />
                Cash on Delivery
              </label>
              <br />
              <br />
            </div>
          </div>
          {/* Checkout button */}
          <div className="checkout-section">
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalogue;
