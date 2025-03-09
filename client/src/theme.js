import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export function getAppTheme(direction = 'ltr') {
  return createTheme({
    direction,
    palette: {
      mode: 'dark',
      primary: { main: '#9C27B0' }, // Purple
      background: {
        default: '#0e0e0e', // Near-black
        paper: '#1a1a1a'    // Dark gray for cards
      },
      text: {
        // Light text to ensure visibility on dark backgrounds
        primary: '#ffffff',
        secondary: '#cccccc'
      }
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif'
    }
  });
}

export function getCacheOptions(direction = 'ltr') {
  if (direction === 'rtl') {
    return {
      key: 'muirtl',
      stylisPlugins: [prefixer, rtlPlugin]
    };
  }
  return {
    key: 'mui',
    stylisPlugins: [prefixer]
  };
}
