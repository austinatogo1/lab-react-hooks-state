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

function ProductList({ products, onAddToCart, cart, darkMode }) {
  // CRITICAL TEST CRITERIA: Check if list is empty
  if (products.length === 0) {
    return <p className="no-products">No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => {
        // Determine if this item is currently inside the cart array
        const inCart = cart.some(item => item.id === product.id);
        
        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
            inCart={inCart} 
            darkMode={darkMode} 
          />
        );
      })}
    </div>
  );
}

export default ProductList;