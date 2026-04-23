import { useNavigate } from "react-router";

export default function Home() {
  // memanggil hooks useNavigate
  const navigate = useNavigate();

  // membuat event handler untuk button
  function handleClick() {
    // ketika button diklik, maka akan berpindah ke halamandata

    // navigate cocok digunakan untuk melakukan redirect dengan event handler
    navigate({
      pathname: "/data",
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      {/* implementasi use navigate */}
      <button onClick={handleClick}>Go to Data Page</button>
    </div>
  );
}
