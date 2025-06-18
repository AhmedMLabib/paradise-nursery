import { Link } from "react-router-dom";
import bgImage from "../assets/bg.avif"; // Make sure you have an image

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1220px",
        height: "70vh",
        color: "#000",
        textAlign: "center",
        paddingTop: "20%",
      }}
    >
      <h1>Welcome to Paradise Nursery </h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
