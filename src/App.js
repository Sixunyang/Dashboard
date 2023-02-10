import React from "react";
import "./App.css";
import SideBar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ManageTeam from "./Pages/ManageTeam";
import ContactsInformation from "./Pages/ContactsInformation";
import InvoicesBalances from "./Pages/InvoicesBalances";
import ProfileForm from "./Pages/ProfileForm";
import Calendar from "./Pages/Calendar";
/* import FAQ from "./Pages/FAQ"; */
import Bar from "./Pages/Bar";
import Pie from "./Pages/Pie";
import Line from "./Pages/Line";
import Geography from "./Pages/Geography";
import Topbar from "./Components/Topbar";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            padding: "25px 25px",
          }}
        >
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<ManageTeam />} />
            <Route path="/contact" element={<ContactsInformation />} />
            <Route path="/invoice" element={<InvoicesBalances />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/calendar" element={<Calendar />} />
            {/*  <Route path="/faq" element={<FAQ />} /> */}
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
