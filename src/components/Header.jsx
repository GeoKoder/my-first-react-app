const Header = ({ title, subtitle }) => {
  return (
    <header
      style={{
        backgroundColor: "#1a1a2e",
        color: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>{title}</h1>
      {subtitle && <p style={{ margin: "4px 0 0 0", opacity: 0.8 }}>{subtitle}</p>}
    </header>
  );
};

export default Header;
