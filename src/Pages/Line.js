import React from "react";

import LineChart from "../Components/LineChart";

const Line = () => (
  <div style={{ height: "70vh" }}>
    <h2 style={{ margin: "20px 0 10px 0" }}>Line Chart</h2>
    <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
      Simple Line Chart
    </p>
    <LineChart />
  </div>
);
export default Line;
