import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

export default function ProjectsSection({ text }) {
  return (
    <Box sx={{ py: 6, backgroundColor: '#fff0ff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          {text.projectsHeader}
        </Typography>
        <Grid container spacing={4}>
          {text.projects.map((proj, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: 'background.paper',
                  color: 'text.primary',
                  // Hover effects
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 10px 20px rgba(156, 39, 176, 0.5)'
                  }
                }}
                elevation={3}
              >
                <CardContent>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#B39DDB' /* a lighter purple accent */ }}
                >
                    {proj.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                    {proj.description}
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
