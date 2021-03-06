import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';

import Layout from './components/Layout';
import Dark from './styles/themes/dark';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
