const ProductList = () => {
  const products = [
    { id: 1, name: "Kenyan AA Coffee (250g)", price: 850, inStock: true },
    { id: 2, name: "Macadamia Nuts (500g)", price: 1200, inStock: true },
    { id: 3, name: "Organic Honey (1kg)", price: 1500, inStock: false },
    { id: 4, name: "Dried Mango Slices (200g)", price: 450, inStock: true },
    { id: 5, name: "Coconut Oil (500ml)", price: 600, inStock: true },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h2>Our Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              opacity: product.inStock ? 1 : 0.5,
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{product.name}</h3>
            <p
              style={{ fontSize: "20px", fontWeight: "bold", color: "#2d6a4f" }}
            >
              KES {product.price.toLocaleString()}
            </p>
            <p
              style={{
                color: product.inStock ? "green" : "red",
                margin: "8px 0",
              }}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <button
              disabled={!product.inStock}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: product.inStock ? "#2d6a4f" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: product.inStock ? "pointer" : "not-allowed",
              }}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;