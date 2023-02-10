import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../Data/mockData";
import { PanoramaSharp } from "@mui/icons-material";
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
    field: "cost",
    headerName: "Cost",

    width: 120,
    renderCell: (params) => (
      <p style={{ color: "rgb(215 133 6)" }}>${params.row.cost}</p>
    ),

    /* editable: true, */
  },

  {
    field: "date",
    headerName: "Date",

    width: 90,
    /* editable: true, */
  },
];
const rows = mockDataInvoices;

export default function InvoicesBalances() {
  return (
    <div>
      <h2 style={{ margin: "20px 0 10px 0" }}>INVOICES</h2>
      <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
        List of Invoice Balances
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
