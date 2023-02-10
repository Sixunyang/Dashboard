import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function ProfileForm() {
  const [firstName, setfirstName] = useState(false);
  const [lastName, setlastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  return (
    <div>
      <h2 style={{ margin: "20px 0 10px 0" }}>CREATE USER</h2>
      <p style={{ margin: "0 0 30px 0", color: "rgb(215 133 6)" }}>
        Create a New User Profile
      </p>
      <Box
        component="form"
        sx={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ m: 1, width: "48%" }}>
            <TextField
              id="filled-basic"
              label="First Name"
              variant="filled"
              required
              name="firstName"
              error={firstName}
              helperText={firstName ? "Invalid name!" : null}
              onChange={(e) => {
                const regex = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{1,15}$/);
                if (regex.test(e.target.value)) {
                  setfirstName(false);
                } else {
                  setfirstName(true);
                }
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "48%" }}>
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="filled"
              required
              name="lastName"
              error={lastName}
              helperText={lastName ? "Invalid last name!" : null}
              onChange={(e) => {
                const regex = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{1,15}$/);
                if (regex.test(e.target.value)) {
                  setlastName(false);
                } else {
                  setlastName(true);
                }
              }}
            />
          </FormControl>
        </div>

        <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            required
            name="email"
            error={email}
            helperText={email ? "Invalid email!" : null}
            onChange={(e) => {
              const regex = new RegExp(
                /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
              );
              if (regex.test(e.target.value)) {
                setEmail(false);
              } else {
                setEmail(true);
              }
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
          <TextField
            id="filled-basic"
            label="Contact Number"
            variant="filled"
            required
            name="phone"
            error={phone}
            helperText={phone ? "Invalid phone number!" : null}
            onChange={(e) => {
              const regex = new RegExp(/^\d{5,}$/);
              if (regex.test(e.target.value)) {
                setPhone(false);
              } else {
                setPhone(true);
              }
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
          <TextField id="filled-basic" label="Address 1" variant="filled" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
          <TextField id="filled-basic" label="Address 2" variant="filled" />
        </FormControl>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",

            margin: "10px",
          }}
        >
          <FormControl sx={{ width: "180px" }}>
            <Button type="submit" variant="contained" color="success">
              Create New User
            </Button>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}
