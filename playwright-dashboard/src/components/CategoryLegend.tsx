import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { categories } from '../utils/categoryUtils';

interface CategoryLegendProps {
  onCategoryFilter?: (category: string | null) => void;
  activeCategory?: string | null;
}

const CategoryLegend: React.FC<CategoryLegendProps> = ({ 
  onCategoryFilter, 
  activeCategory 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        justifyContent: 'center',
        mb: 3,
        p: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
          mr: 1,
          alignSelf: 'center',
        }}
      >
        Filter by category:
      </Typography>
      
      {categories.map((category) => (
        <Chip
          key={category.name}
          label={`${category.label} (${category.count})`}
          onClick={() => onCategoryFilter?.(activeCategory === category.name ? null : category.name)}
          sx={{
            backgroundColor: activeCategory === category.name ? category.color : 'transparent',
            color: activeCategory === category.name ? 'white' : category.color,
            border: `1px solid ${category.color}`,
            fontWeight: 500,
            fontSize: '0.75rem',
            height: 28,
            '&:hover': {
              backgroundColor: activeCategory === category.name ? category.color : `${category.color}20`,
            },
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
          }}
        />
      ))}
      
      {activeCategory && (
        <Chip
          label="Clear filter"
          onClick={() => onCategoryFilter?.(null)}
          sx={{
            backgroundColor: 'transparent',
            color: 'text.secondary',
            border: '1px solid',
            borderColor: 'divider',
            fontWeight: 500,
            fontSize: '0.75rem',
            height: 28,
            '&:hover': {
              backgroundColor: 'action.hover',
            },
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
          }}
        />
      )}
    </Box>
  );
};

export default CategoryLegend;
