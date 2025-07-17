// src/layout/Layout.jsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isNonMobile = true; // Later you can make this responsive

  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar
        drawerWidth="260px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
      />
      <Box flexGrow={1}>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Box m="1.5rem" overflow="auto">
          <Outlet /> {/* Render current page */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
