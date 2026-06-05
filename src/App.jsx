import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";

// Derive categories from the single source of truth in ProductList
const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="app-header">
        <div className="brand">
          <span>🛒</span>
          <span>FreshMart</span>
        </div>
        <div className="header-right">
          <span className="cart-badge">
            🛒 {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </span>
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
        </div>
      </header>

      <main className="app-main">
        <div className="filter-row">
          <label htmlFor="category-select">Filter by:</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <ProductList
          category={category}
          cartItems={cartItems}
          onAddToCart={addToCart}
          darkMode={darkMode}
        />

        <Cart cartItems={cartItems} darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;