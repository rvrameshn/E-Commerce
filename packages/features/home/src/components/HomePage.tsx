import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { HeaderComponent } from "shared";

// Example banner data
const banners = [
  {
    id: 1,
    title: "",
    description: "",
    image: "https://img.freepik.com/free-psd/banner-template-design-summer-sale_23-2148476963.jpg",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "https://img.freepik.com/free-psd/social-media-post-summer-sale_23-2148476974.jpg",
  },
];

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <HeaderComponent />
      {/* Banner Section */}
      {banners.map((banner) => (
        <Paper
          key={banner.id}
          sx={{
            mb: 4,
            overflow: "hidden",
            position: "relative",
          }}
          elevation={3}
        >
          <Box
            component="img"
            src={banner.image}
            alt={banner.title}
            sx={{ width: "100%", height: "auto" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              {banner.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {banner.description}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Container>
  );
};