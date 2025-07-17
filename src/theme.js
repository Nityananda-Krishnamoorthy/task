// src/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F97316", // Orange
    },
    secondary: {
      main: "#4B5563", // Gray text
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  },
  shape: {
    borderRadius: 8,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F97316",
    },
    secondary: {
      main: "#9CA3AF", // light gray
    },
    background: {
      default: "#111827", // body background
      paper: "#1F2937",   // sidebar/panel
    },
    text: {
      primary: "#F9FAFB",
      secondary: "#9CA3AF",
    },
    divider: "#374151",
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  },
  shape: {
    borderRadius: 8,
  },
});
