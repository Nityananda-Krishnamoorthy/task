import React from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
  Typography,
  Paper,
} from "@mui/material";
import cart from "../../assets/Cart.png"; // Replace with your actual logo path

const Dashboard = () => {
  return (
    <Box p={{ xs: 2, md: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center" mb={4}>
          <Box
            component="img"
            src={cart}
            alt="Larkon Logo"
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Typography variant="h5" fontWeight="bold">
            Larkon
          </Typography>
        </Box>

        {/* Main Form - First Row */}
        <Grid container spacing={4}>
          {/* Sender Details (Left) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sender Details
            </Typography>

            <Typography fontWeight="bold" gutterBottom>
              Sender Name
            </Typography>
            <TextField fullWidth placeholder="First name" />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Sender Full Address
            </Typography>
            <TextField fullWidth multiline rows={3} placeholder="Enter address" />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Phone Number
            </Typography>
            <TextField fullWidth placeholder="Number" />
          </Grid>

          {/* Invoice Details (Right) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Invoice Details
            </Typography>

            <Typography fontWeight="bold" gutterBottom>
              Invoice Number
            </Typography>
            <TextField fullWidth defaultValue="#INV-0758267/90" />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Issue Date
            </Typography>
            <TextField fullWidth placeholder="dd-mm-yyyy" />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Due Date
            </Typography>
            <TextField fullWidth placeholder="dd-mm-yyyy" />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Amount
            </Typography>
            <TextField
              fullWidth
              placeholder="000"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />

            <Typography fontWeight="bold" mt={3} gutterBottom>
              Status
            </Typography>
            <TextField select fullWidth defaultValue="Paid">
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Cancel">Cancel</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </TextField>
          </Grid>

          {/* Divider Line */}
          <Grid item xs={12}>
            <Box my={4} borderTop="1px solid" borderColor="divider" />
          </Grid>

          {/* Issue From / Issue For - Second Row */}
          <Grid container spacing={4} justifyContent="space-between" px={2}>
            {/* Issue From */}
            <Grid item xs={12} md={5.8}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Issue From
              </Typography>
              <TextField fullWidth placeholder="First name" />
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Enter address"
                sx={{ mt: 2 }}
              />
            </Grid>

            {/* Issue For */}
            <Grid item xs={12} md={5.8}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Issue For
              </Typography>
              <TextField fullWidth placeholder="First name" />
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Enter address"
                sx={{ mt: 2 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
