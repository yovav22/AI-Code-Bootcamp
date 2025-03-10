// src/components/CourseHighlightsSection.js

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

export default function CourseHighlightsSection({ text }) {
  const ch = text.courseHighlights; // Shorthand for the curated Hebrew text

  // Example: splitting the 8 sessions into steps for a Stepper
  // We'll just demonstrate a few steps to show how it might look.
  // If your content has exactly 8 bullet points, you can map them instead.
  const sessionSteps = [
    'חיבור ל-ChatGPT ליצירת בסיס קוד',
    'בניית רובוט ממלא טפסים',
    'אוטומציות מתקדמות',
    'טעימות בינה מלאכותית נוספות'
  ];

  // Example images (just placeholders). Replace with your actual image URLs.
  const projectImages = [
    'https://via.placeholder.com/400x250/512d6d/FFFFFF?text=Robot+Automation',
    'https://via.placeholder.com/400x250/660066/FFFFFF?text=Website+Generator',
    'https://via.placeholder.com/400x250/36006B/FFFFFF?text=Telegram+Bot',
    'https://via.placeholder.com/400x250/5f0067/FFFFFF?text=Auto+Docs'
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#3b3842',
        color: '#fff',
        py: 6
      }}
    >
      <Container maxWidth="md">
        {/* 8 SESSIONS (Stepper) */}
        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          {ch.eightSessionsTitle}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {ch.eightSessionsDescription}
        </Typography>
        
        <Stepper alternativeLabel activeStep={-1} sx={{ mb: 4 }}>
          {sessionSteps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  {step}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* AUDIENCE (Chips) */}
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mt: 6, mb: 2 }}>
          {ch.audienceTitle}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {ch.audienceBullets?.map((item, idx) => (
            <Chip
              key={idx}
              label={item}
              sx={{
                backgroundColor: '#320b3a',
                color: '#fff',
                fontSize: '0.9rem'
              }}
            />
          ))}
        </Box>

        {/* BENEFITS (Accordion) */}
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mt: 6, mb: 2 }}>
          {ch.benefitsTitle}
        </Typography>
        {ch.benefitsBullets?.map((benefit, idx) => (
          <Accordion
            key={idx}
            sx={{ backgroundColor: '#1a1a1a', color: '#fff', mb: 1 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                יתרון #{idx + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{benefit}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* CLOSING LINES */}
        <Box sx={{ mt: 4 }}>
          {ch.closingLines?.map((line, idx) => (
            <Typography
              key={idx}
              variant="body1"
              paragraph
              sx={{
                fontWeight: idx === 0 ? 'bold' : 'normal',
                fontSize: '1.1rem'
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
