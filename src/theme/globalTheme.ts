import { createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<string, React.CSSProperties['color']>,
  }
};

declare module '@mui/material/styles' {
  interface ThemeOptions {
    colors: Record<string, React.CSSProperties['color']>,
  }
};

export const themeLight = createTheme({
  colors: {
    elementColor: 'hsl(0, 0%, 100%)',
    bodyColor: 'hsl(0, 0%, 98%)',
    textColor: 'hsl(200, 15%, 8%)',
  }
});

export const themeDark = createTheme({
  colors: {
    elementColor: 'hsl(209, 23%, 22%)',
    bodyColor: 'hsl(207, 26%, 17%)',
    textColor: 'hsl(0, 0%, 100%)',
  }
});
