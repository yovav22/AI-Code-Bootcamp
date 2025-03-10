import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

export default function ContactSection({ text }) {
  // Replace with your actual WhatsApp link using the phone number:
  // Make sure to include the country code after 'wa.me/'
  const whatsappLink = 'https://wa.me/972586698200?text=Hello! I would like more info.';
  
  // Use mailto: with your email for direct emailing
  const emailAddress = 'mailto:yovava22@gmail.com?subject=AI-CODE-BOOTCAMP Inquiry';

  return (
    <Box
      sx={{
        background: 'linear-gradient(to left, #6A1B9A, #000)',
        color: '#fff',
        py: 6,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          {text.contactHeader}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {text.contactBody}
        </Typography>

        {/* WhatsApp Button */}
        <Button
          variant="contained"
          sx={{
            m: 1,
            backgroundColor: '#fff',
            color: '#6A1B9A',
            fontWeight: 'bold',
            ':hover': {
              backgroundColor: '#f0f0f0'
            }
          }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.whatsappButton}
        </Button>

        {/* Email Button */}
        <Button
          variant="outlined"
          sx={{
            m: 1,
            borderColor: '#fff',
            color: '#fff',
            fontWeight: 'bold',
            ':hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }}
          href={emailAddress}
        >
          {text.emailButton}
        </Button>
      </Container>
    </Box>
  );
}
