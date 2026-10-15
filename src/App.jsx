// src/App.jsx
import Card from "./components/Card";

const App = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 20px",
      }}
    >
      <Card title="Order Summary">
        <p>2x Kenyan Coffee Beans - KES 3,000</p>
        <p>1x Macademia Nuts (500g) - KES 1,200</p>
        <p
          style={{
            fontWeight: "bold",
            borderTop: "1px solid #eee",
            paddingTop: "12px",
          }}
        >
          Total: KES 4,200
        </p>
      </Card>

      <Card title="Delivery Information">
        <p>Estimated delivery: 2-3 business days</p>
        <p>Delivery to: Westlands, Nairobi</p>
      </Card>

      <Card>
        <p style={{ textAlign: "center", color: "#666" }}>
          Need help? Call us at 0700 123 456
        </p>
      </Card>
    </div>
  );
};

export default App;
