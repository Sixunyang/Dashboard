import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        /*         marginBottom: "10px", */
      }}
    >
      <OutlinedInput
        id="outlined-adornment-weight"
        placeholder="Search"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon color="success" />
            </IconButton>
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
        }}
      />
      <div>
        <IconButton>
          <NotificationsNoneIcon color="success" />
        </IconButton>
        <IconButton>
          <SettingsIcon color="success" />
        </IconButton>
        <IconButton>
          <PermIdentityIcon color="success" />
        </IconButton>
      </div>
    </div>
  );
}
