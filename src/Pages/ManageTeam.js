import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../Data/mockData";

import "./ManageTeam.css";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => (
      <p style={{ color: "rgb(215 133 6)" }}>{params.row.name}</p>
    ),
    /*  editable: true, */
  },

  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
    /*  editable: true, */
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",
    width: 200,
    /*  editable: true, */
    headerAlign: "left",
    align: "left",
  },
  {
    field: "email",
    headerName: "Email",

    width: 250,
    /* editable: true, */
  },
  {
    field: "access",
    headerName: "Access Level",

    width: 200,
    /*  editable: true, */
  },
];
const rows = mockDataTeam;

export default function ManageTeam() {
  return (
    <div>
      <h2 style={{ margin: "20px 0 10px 0" }}>TEAM</h2>
      <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
        Managing the Team Members
      </p>
      <Box sx={{ height: "73vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
