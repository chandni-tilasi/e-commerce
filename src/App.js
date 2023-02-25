import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import ItemState from "./state/ItemState";
import SignUp from "./Components/signInUp/SignUp";
import SignIn from "./Components/signInUp/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.isLoggedIn);
 
  return (
    <div>
      <ItemState>
        <Router>
          <Header />
          <Routes>
            {user && <Route path="/" element={<Home />} />}
            <Route path="/card" element={<Card />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ItemState>
      <ToastContainer />
    </div>
  );
}

export default App;
