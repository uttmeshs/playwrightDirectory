export const getCategoryColor = (category: string): string => {
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

export const categories = [
  { name: 'locators', label: 'Locators', color: '#3b82f6', count: 15 },
  { name: 'actions', label: 'Actions', color: '#10b981', count: 12 },
  { name: 'assertions', label: 'Assertions', color: '#f59e0b', count: 8 },
  { name: 'navigation', label: 'Navigation', color: '#8b5cf6', count: 10 },
  { name: 'browser', label: 'Browser/Context', color: '#ef4444', count: 13 },
] as const;
