import React, { useState } from "react";
import "./style.css";

function GroceryStoreItemForm() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { itemName, price, quantity };
    setItems([...items, newItem]);
    setItemName("");
    setPrice("");
    setQuantity("");
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Grocery Item</h3>
        <div>
          <label>Item Name</label>
          <input
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          ></input>
        </div>
        <div>
          <label>Quantity</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>
        </div>
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
      <div>
        <h3>Grocery Store Items</h3>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroceryStoreItemForm;