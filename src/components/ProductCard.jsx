import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onAddToCart, inCart, darkMode }) {
  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.emoji}>{product.emoji}</div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.category}>{product.category}</div>
      
      {/* Fixed Line: Removed <Ksh></Ksh> tags and left it as plain text */}
      <div className={styles.price}>Ksh {Number(product.price || 0).toFixed(2)}</div>
      {inCart ? (
        <div className={`${styles.inCart} ${darkMode ? styles.inCartDark : ""}`}>
          ✓ {product.name} is in your cart.
        </div>
      ) : (
        <button
          className={`${styles.addBtn} ${darkMode ? styles.addBtnDark : ""}`}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;