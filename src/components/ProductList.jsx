import ProductCard from "./ProductCard";

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: 'Ksh30.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: 'Ksh250', category: 'Dairy', inStock: false },
  { id: 3, name: 'Cheddar Cheese', price: 'Ksh450', category: 'Dairy', inStock: true },
  { id: 4, name: 'Bananas', price: 'Ksh20', category: 'Fruits', inStock: true },
  { id: 5, name: 'Spinach', price: 'Ksh25', category: 'Vegetables', inStock: true },
  { id: 6, name: 'Carrots', price: 'Ksh15', category: 'Vegetables', inStock: true },
  { id: 7, name: 'Chicken Breast', price: 'Ksh800', category: 'Meat', inStock: false },
  { id: 8, name: 'Sourdough Bread', price: 'Ksh600', category: 'Bakery', inStock: true },
  { id: 9, name: 'Yogurt', price: 'Ksh300', category: 'Dairy', inStock: true },
  { id: 10, name: 'Oranges', price: 'Ksh15', category: 'Fruits', inStock: true },
  { id: 11, name: 'Broccoli', price: 'Ksh140', category: 'Vegetables', inStock: true },
  { id: 12, name: 'Ground Beef', price: 'Ksh400', category: 'Meat', inStock: true },
];

const ProductList = ({ category, cartItems, onAddToCart, darkMode }) => {
  // Filter products by selected category; show all when "All" is selected
  const filteredProducts =
    !category || category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            inCart={cartItems ? cartItems.some((item) => item.id === product.id) : false}
            darkMode={darkMode}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;