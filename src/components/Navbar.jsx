import React from "react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsNone,
  SettingsOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  InputBase,
  useTheme,
} from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        px: 3,
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Title & Search */}
        <FlexBetween gap="1.5rem">
          <Box>
            <h2 style={{ color: theme.palette.text.primary, fontWeight: 600 }}>
              INVOICES CREATE
            </h2>
          </Box>


        </FlexBetween>

        {/* Right side actions */}
        <FlexBetween gap="1rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>

          <IconButton>
            <NotificationsNone />
          </IconButton>

          <IconButton>
            <SettingsOutlined />
          </IconButton>

          <IconButton>
            <Avatar
              alt="User"
              src="/assets/profile.jpg"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
         
            <InputBase placeholder="Search..." fullWidth />
            <IconButton>
              <Search />
            </IconButton>
        
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
