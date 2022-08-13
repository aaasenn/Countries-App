import React, { useMemo } from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from './store/theme/selector';
import { useSelector } from 'react-redux';
import { themeLight, themeDark } from './theme/globalTheme';
import { store } from './store';

function App() {
  const chooseTheme = useSelector(selectTheme);
  const theme = useMemo( () => chooseTheme === 'light' ? themeLight : themeDark, [chooseTheme])
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <MainPage />
      </div>
    </ThemeProvider>

  );
}

export default App;
