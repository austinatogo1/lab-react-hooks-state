import React from 'react';

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Dairy", "Bakery", "Fruits", "Vegetables", "Meat"];

  return (
    <>
      <label htmlFor="category-select">Filter by Category:</label>
      <select 
        id="category-select"
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default CategoryFilter;