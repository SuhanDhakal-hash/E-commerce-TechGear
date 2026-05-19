import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Product";
import Services from "./pages/Services";
import Features from "./pages/Features";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;