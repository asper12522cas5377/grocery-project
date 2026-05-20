import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Shop from "./Shop";
import Fruits from "./Fruits";
import Vegetables from "./Vegtables";
import Pages from "./Pages";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";

function App() {

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" id="nav-1">
            <Link to="/" className="navbar-brand">GroceryBasket<i class="fa-solid fa-cart-shopping"></i></Link>
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>

                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Shop</a>
                    <ul className="dropdown-menu">
                      <li><Link to="/shop" className="dropdown-item">All Products</Link></li>
                      <li><Link to="/fruit" className="dropdown-item">Fruits</Link></li>
                      <li><Link to="/veg" className="dropdown-item">Vegetables</Link></li>
                    </ul>
                  </li>
                </li>

                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <ul className="dropdown-menu">
                      <li><Link to="/about" className="dropdown-item">About</Link></li>
                      <li><Link to="/contact" className="dropdown-item">Contact</Link></li>
                      <li><Link to="/pages" className="dropdown-item">Blogs</Link></li>
                    </ul>
                  </li>
                </li>

                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Account</a>
                    <ul className="dropdown-menu">
                      <li><Link to="/login" className="dropdown-item">Sign Up</Link></li>
                      <li><Link to="/reg" className="dropdown-item">Register</Link></li>
                      <li><Link to="/admin" className="dropdown-item">Admin</Link></li>
                    </ul>
                  </li>
                </li>

                <li>
                  <a href="/login" className="btn btn-danger">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/fruit" element={<Fruits />} />
          <Route path="/veg" element={<Vegetables />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;