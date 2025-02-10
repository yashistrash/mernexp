import React, { useState } from "react";
import './index.css';

function RegisterForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplierName, setSupplierName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      quantity,
      price,
      supplierName,
      expiryDate,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-500 bg-opacity-75 p-4 rounded">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Supplier Name</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <button
            type="submit"
            className="border-blue-500 sm:border-double border-4 border-gray-600 bg-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
