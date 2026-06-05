import React from 'react'

function Cart({ cartItems, darkMode }) {
  if (cartItems.length === 0) return null;

  const surface = darkMode ? "#1a1a1a" : "#fff";
  const border = darkMode ? "#333" : "#e0e0e0";
  const rowBg = darkMode ? "#242424" : "#f7f8fa";
  const text = darkMode ? "#f0f0f0" : "#111";
  const accent = darkMode ? "#7ecb8f" : "#2a7d45";

  return (
    <div style={{
      marginTop: "36px",
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: "12px",
      padding: "20px",
      color: text,
    }}>
      <h3 style={{ margin: "0 0 16px", fontWeight: 700, fontSize: "16px" }}>
        🛒 Your Cart ({cartItems.length})
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 14px",
              background: rowBg,
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <span>{item.emoji} {item.name} is in your cart.</span>
            <span style={{ fontWeight: 600, color: accent }}>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "14px",
        paddingTop: "14px",
        borderTop: `1px solid ${border}`,
        display: "flex",
        justifyContent: "space-between",
        fontWeight: 700,
        fontSize: "16px",
      }}>
        <span>Total</span>
        <span style={{ color: accent }}>
          ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default Cart;