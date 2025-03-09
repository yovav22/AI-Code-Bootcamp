import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header({ locale, onToggleLocale, text }) {
  return (
    // Force LTR in the header area
    <AppBar position="static" dir="ltr">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {text.headerTitle}
        </Typography>
        {/* Flag icon button */}
        <Button color="inherit" onClick={onToggleLocale} sx={{ fontSize: '1.4rem' }}>
          {locale === 'he' ? '🇺🇸' : '🇮🇱'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
