import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isNonMobile = true;

  return (
    <Box display="flex" width="100vw" height="100vh" overflow="hidden">
      <Sidebar
        drawerWidth="260px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
      />

      {/* Right content (Navbar + main content) */}
      <Box flexGrow={1} display="flex" flexDirection="column" height="100vh">
        {/* Fixed Navbar */}
        <Box position="sticky" top={0} zIndex={1000} bgcolor="background.paper">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        </Box>

        {/* Scrollable Outlet content */}
        <Box
          flexGrow={1}
          overflow="auto"
          p="1.5rem"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
