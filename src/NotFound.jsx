import { useParams } from "react-router";

export default function NotFound() {
  // mengambil value dari parameter star segment
  let params = useParams();

  return (
    <>
      <h1>Not found : {params["*"]}</h1>
      <p>Page is not found</p>
    </>
  );
}
