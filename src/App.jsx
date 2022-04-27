import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/e-commerce" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
