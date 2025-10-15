export type CommandCategory = 'locators' | 'actions' | 'assertions' | 'navigation' | 'browser';

export interface PlaywrightCommand {
  id: number;
  name: string;
  category: CommandCategory;
  description: string;
  syntax: string;
  parameters?: Parameter[];
  examples: string[];
  relatedCommands?: string[];
  documentationUrl: string;
}

export interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}


