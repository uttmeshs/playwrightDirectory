import React, { useState, useMemo } from 'react';
import { Box, Paper } from '@mui/material';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import CommandGrid from './components/CommandGrid';
import CategoryLegend from './components/CategoryLegend';
import CommandModal from './components/CommandModal';
import SectionHeader from './components/common/SectionHeader';
import { commonStyles } from './utils/styleConstants';
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
    <Box sx={{ 
      minHeight: '100vh', 
      ...commonStyles.flexColumn,
      ...commonStyles.fullWidth
    }}>
      <Header theme={theme} />
      
      <Box component="main" sx={{ 
        flexGrow: 1, 
        ...commonStyles.fullWidth
      }}>
        <Paper 
          elevation={2}
          sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            backgroundColor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            minHeight: '400px',
            ...commonStyles.flexColumn,
            width: '100vw',
            maxWidth: '100vw',
            minWidth: '100vw',
            margin: 0,
            marginLeft: 0,
            marginRight: 0,
          }}
        >
            <SectionHeader 
              title="Playwright Commands Dashboard"
              subtitle="Interactive reference for all 58 Playwright commands"
              variant="page"
            />

            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            
            <CategoryLegend 
              onCategoryFilter={handleCategoryFilter}
              activeCategory={selectedCategory}
            />
            
            <Box sx={{ 
              flexGrow: 1, 
              ...commonStyles.flexColumn,
              ...commonStyles.fullWidth
            }}>
              <CommandGrid 
                commands={filteredCommands}
                onCommandClick={handleCommandClick}
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            </Box>
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
