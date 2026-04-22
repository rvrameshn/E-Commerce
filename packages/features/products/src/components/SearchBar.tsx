import React, { useState, useEffect } from "react";
import {
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      // Add to history
      const newHistory = [searchQuery, ...history.filter(item => item !== searchQuery)].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Autocomplete
        freeSolo
        options={history}
        value={query}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setQuery(newValue);
            handleSearch(newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleSearch(query)}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
