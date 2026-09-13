// src/App.jsx
const App = () => {
  const name = "Robert Kamau";
  const currentDate = new Date().toLocaleDateString("en-KE", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  // Determine greeting based on current hour
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const stats = [
    { label: "Projects Completed", value: 5 },
    { label: "Commits This Week", value: 45 },
    { label: "Cups of Chai", value: 15 },
    { label: "Hours Slept", value: 20},
  ];

  const goals = [
    "Master React components and props",
    "Build and deploy a movie search app",
    "Learn state management with hooks",
    "Contribute to an open source project",
  ];

  const projects = [
    "Weather App",
    "Inventory Dashboard",
    "Color Palette Generator",
  ];

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1>{greeting}, {name}</h1>
      <p>Here is your developer dashboard for today.</p>

      <h2>Quick Stats</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              backgroundColor: "#b5d1ec",
              padding: "20px",
              borderRadius: "8px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#59deff",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>
              {stat.value}
            </p>
            <p style={{ color: "#0e0d0d", margin: "8px 0 0 0" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <h2>Learning Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {goal}
          </li>
        ))}
      </ul>

      <h2>Recent Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: "8px"}}>{project}</li>
        ))}
      </ul>

      <p>Today is {currentDate}.</p>
    </div>
  );
};

export default App;