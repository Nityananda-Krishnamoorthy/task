// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";

function App() {
  const [mode, setMode] = useState("light");

  // Allow switching between light/dark themes
  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout setMode={setMode} mode={mode} />}>
              <Route index element={<Dashboard />} />
              {/* Add more nested routes here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
