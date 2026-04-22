import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../sagas/productSaga';
import { ProductCard } from './productCard';
import SearchBar from './SearchBar';
import { HeaderComponent } from 'shared';

export const ProductList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.product);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter((product: any) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ py: 8 }}>
      <HeaderComponent />
      <Box paddingTop={2}>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Grid container spacing={4}>
        {filteredData.map((product: any) => (
           <Grid xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};