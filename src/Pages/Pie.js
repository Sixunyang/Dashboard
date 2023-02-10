import React from "react";

import PieChart from "../Components/PieChart";

const Pie = () => (
  <div style={{ height: "70vh" }}>
    <h2 style={{ margin: "20px 0 10px 0" }}>Pie Chart</h2>
    <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
      Simple Pie Chart
    </p>
    <PieChart />
  </div>
);
export default Pie;
