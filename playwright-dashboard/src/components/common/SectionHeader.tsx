import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'page' | 'section';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  variant = 'section' 
}) => {
  const isPageTitle = variant === 'page';
  
  return (
    <Box sx={{ mb: isPageTitle ? 4 : 3, textAlign: 'center' }}>
      <Typography 
        variant={isPageTitle ? 'h4' : 'h6'}
        component={isPageTitle ? 'h1' : 'h2'}
        gutterBottom 
        sx={isPageTitle ? {
          fontWeight: 700,
          background: 'linear-gradient(45deg, #00ff00, #0080ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 1
        } : {}}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{ mb: isPageTitle ? 3 : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
