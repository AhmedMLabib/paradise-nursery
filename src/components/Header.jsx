import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        paddingLeft: "50px",
        paddingRight: "50px",
        background: "#09ca09",
        margin: "0",
        width: "1120px",
      }}
    >
      <h2>Paradise Nursery</h2>
      <nav
        style={{
          marginTop: "15px",
          color: "white",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
