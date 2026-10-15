const ProductCard = ({ name, price, currency = "KES", inStock = true }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        opacity: inStock ? 1 : 0.5,
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "#2d6a4f" }}>
        {currency} {price.toLocaleString("en-KE")}
      </p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;