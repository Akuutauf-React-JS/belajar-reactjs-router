import { useParams } from "react-router";

export default function ProductDetail() {
  // mengambil data path dan parameter
  let params = useParams();

  // mengambil isi dari parameter id
  // biasanya value yang diperoleh dari parameter berupa tipe data string
  let idProduct = params.id;

  return (
    <>
      <h1>Product Detail</h1>
      <p>Product detail page : {idProduct}</p>
    </>
  );
}
