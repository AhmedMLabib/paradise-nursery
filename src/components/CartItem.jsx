import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        margin: "10px 0",
        padding: "10px",
      }}
    >
      <img
        src={new URL(`../assets/${item.image}`, import.meta.url).href}
        alt={item.name}
        width="100"
      />
      <h4>{item.name}</h4>
      <p>Unit Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.quantity * item.price}</p>
      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
      <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  );
}

export default CartItem;
