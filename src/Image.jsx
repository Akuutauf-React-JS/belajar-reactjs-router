import { useParams } from "react-router";

export default function Image() {
  // mengambil nilai parameter star segment
  let params = useParams();

  return (
    <>
      <h1>Image</h1>

      {/* mengambil value dari parameter milik star segment path */}
      <p>Image page : {params["*"]}</p>
    </>
  );
}
