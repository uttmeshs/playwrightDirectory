import React, { useState, useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import CommandGrid from './components/CommandGrid';
import CategoryLegend from './components/CategoryLegend';
import CommandModal from './components/CommandModal';
import { playwrightCommands, searchCommands, getCommandsByCategory } from './data/playwrightCommands';
import type { PlaywrightCommand } from './types/command';

const AppContent: React.FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCommand, setSelectedCommand] = useState<PlaywrightCommand | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredCommands = useMemo(() => {
    let commands = playwrightCommands;

    // Apply category filter
    if (selectedCategory) {
      commands = getCommandsByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      commands = searchCommands(searchTerm);
      // If category is selected, filter search results by category
      if (selectedCategory) {
        commands = commands.filter(command => command.category === selectedCategory);
      }
    }

    return commands;
  }, [searchTerm, selectedCategory]);

  const handleCommandClick = (command: PlaywrightCommand) => {
    setSelectedCommand(command);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCommand(null);
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header theme={theme} />
      
      <Box component="main" sx={{ flexGrow: 1, py: 4, px: { xs: 1, sm: 2, md: 3 }, width: '100%' }}>
        <Paper 
          elevation={2}
          sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            borderRadius: 3,
            backgroundColor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: 'none',
            mx: 0,
          }}
        >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #00ff00, #0080ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1
                }}
              >
                Playwright Commands Dashboard
              </Typography>
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Interactive reference for all 58 Playwright commands
              </Typography>
            </Box>

            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            
            <CategoryLegend 
              onCategoryFilter={handleCategoryFilter}
              activeCategory={selectedCategory}
            />
            
            <CommandGrid 
              commands={filteredCommands}
              onCommandClick={handleCommandClick}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
            />
          </Paper>
      </Box>
      
      <Footer />
      
      <CommandModal 
        command={selectedCommand}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
