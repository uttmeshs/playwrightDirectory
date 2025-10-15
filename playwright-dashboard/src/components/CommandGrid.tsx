import React from 'react';
import { Box } from '@mui/material';
import type { PlaywrightCommand } from '../types/command';
import CommandCard from './CommandCard';
import SectionHeader from './common/SectionHeader';
import { commonStyles } from '../utils/styleConstants';

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
  const getHeaderTitle = () => {
    if (searchTerm) {
      return `Found ${commands.length} command${commands.length !== 1 ? 's' : ''} matching "${searchTerm}"`;
    }
    if (selectedCategory) {
      return `${commands.length} ${selectedCategory} command${commands.length !== 1 ? 's' : ''}`;
    }
    return `All ${commands.length} Playwright Commands`;
  };

  const getEmptyStateMessage = () => {
    if (searchTerm) {
      return `No commands match "${searchTerm}"`;
    }
    if (selectedCategory) {
      return `No commands in ${selectedCategory} category`;
    }
    return 'No commands available';
  };

  // UNIFIED LAYOUT STRUCTURE - SAME FOR ALL SCENARIOS
  return (
    <Box sx={commonStyles.unifiedContainer}>
      {/* Header - Only show when there are results */}
      {commands.length > 0 && <SectionHeader title={getHeaderTitle()} />}
      
      {/* Content area - ALWAYS full width */}
      <Box sx={commonStyles.contentArea}>
        {commands.length === 0 ? (
          // Empty state - clean message only
          <Box sx={commonStyles.emptyStateLayout}>
            <Box sx={commonStyles.emptyStateMessage}>
              <Box sx={{ fontSize: '1.125rem', color: 'text.secondary', fontWeight: 500 }}>
                {getEmptyStateMessage()}
              </Box>
            </Box>
          </Box>
        ) : commands.length === 1 ? (
          // Single result - centered layout
          <Box sx={commonStyles.singleResultLayout}>
            <Box sx={commonStyles.singleCardWrapper}>
              <CommandCard 
                command={commands[0]} 
                onClick={onCommandClick}
              />
            </Box>
          </Box>
        ) : (
          // Multiple results - grid layout
          <Box sx={commonStyles.gridLayout}>
            {commands.map((command) => (
              <Box key={command.id} sx={commonStyles.gridCardWrapper}>
                <CommandCard 
                  command={command} 
                  onClick={onCommandClick}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommandGrid;
