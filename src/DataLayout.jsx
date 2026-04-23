import { Outlet, Link, NavLink, useLocation } from "react-router";

// import data css custom untuk nav link
import "./data.css";

export default function DataLayout() {
  // mengambil informasi menggunakan hook
  const location = useLocation();

  return (
    // implementasi templating dengan layout, menggunakan outlet
    <>
      <div>
        <h1>This is Header</h1>
      </div>

      {/* menambahkan semua menu redirect ke halaman lain */}
      {/* jikalau menggunakan element anchor bawaan html, akan membutuhkan reload ulang untuk masuk ke halaman lain */}
      {/* sehingga akan mengakibatkan website meload ulang seluruh object react */}

      {/* solusinya kita bisa ganti element anchor dengan menggunakan link element bawaan react router */}
      {/* link memiliki attribute, parameter (untuk path route), search (untuk query parameter), dan hash */}

      {/* tambahan fungsional kita bisa gantikan komponent Link, menjadi NavLink agar muddah mengetahui menu yang aktif saat ini */}
      <div>
        <ul>
          <li>
            {/* <a href="/data/products">Product</a> // diganti dengan NavLink */}
            <NavLink to={{ pathname: "/data/products" }}>Product</NavLink>
          </li>
          <li>
            {/* <a href="/data/sellers">Seller</a> // diganti dengan NavLink */}
            <NavLink to={{ pathname: "/data/sellers" }}>Seller</NavLink>
          </li>
          <li>
            {/* <a href="/data/customers">Customer</a> // diganti dengan NavLink */}
            <NavLink to={{ pathname: "/data/customers" }}>Customer</NavLink>
          </li>

          {/* implementasi NavLink dengan query parameter dan hash */}
          <li>
            {/* <a href="/data/customers">Customer</a> // diganti dengan NavLink */}
            <NavLink
              to={{
                pathname: "/data/products",
                search: "?category=shoes",
                hash: "#top",
              }}
            >
              Products - Shooes
            </NavLink>
          </li>

          {/* cara lain */}
          {/* <li>
            <NavLink to="/data/products">Product</NavLink>
          </li>
          <li>
            <NavLink to="/data/products?category=shoes#top">Product</NavLink>
          </li> */}
        </ul>
      </div>

      <div>
        {/* outlet nanti akan digunakan sebagai data custom untuk content setiap halaman */}
        <Outlet />
      </div>

      <div>
        <p>This is Footer</p>

        {/* implementasi use location */}
        {/* untuk mendapatkan informasi dari lokasi halaman saat ini */}
        <p>
          Location : {location.pathname} {location.search} {location.hash}
        </p>
      </div>
    </>
  );
}
