import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Challenges from "./pages/Challenges";
import NotFoundPage from "./pages/404";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* <div>Headeer</div> */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/challenges" element={<Challenges />} />

        {/* handle not found pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
