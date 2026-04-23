import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  // menyiapkan data pencarian
  // useSearchParams memiliki 2 return data, yaitu object (searchParams) dan function (setSearchParams)
  // namun kita bisa ambil salah satu saja seperti kode dibawah
  const [searchParams] = useSearchParams(); // untuk menyimpan data pencarian product
  const navigate = useNavigate(); // untuk melakukan navigasi halaman

  // digunakan untuk mengubah data pencarian
  // mengambil data query parameter 'search' dari searchParams(useSearchParams) dan di simpan ke dalam data state 'search'
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // membuat event handler untuk menangani pencarian data product
  function handleSearch() {
    // mengecek apakah keywoard pencarian ada isinya
    if (search) {
      // kalau ada, navigate ke halaman data product/search
      // kita bisa menambahkan data API (untuk pengembangan kedepannya)
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`, // dengan mengirimkan query parameter yang sudah dimasukkan sebelumnya
      });
    }
  }

  return (
    <>
      <h1>Search Product</h1>

      {/* implementasi pencarian dilakukan dengan mengambil value dari input saat ini */}
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* melakukan aksi nya dengan button, untuk mencari product dan redirect ke halaman pencarian (halaman lain) */}
      <button onClick={handleSearch}>Search</button>

      <p>
        {/* menampilkan keywoard search, dari search params */}
        Kamu mencari: {searchParams.get("search")}
      </p>
    </>
  );
}
