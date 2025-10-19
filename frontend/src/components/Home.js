import React from "react";
import ItemList from "./ItemList";

function Home() {
  return (
    <div className="home">
      <h1>🧭 Welcome to Lost & Found</h1>
      <p>
        Help people find what they lost or report what you’ve found.
        A small effort can make someone’s day ✨
      </p>

      {/* ❌ REMOVE search bar here if it exists */}
      {/* ✅ Keep only the ItemList component */}
      <ItemList />
    </div>
  );
}

export default Home;
