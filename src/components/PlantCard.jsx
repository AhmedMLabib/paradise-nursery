import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function PlantCard({ plant }) {
  const { addToCart, cartItems } = useContext(CartContext);
  const alreadyInCart = cartItems.some((item) => item.id === plant.id);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={new URL(`../assets/${plant.image}`, import.meta.url).href}
        alt={plant.name}
        width="150"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)} disabled={alreadyInCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default PlantCard;
