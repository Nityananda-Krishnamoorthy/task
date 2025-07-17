import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx"; // Make sure this default-exports Dashboard

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            {/* You can add more nested routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
