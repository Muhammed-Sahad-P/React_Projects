import { useEffect, useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoding(true);
    setError("");
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        const firstTenQuotes = data.quotes.slice(0, 5);
        setPosts(firstTenQuotes);
        setLoding(false);
      })
      .catch((error) => {
        setError("Error while Fetching Data..");
        console.error("Error fetching quotes:", error);
        setLoding(false);
      });
  }, []);

  return (
    <div className="Fetch">
      <h1 style={{ color: "red" }}>Fetch API Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div className="divfetch" key={post.id}>
          <h4>{post.quote}</h4>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}
export default Fetch;
