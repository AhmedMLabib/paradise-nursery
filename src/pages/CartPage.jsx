import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, totalItems, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <button>Checkout</button>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartPage;
