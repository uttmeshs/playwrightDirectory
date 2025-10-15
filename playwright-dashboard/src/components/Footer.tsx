import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Link
} from '@mui/material';
import { GitHub, Code } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 8,
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <IconButton
              component={Link}
              href="https://playwright.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Playwright"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <Code />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Built with React, TypeScript, and Material-UI
          </Typography>
          
          <Typography variant="caption" color="text.secondary">
            © 2024 Playwright Commands Dashboard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
