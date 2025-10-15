import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { PlaywrightCommand } from '../types/command';

interface CommandCardProps {
  command: PlaywrightCommand;
  onClick: (command: PlaywrightCommand) => void;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'locators':
      return '#3b82f6';
    case 'actions':
      return '#10b981';
    case 'assertions':
      return '#f59e0b';
    case 'navigation':
      return '#8b5cf6';
    case 'browser':
      return '#ef4444';
    default:
      return '#6b7280';
  }
};

const CommandCard: React.FC<CommandCardProps> = ({ command, onClick }) => {
  const categoryColor = getCategoryColor(command.category);

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 120,
        cursor: 'pointer',
        backgroundColor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
          borderColor: categoryColor,
          '& .category-indicator': {
            backgroundColor: categoryColor,
          },
        },
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
      }}
      onClick={() => onClick(command)}
    >
      <Box
        className="category-indicator"
        sx={{
          height: 4,
          backgroundColor: 'divider',
          borderRadius: '2px 2px 0 0',
          transition: 'background-color 0.2s ease-in-out',
        }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
          '&:last-child': {
            pb: 2,
          },
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: '0.75rem',
            }}
          >
            #{command.id}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'text.primary',
              mb: 0.5,
              lineHeight: 1.2,
            }}
          >
            {command.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.75rem',
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {command.description}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: categoryColor,
              fontWeight: 500,
              fontSize: '0.7rem',
              textTransform: 'capitalize',
            }}
          >
            {command.category}
          </Typography>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: categoryColor,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
