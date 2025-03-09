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

function App() {
  // Language: 'he' or 'en'
  const [locale, setLocale] = useState('he');
  
  // Determine direction based on language
  const direction = locale === 'he' ? 'rtl' : 'ltr';

  // Create theme and RTL cache
  const theme = useMemo(() => getAppTheme(direction), [direction]);
  const cacheOptions = useMemo(() => getCacheOptions(direction), [direction]);
  const cache = createCache(cacheOptions);

  // Toggle language
  const toggleLocale = () => {
    setLocale((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  // Get localized texts
  const t = messages[locale];

  // Set body direction for the entire document
  document.body.dir = direction;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Header locale={locale} onToggleLocale={toggleLocale} text={t} />
        <HeroSection text={t} />
        <ProjectsSection text={t} />
        <ContactSection text={t} />
        <Footer text={t} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
