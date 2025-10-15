import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box
} from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import type { ThemeContextType } from '../types/command';

interface HeaderProps {
  theme: ThemeContextType;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        color: 'text.primary'
      }}
    >
      <Toolbar sx={{ py: 2, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Title Section */}
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              color: 'primary.main',
              fontWeight: 700,
              mb: 1
            }}
          >
            Playwright Commands Dashboard
          </Typography>
          <Typography 
            variant="h6" 
            component="p"
            sx={{ 
              color: 'text.secondary',
              fontWeight: 400
            }}
          >
            Comprehensive Reference for Playwright Automation Testing
          </Typography>
        </Box>
        
        {/* Theme Toggle */}
        <Box sx={{ ml: 4 }}>
          <IconButton
            onClick={theme.toggleTheme}
            aria-label="Toggle theme"
            sx={{
              border: 1,
              borderColor: 'divider',
              '&:hover': {
                backgroundColor: 'action.hover',
              }
            }}
          >
            {theme.isDark ? (
              <LightMode sx={{ color: 'warning.main' }} />
            ) : (
              <DarkMode sx={{ color: 'text.secondary' }} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
