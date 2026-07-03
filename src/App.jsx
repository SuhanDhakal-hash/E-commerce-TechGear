import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Navbar from "./components/Navbar"; 
import Footer from "./components//Footer";
import Orders from "./pages/Order"; 
import CustomerDashboard from"./pages/CustomerDashboard";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
       <Route path="/orders" element={<Orders />} />
<Route path="/admin" element={<AdminDashboard/>} />
<Route path="/CustomerDashboard" element={<CustomerDashboard/>} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;   