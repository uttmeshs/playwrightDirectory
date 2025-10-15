import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Link
} from '@mui/material';
import { GitHub, Code, Email, Twitter, LinkedIn } from '@mui/icons-material';

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
          {/* Social Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <IconButton
              component={Link}
              href="https://github.com/uttmeshs/playwrightDirectory"
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
            <IconButton
              component={Link}
              href="https://x.com/shukla2017"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/uttmesh-shukla-76a86343/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <LinkedIn />
            </IconButton>
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
          </Box>
          
          {/* Tech Stack and Copyright */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Built with React, TypeScript, and Material-UI
          </Typography>
          
          <Typography variant="caption" color="text.secondary">
            © 2025 Playwright Commands Dashboard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
