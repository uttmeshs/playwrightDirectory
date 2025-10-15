import React from 'react';
import { Box, Typography } from '@mui/material';
import type { PlaywrightCommand } from '../types/command';
import CommandCard from './CommandCard';

interface CommandGridProps {
  commands: PlaywrightCommand[];
  onCommandClick: (command: PlaywrightCommand) => void;
  searchTerm?: string;
  selectedCategory?: string | null;
}

const CommandGrid: React.FC<CommandGridProps> = ({ 
  commands, 
  onCommandClick, 
  searchTerm,
  selectedCategory 
}) => {
  if (commands.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          No commands found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {searchTerm 
            ? `No commands match "${searchTerm}"`
            : selectedCategory 
            ? `No commands in ${selectedCategory} category`
            : 'No commands available'
          }
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {searchTerm 
            ? `Found ${commands.length} command${commands.length !== 1 ? 's' : ''} matching "${searchTerm}"`
            : selectedCategory 
            ? `${commands.length} ${selectedCategory} command${commands.length !== 1 ? 's' : ''}`
            : `All ${commands.length} Playwright Commands`
          }
        </Typography>
      </Box>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(6, 1fr)',
          },
          gridAutoRows: 'minmax(120px, auto)',
          gap: 2,
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        {commands.map((command) => (
          <CommandCard 
            key={command.id}
            command={command} 
            onClick={onCommandClick}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CommandGrid;
