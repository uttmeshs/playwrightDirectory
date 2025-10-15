import React from 'react';
import { Box, Typography } from '@mui/material';
import { commonStyles } from '../../utils/styleConstants';

interface EmptyStateProps {
  title: string;
  message: string;
  minHeight?: number;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  message, 
  minHeight = 300 
}) => {
  return (
    <Box sx={{ 
      ...commonStyles.fullWidth,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: `${minHeight}px`
    }}>
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
          ...commonStyles.fullWidth,
          maxWidth: '600px',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyState;
