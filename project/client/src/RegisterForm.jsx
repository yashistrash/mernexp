import React, { useState } from "react";
import './index.css';

function RegisterForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplierName, setSupplierName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName,
      quantity,
      price,
      supplierName,
      expiryDate,
    };

    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }

    setProductName("");
    setQuantity(0);
    setPrice(0);
    setSupplierName("");
    setExpiryDate("");
  };

  const handleEdit = (index) => {
    const product = products[index];
    setProductName(product.productName);
    setQuantity(product.quantity);
    setPrice(product.price);
    setSupplierName(product.supplierName);
    setExpiryDate(product.expiryDate);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
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
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </form>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="border p-2 mb-2">
              <div>
                <strong>Product Name:</strong> {product.productName}
              </div>
              <div>
                <strong>Quantity:</strong> {product.quantity}
              </div>
              <div>
                <strong>Price:</strong> {product.price}
              </div>
              <div>
                <strong>Supplier Name:</strong> {product.supplierName}
              </div>
              <div>
                <strong>Expiry Date:</strong> {product.expiryDate}
              </div>
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 p-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 p-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegisterForm;