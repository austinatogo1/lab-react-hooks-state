import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product, onAddToCart, inCart, darkMode }) {
  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.emoji}>{product.emoji}</div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.category}>{product.category}</div>
      <div className={styles.price}>Ksh {Number(product.price || 0).toFixed(2)}</div>

      {inCart ? (
        <div className={`${styles.inCart} ${darkMode ? styles.inCartDark : ""}`}>
          {/* CRITICAL TEST CRITERIA: Must match exact string without special symbol prefixes */}
          {product.name} is in your cart.
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