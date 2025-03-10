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

export default function CourseHighlightsSection({ text, locale }) {
  const ch = text.courseHighlights;

  // Example steps for 1..4
  const sessionSteps = [
    'חיבור ל-ChatGPT ליצירת בסיס קוד',
    'בניית רובוט ממלא טפסים',
    'אוטומציות מתקדמות',
    'טעימות בינה מלאכותית נוספות'
  ];

  return (
    <Box
      dir={locale === 'he' ? 'rtl' : 'ltr'}
      sx={{
        backgroundColor: '#1f1f1f',
        color: '#fff',
        py: 6,
        // Use RTL text alignment for Hebrew, LTR for English
        textAlign: locale === 'he' ? 'right' : 'left'
      }}
    >
      <Container maxWidth="md">
        
        {/* Title */}
        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          {ch.eightSessionsTitle}
        </Typography>

        {/* Description */}
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {ch.eightSessionsDescription}
        </Typography>

        {/* STEP LINE: Force LTR to keep steps from left to right */}
        <Stepper
          alternativeLabel
          activeStep={-1}
          sx={{
            mb: 4,
            // Force the line to go left→right, even if locale is RTL
            direction: 'ltr',
            // Step label text can still be right-aligned in Hebrew
            '& .MuiStepLabel-label': {
              textAlign: locale === 'he' ? 'right' : 'left',
              direction: locale === 'he' ? 'rtl' : 'ltr'
            }
          }}
        >
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
        {ch.audienceBullets?.map((item, idx) => (
          <Chip
            key={idx}
            label={item}
            sx={{
              backgroundColor: '#320b3a',
              color: '#fff',
              fontSize: '0.9rem',
              m: 0.5,
              // Align text properly for Hebrew vs. English
              direction: locale === 'he' ? 'rtl' : 'ltr',
              textAlign: locale === 'he' ? 'right' : 'left'
            }}
          />
        ))}

        {/* BENEFITS (Accordions) */}
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mt: 6, mb: 2 }}>
          {ch.benefitsTitle}
        </Typography>
        {ch.benefitsBullets?.map((benefit, idx) => (
          <Accordion
            key={idx}
            sx={{
              backgroundColor: '#320b30',
              color: '#fff',
              mb: 1,
              // Force alignment for Hebrew
              direction: locale === 'he' ? 'rtl' : 'ltr',
              textAlign: locale === 'he' ? 'right' : 'left'
            }}
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

        {/* SINGLE-LINE CLOSING */}
        {ch.closingLines && (
          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: '#CE93D8',
              mt: 6
            }}
          >
            {ch.closingLines}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
