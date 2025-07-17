import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";

import { useLocation, useNavigate } from "react-router-dom";

const navStructure = [
  {
    section: "GENERAL",
    items: [
      { text: "Dashboard", icon: <HomeOutlined />, path: "dashboard" },

      {
        text: "Products",
        icon: <CategoryOutlinedIcon />,
        path: "products",
        subRoutes: [
          { label: "List", path: "products/list" },
          { label: "Create", path: "products/create" },
        ],
      },
      {
        text: "Category",
        icon: <CategoryOutlinedIcon />,
        path: "category",
        subRoutes: [
          { label: "List", path: "category/list" },
          { label: "Add", path: "category/add" },
        ],
      },
      {
        text: "Inventory",
        icon: <Inventory2OutlinedIcon />,
        path: "inventory",
        subRoutes: [
          { label: "Stock In", path: "inventory/stock-in" },
          { label: "Stock Out", path: "inventory/stock-out" },
        ],
      },
      {
        text: "Orders",
        icon: <ShoppingCartOutlined />,
        path: "orders",
        subRoutes: [
          { label: "All Orders", path: "orders/list" },
          { label: "Pending", path: "orders/pending" },
        ],
      },
      {
        text: "Purchases",
        icon: <ReceiptOutlinedIcon />,
        path: "purchases",
        subRoutes: [
          { label: "List", path: "purchases/list" },
          { label: "New", path: "purchases/new" },
        ],
      },
      {
        text: "Attributes",
        icon: <RateReviewOutlinedIcon />,
        path: "attributes",
        subRoutes: [
          { label: "Colors", path: "attributes/colors" },
          { label: "Sizes", path: "attributes/sizes" },
        ],
      },
      {
        text: "Invoices",
        icon: <ReceiptOutlinedIcon />,
        path: "invoices",
        subRoutes: [
          { label: "List", path: "invoices/list" },
          { label: "Details", path: "invoices/details" },
          { label: "Create", path: "invoices/create" },
        ],
      },
      {
        text: "Settings",
        icon: <CampaignOutlinedIcon />,
        path: "settings",
        subRoutes: [
          { label: "General", path: "settings/general" },
          { label: "Billing", path: "settings/billing" },
        ],
      },
    ],
  },
  {
    section: "USERS",
    items: [
      { text: "Profile", icon: <PersonOutlineIcon />, path: "profile" },
      {
      text: "Roles",
      icon: <LockOutlinedIcon />,
      path: "roles",
      subRoutes: [
        { label: "List", path: "roles/list" },
        { label: "Create", path: "roles/create" },
      ],
    },
      { text: "Permissions", icon: <LockOutlinedIcon />, path: "permissions" },
    ],
  },
];


const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
//   const theme = useTheme();
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              backgroundColor: "#1F2A40",
              color: "#fff",
              width: drawerWidth,
              borderWidth: 0,
            },
          }}
        >
          {/* Logo */}
          <Box m="1.5rem 2rem" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="bold" color="orange">
              🛒 Larkon
            </Typography>
            {!isNonMobile && (
              <IconButton onClick={() => setIsSidebarOpen(false)}>
                <ChevronLeft sx={{ color: "white" }} />
              </IconButton>
            )}
          </Box>

          {/* Nav Items */}
          <Box pl="1rem" pr="1rem">
            {navStructure.map((section, idx) => (
              <Box key={idx} mb="1.5rem">
                <Typography variant="caption" color="gray" pl="1rem" mb="0.5rem" display="block">
                  {section.section}
                </Typography>
                <List disablePadding>
                  {section.items.map(({ text, icon, path, subRoutes }) => (
                    <React.Fragment key={text}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            if (subRoutes) {
                              toggleExpand(text);
                            } else {
                              navigate(`/${path}`);
                              setActive(path);
                            }
                          }}
                          sx={{
                            backgroundColor: active === path ? "#334155" : "transparent",
                            color: "#fff",
                            borderLeft: active === path ? "4px solid orange" : "4px solid transparent",
                            px: "1rem",
                          }}
                        >
                          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>{icon}</ListItemIcon>
                          <ListItemText primary={text} />
                          {subRoutes &&
                            (expanded[text] ? <ExpandLess sx={{ color: "#fff" }} /> : <ExpandMore sx={{ color: "#fff" }} />)}
                        </ListItemButton>
                      </ListItem>
                      {/* Subroutes */}
                      {subRoutes && expanded[text] && (
                        <List disablePadding sx={{ pl: "2rem" }}>
                          {subRoutes.map((sub) => (
                            <ListItem key={sub.label} disablePadding>
                              <ListItemButton
                                onClick={() => {
                                  navigate(`/${sub.path}`);
                                  setActive(sub.path);
                                }}
                                sx={{
                                  backgroundColor: active === sub.path ? "#475569" : "transparent",
                                  color: "#cbd5e1",
                                  px: "1rem",
                                }}
                              >
                                <ListItemText primary={sub.label} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            ))}

            {/* Logout */}
            <Divider sx={{ borderColor: "#334155", my: "1rem" }} />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/login");
                    setActive("login");
                  }}
                  sx={{
                    color: "#f87171",
                    px: "1rem",
                  }}
                >
                  <ListItemIcon sx={{ color: "#f87171", minWidth: "35px" }}>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
