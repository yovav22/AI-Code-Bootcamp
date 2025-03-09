import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer({ text }) {
  return (
    <Box
    component="footer"
    sx={{
        backgroundColor: '#1A1A1A',
        color: '#fff',
        textAlign: 'center',
        p: 2,
        mt: 4
    }}
    >
    <Typography variant="body2">
        © {new Date().getFullYear()} AI-CODE-BOOTCAMP - {text.footerText}
    </Typography>
    </Box>
  );
}
