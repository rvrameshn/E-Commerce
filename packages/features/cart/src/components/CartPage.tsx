import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Divider,
  Button,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { HeaderComponent } from "shared";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items?: CartItem[];
  onRemove?: (id: string) => void;
  onCheckout?: () => void;
}

export const CartPage: React.FC<CartProps> = ({  onRemove, onCheckout }) => {

  const items: CartItem[] = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ py: 8 }}>
      <HeaderComponent />
      <Box paddingTop={2} />
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
    <Grid container spacing={3}>
      {/* Cart Items */}
      <Grid item xs={12} md={8}>
        <Paper elevation={3}>
          <Typography variant="h5" sx={{ p: 2 }}>
            Your Cart
          </Typography>
          <Divider />
          <List>
            {items.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}>
                      <AddIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`₹${item.price}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>

      {/* Summary */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Order Summary</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">Total: ₹{total.toFixed(2)}</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={onCheckout}
          >
            Proceed to Checkout
          </Button>
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
};