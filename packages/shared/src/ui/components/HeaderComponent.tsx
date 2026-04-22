import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



export function HeaderComponent() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left side: Menu or Logo */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Title / Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyStore
        </Typography>

        {/* Navigation links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/products" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Products</Button>
          </NavLink>
        </Box>

        {/* Right side: Cart */}
        <NavLink to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton color="inherit">
            <Badge badgeContent={totalQuantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
