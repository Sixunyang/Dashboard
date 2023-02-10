import React from "react";

import BarChart from "../Components/BarChart";

const Bar = () => (
  <div style={{ height: "70vh" }}>
    <h2 style={{ margin: "20px 0 10px 0" }}>Bar Chart</h2>
    <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
      Simple Bar Chart
    </p>
    <BarChart />
  </div>
);
export default Bar;
