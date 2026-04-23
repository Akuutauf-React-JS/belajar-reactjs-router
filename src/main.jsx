// import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// import component
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Seller from "./Seller.jsx";
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Image from "./Image.jsx";
import NotFound from "./NotFound.jsx";
import ProductSearch from "./ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* implementasi browser router */}
    <BrowserRouter>
      {/* implementasi routes */}
      {/* digunakan untuk mendaftarkan routes */}
      <Routes>
        {/* implementasi Route */}
        {/* digunakan untuk memetakan komponen ke route tertentu  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* implementasi Route path (nested route) */}
        {/* jika index route path menggunakan element, maka komponen dibawah (child) dianggap sebagai Outlet */}
        <Route path="/data" element={<DataLayout />}>
          {/* index route, biasanya digunakan diawalan path, contoh: '/', atau '/data/...' */}
          <Route index element={<Data />}></Route>

          {/* route di dalam route, akan menghasilkan route path itu sendiri */}
          {/* simbol slash '/' digunakan dipaling awal */}
          <Route path="products" element={<Product />} />

          {/* implementasi param di route */}
          {/* parameter yang dikirimkan bisa lebih dari satu */}
          <Route path="products/:id" element={<ProductDetail />} />

          {/* implementasi use search params */}
          <Route path="products/search" element={<ProductSearch />} />

          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Seller />} />
        </Route>

        {/* implementasi star segment */}
        {/* biasanya digunakan untuk path files */}
        <Route path="/images/*" element={<Image />} />

        {/* star segment juga bisa digunakan untuk menangani not found page */}
        {/* sehingga star segment untuk hal ini bisa diletakkan dibawah dari semua routes */}
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
