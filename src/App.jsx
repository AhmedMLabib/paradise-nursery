import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import LandingPage from "./pages/LandingPage";

import ProductPage from "./pages/ProductPage";

import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
