import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function HeroSection({ text }) {
  return (
    <Box
      sx={{
        // Dark purple to black gradient
        background: 'linear-gradient(to right, #6A1B9A, #000)',
        color: '#fff',               // Ensure text is white
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        p: 4
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: '900' }}>
          {text.heroTitle}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ whiteSpace: 'pre-line' }}
        >
          {text.heroSubtitle}
        </Typography>
      </Container>
    </Box>
  );
}
