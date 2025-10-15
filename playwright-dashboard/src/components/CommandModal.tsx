import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import { Close, Code, Link } from '@mui/icons-material';
import type { PlaywrightCommand } from '../types/command';

interface CommandModalProps {
  command: PlaywrightCommand | null;
  open: boolean;
  onClose: () => void;
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

const CommandModal: React.FC<CommandModalProps> = ({ command, open, onClose }) => {
  if (!command) return null;

  const categoryColor = getCategoryColor(command.category);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
            {command.name}
          </Typography>
          <Chip
            label={command.category}
            sx={{
              backgroundColor: categoryColor,
              color: 'white',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
          />
        </Box>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {command.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code fontSize="small" />
            Syntax
          </Typography>
          <Box
            sx={{
              backgroundColor: 'action.hover',
              p: 2,
              borderRadius: 1,
              border: 1,
              borderColor: 'divider',
              position: 'relative',
            }}
          >
            <Typography
              component="code"
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: 'text.primary',
                display: 'block',
                wordBreak: 'break-all',
              }}
            >
              {command.syntax}
            </Typography>
            <IconButton
              size="small"
              onClick={() => copyToClipboard(command.syntax)}
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Code fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {command.parameters && command.parameters.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Parameters
            </Typography>
            {command.parameters.map((param, index) => (
              <Box key={index} sx={{ mb: 2, p: 2, backgroundColor: 'background.default', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {param.name}
                  </Typography>
                  <Chip
                    label={param.type}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                  />
                  {param.required && (
                    <Chip
                      label="required"
                      size="small"
                      color="error"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {param.description}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Examples
          </Typography>
          {command.examples.map((example, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'action.hover',
                p: 2,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                mb: 1,
                position: 'relative',
              }}
            >
              <Typography
                component="code"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'text.primary',
                  display: 'block',
                  wordBreak: 'break-all',
                }}
              >
                {example}
              </Typography>
              <IconButton
                size="small"
                onClick={() => copyToClipboard(example)}
                sx={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Code fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

        {command.relatedCommands && command.relatedCommands.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Related Commands
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {command.relatedCommands.map((relatedCommand, index) => (
                <Chip
                  key={index}
                  label={relatedCommand}
                  variant="outlined"
                  size="small"
                  sx={{ fontFamily: 'monospace' }}
                />
              ))}
            </Box>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link fontSize="small" color="action" />
          <Button
            variant="text"
            size="small"
            href={command.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none', p: 0 }}
          >
            View official documentation
          </Button>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommandModal;
