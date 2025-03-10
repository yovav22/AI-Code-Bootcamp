// App.js
import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { getAppTheme, getCacheOptions } from './theme';
import messages from './i18n';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// The new curated section
import CourseHighlightsSection from './components/CourseHighlightsSection';

function App() {
  const [locale, setLocale] = useState('he');
  
  const direction = locale === 'he' ? 'rtl' : 'ltr';
  const theme = useMemo(() => getAppTheme(direction), [direction]);
  const cacheOptions = useMemo(() => getCacheOptions(direction), [direction]);
  const cache = createCache(cacheOptions);
  
  const toggleLocale = () => setLocale((prev) => (prev === 'he' ? 'en' : 'he'));
  
  const t = messages[locale];
  document.body.dir = direction;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Header locale={locale} onToggleLocale={toggleLocale} text={t} />
        <HeroSection text={t} />

        {/* Curated Course Highlights */}
        <CourseHighlightsSection text={t} />

        <ProjectsSection text={t} />
        <ContactSection text={t} />
        <Footer text={t} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
