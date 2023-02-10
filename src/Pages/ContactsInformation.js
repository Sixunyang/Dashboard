import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../Data/mockData";
const columns = [
  { field: "id", headerName: "Register ID", width: 90 },

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
    field: "address",
    headerName: "Address",

    width: 300,
    /* editable: true, */
  },
  {
    field: "city",
    headerName: "City",

    width: 100,
    /* editable: true, */
  },
  {
    field: "zipCode",
    headerName: "Zip Code",

    width: 100,
    /* editable: true, */
  },
];
const rows = mockDataContacts;

export default function ContactsInformation() {
  return (
    <div>
      <h2 style={{ margin: "20px 0 10px 0" }}>CONTACTS</h2>
      <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
        List of Contacts for Future Reference
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
