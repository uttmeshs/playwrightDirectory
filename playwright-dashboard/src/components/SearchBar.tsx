import React from 'react';
import { 
  TextField, 
  InputAdornment, 
  IconButton, 
  Box
} from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search Playwright commands..." 
}) => {
  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      mb: 4,
    }}>
      <TextField
          variant="outlined"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '500px', md: '600px' }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
            endAdornment: searchTerm && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => onSearchChange('')}
                  edge="end"
                  size="small"
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: 'background.paper',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                },
              },
            }
          }}
        />
    </Box>
  );
};

export default SearchBar;
