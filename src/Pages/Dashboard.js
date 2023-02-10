import React from "react";
import StateBox from "../Components/StateBox";
import EmailIcon from "@mui/icons-material/Email";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Paper from "@mui/material/Paper";

import LineChart from "../Components/LineChart";
import Transaction from "../Components/Transaction";
import PieChart from "../Components/PieChart";
import BarChart from "../Components/BarChart";
import GeoChart from "../Components/GeoChart";
export default function Dashboard() {
  return (
    <div style={{ height: "70vh" }}>
      <h3 style={{ margin: "20px 0 10px 0" }}>DASHBOARD</h3>
      <p style={{ margin: "0 0 20px 0", color: "rgb(215 133 6)" }}>
        Welcome to your dashboard
      </p>
      <div
        className="dataPart"
        style={{ display: "flex", flexDirection: "column", gap: "3vh" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <StateBox
            iconType={<EmailIcon fontSize="small" color="success" />}
            emailValue="12,361"
            typeInfo="Email sent"
            trendingIcon={<TrendingUpIcon sx={{ color: "#4fe74f" }} />}
            trendingNumber="+14%"
          />
          <StateBox
            iconType={<MonetizationOnIcon fontSize="small" color="success" />}
            emailValue="431,225"
            typeInfo="Sales"
            trendingIcon={<TrendingUpIcon sx={{ color: "#4fe74f" }} />}
            trendingNumber="+21%"
          />
          <StateBox
            iconType={<PersonAddIcon fontSize="small" color="success" />}
            emailValue="32,441"
            typeInfo="New Clients"
            trendingIcon={<TrendingDownIcon sx={{ color: "#f28686" }} />}
            trendingNumber="-5%"
          />
          <StateBox
            iconType={<PendingActionsIcon fontSize="small" color="success" />}
            emailValue="13"
            typeInfo="Pending Issues"
            trendingIcon={<TrendingUpIcon sx={{ color: "#4fe74f" }} />}
            trendingNumber="+20%"
          />
        </div>
        <div
          className="secondLine"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Paper
            elevation={3}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              alignItems: "center",

              width: "65%",
              marginRight: "20px",
              height: "30vh",
            }}
          >
            <div style={{ width: "100%", height: "28vh" }}>
              <p>Revenue Generated</p>
              <p style={{ color: "green", marginBottom: "-35px" }}>
                $59,342.32
              </p>
              <LineChart />
            </div>
          </Paper>
          <Paper
            elevation={3}
            style={{
              width: "35%",
              marginRight: "20px",
              height: "30vh",
              overflowY: "scroll",
            }}
          >
            <Transaction />
          </Paper>
        </div>
        <div
          className="thirdLine"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "20px",
          }}
        >
          <Paper
            elevation={3}
            style={{
              width: "32%",

              height: "30vh",
            }}
          >
            <p style={{ margin: "10px 0 -20px 20px" }}>Schedule</p>
            <PieChart dashboard={true} />
          </Paper>
          <Paper
            elevation={3}
            style={{
              width: "32%",

              height: "30vh",
            }}
          >
            <p style={{ margin: "10px 0 -20px 20px" }}>Sales Quantity</p>
            <BarChart dashboard={true} />
          </Paper>
          <Paper
            elevation={3}
            style={{
              width: "32%",

              height: "30vh",
            }}
          >
            <p style={{ margin: "10px 0 -20px 20px" }}>
              Geography Based Traffic
            </p>
            <GeoChart dashboard={true} />
          </Paper>
        </div>
      </div>
    </div>
  );
}
