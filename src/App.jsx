import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css'; 

const initialProducts = [
  { id: 1, name: "Milk", category: "Dairy", price: 150, emoji: "🥛" },
  { id: 2, name: "Bread", category: "Bakery", price: 80, emoji: "🍞" },
  { id: 3, name: "Apple", category: "Fruits", price: 40, emoji: "🍎" },
  { id: 4, name: 'Cheddar Cheese', category: 'Dairy', price: 450, emoji: '🧀' },
  { id: 5, name: 'Bananas', category: 'Fruits', price: 20, emoji: '🍌' },
  { id: 6, name: 'Spinach', category: 'Vegetables', price: 25, emoji: '🥬' },
  { id: 7, name: 'Carrots', price: 15, category: 'Vegetables', emoji: '🥕' },
  { id: 8, name: 'Chicken Breast', price: 800, category: 'Meat', emoji: '🍗' },
  { id: 9, name: 'Sourdough Bread', price: 600, category: 'Bakery', emoji: '🍞' },
  { id: 10, name: 'Yogurt', price: 300, category: 'Dairy', emoji: '🥛' },
  { id: 11, name: 'Oranges', price: 15, category: 'Fruits', emoji: '🍊' },
  { id: 12, name: 'Broccoli', price: 140, category: 'Vegetables', emoji: '🥦' },
  { id: 13, name: 'Ground Beef', price: 400, category: 'Meat', emoji: '🥩' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const filteredProducts = selectedCategory === "All"
    ? initialProducts
    : initialProducts.filter(product => product.category === selectedCategory);

  return (
    /* Changed from "app dark-mode" to "app dark" to match your CSS perfectly */
    <div className={`app ${darkMode ? "dark" : ""}`}>
      
      {/* Added your class ".app-header" */}
      <header className="app-header">
        {/* Linked your catchy new app name with your ".brand" layout */}
        <div className="brand">
          <span>🛒</span> SokoSwift
        </div>
        
        {/* Added the right-side wrapper and dynamic cart badge item counter */}
        <div className="header-right">
          <div className="cart-badge">Cart: {cart.length} items</div>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>

      {/* Added your class ".app-main" to properly center and bound the content layout */}
      <main className="app-main">
        
        {/* Wrapped filter inside your ".filter-row" class */}
        <div className="filter-row">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </div>

        {/* Section header for clean styling structure */}
        <div className="section-heading">
          <h2>Our Products</h2>
          <span className="count">{filteredProducts.length} items found</span>
        </div>

        <ProductList 
          products={filteredProducts} 
          onAddToCart={handleAddToCart} 
          cart={cart} 
          darkMode={darkMode} 
        />
      </main>
    </div>
  );
}

export default App;