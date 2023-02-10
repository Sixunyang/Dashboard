import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function StateBox({
  iconType,
  emailValue,
  typeInfo,
  trendingIcon,
  trendingNumber,
}) {
  return (
    <Box
      width="30%"
      height="12vh"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          mr: 3,
        },
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          alignItems: "center",

          width: "100%",
        }}
      >
        <div>
          {/*  <EmailIcon fontSize="small" color="success" /> */}
          {iconType}
          {/* <h3>12,361</h3> */}
          <h3>{emailValue}</h3>
          {/* <p style={{ color: "green" }}>Email Sent</p> */}
          <p style={{ color: "green" }}>{typeInfo}</p>
        </div>
        <div>
          {/* <TrendingUpIcon color="success" /> */}

          {trendingIcon}

          {/* <p>+14%</p> */}
          <p>{trendingNumber}</p>
        </div>
      </Paper>
    </Box>
  );
}
