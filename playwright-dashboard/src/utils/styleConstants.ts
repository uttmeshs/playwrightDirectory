export const commonStyles = {
  // Base width constraints - ALWAYS use these
  fullWidth: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  
  // Unified layout container - THE SAME FOR ALL SCENARIOS
  unifiedContainer: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'stretch',
  },
  
  // Content area - ALWAYS full width
  contentArea: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  
  // Grid layout - for multiple results
  gridLayout: {
    display: 'grid',
    gap: 2,
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
      xl: 'repeat(6, 1fr)',
    },
    gridAutoRows: 'minmax(120px, auto)',
  },
  
  // Single result layout - centered
  singleResultLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  
  // Empty state layout - same as grid but with centering
  emptyStateLayout: {
    display: 'grid',
    gap: 2,
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
      xl: 'repeat(6, 1fr)',
    },
    gridAutoRows: 'minmax(120px, auto)',
    minHeight: '300px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Card wrapper for single results
  singleCardWrapper: {
    width: { xs: '100%', sm: '400px', md: '450px' },
    maxWidth: { xs: '100%', sm: '400px', md: '450px' },
  },
  
  // Card wrapper for grid results
  gridCardWrapper: {
    width: '100%',
    maxWidth: '100%',
  },
  
  // Empty state message
  emptyStateMessage: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    py: 8,
    px: 4,
    backgroundColor: 'background.paper',
    borderRadius: 2,
    border: 1,
    borderColor: 'divider',
  },
  
  // Legacy styles for compatibility
  centeredText: {
    textAlign: 'center' as const,
  },
  
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  
  centeredColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  
  paperContainer: {
    backgroundColor: 'background.paper',
    borderRadius: 2,
    border: 1,
    borderColor: 'divider',
  },
  
  flexColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  
  flexRow: {
    display: 'flex',
    flexDirection: 'row' as const,
  },
  
  mainContainer: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  
  searchContainer: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    mb: 4,
  },
  
  spacing: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
} as const;

export const typographyVariants = {
  pageTitle: {
    variant: 'h4' as const,
    component: 'h1' as const,
    sx: {
      fontWeight: 700,
      background: 'linear-gradient(45deg, #00ff00, #0080ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      mb: 1,
    },
  },
  
  sectionTitle: {
    variant: 'h6' as const,
    component: 'h2' as const,
  },
  
  subtitle: {
    variant: 'subtitle1' as const,
    color: 'text.secondary' as const,
  },
} as const;
