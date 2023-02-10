import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
/* import QuizIcon from "@mui/icons-material/Quiz"; */
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import PublicIcon from "@mui/icons-material/Public";

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sidebar width="18%" height="100vh">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px 20px",
        }}
      >
        {isCollapsed ? null : (
          <h3 style={{ fontWeight: "400", color: "#2e7d32" }}>ADMINS</h3>
        )}

        <main>
          <IconButton
            aria-label="delete"
            onClick={() => {
              collapseSidebar();
              setIsCollapsed(!isCollapsed);
            }}
          >
            <MenuIcon color="success" />
          </IconButton>
        </main>
      </div>

      {isCollapsed ? null : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="../../assets/Picture1.png"
            sx={{ width: 100, height: 100, cursor: "pointer" }}
          />
          <h1>Sixun</h1>
          <p style={{ color: "rgb(215 133 6)" }}>VP Fancy Admin</p>
        </div>
      )}

      <Menu>
        <MenuItem
          icon={<HomeIcon color="success" />}
          component={<Link to="/" />}
        >
          Dashboard
        </MenuItem>
        <div style={{ margin: "7px 20px", color: "#b6b4b4" }}>Data</div>
        <MenuItem
          icon={<GroupIcon color="success" />}
          component={<Link to="/team" />}
        >
          Manage Team
        </MenuItem>
        <MenuItem
          icon={<CallIcon color="success" />}
          component={<Link to="/contact" />}
        >
          Contacts Information
        </MenuItem>
        <MenuItem
          icon={<ReceiptIcon color="success" />}
          component={<Link to="/invoice" />}
        >
          Invoices Balances
        </MenuItem>
        <div style={{ margin: "7px 20px", color: "#b6b4b4" }}>Pages</div>
        <MenuItem
          icon={<PermContactCalendarIcon color="success" />}
          component={<Link to="/profile" />}
        >
          Profile Form
        </MenuItem>
        <MenuItem
          icon={<CalendarMonthIcon color="success" />}
          component={<Link to="/calendar" />}
        >
          Calendar
        </MenuItem>
        {/*  <MenuItem
          icon={<QuizIcon color="success" />}
          component={<Link to="/faq" />}
        >
          FAQ Page
        </MenuItem> */}
        <div style={{ margin: "7px 20px", color: "#b6b4b4" }}>Charts</div>
        <MenuItem
          icon={<BarChartIcon color="success" />}
          component={<Link to="/bar" />}
        >
          Bar Chart
        </MenuItem>
        <MenuItem
          icon={<PieChartIcon color="success" />}
          component={<Link to="/pie" />}
        >
          Pie Chart
        </MenuItem>
        <MenuItem
          icon={<TimelineIcon color="success" />}
          component={<Link to="/line" />}
        >
          Line Chart
        </MenuItem>
        <MenuItem
          icon={<PublicIcon color="success" />}
          component={<Link to="/geography" />}
        >
          Geography Chart
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
