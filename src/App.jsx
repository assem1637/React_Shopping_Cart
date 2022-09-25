import Navbar from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchingData } from "./Redux/Slices/ProductSlice";
import { ToastContainer } from "react-toastify";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchingData());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
