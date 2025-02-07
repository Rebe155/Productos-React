import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tienda Don Bosco Electrónicos</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
