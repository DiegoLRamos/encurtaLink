import RoutesApp from './routes';
import { useState } from 'react';
import { GlobalStyle, ContainerApp, ButtonTheme } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lightTheme, darkTheme } from './components/UI/themes';
import { FiSun, FiMoon } from "react-icons/fi";

const light = <FiSun size={24} />;
const dark = <FiMoon size={24} />;


export default function App() {
  const [isDark, setIsDark] = useState(true);

  function setTheme(){
    setIsDark(!isDark)
  }
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ContainerApp>
        <GlobalStyle />
        <ButtonTheme onClick={setTheme}>
          {isDark ? light : dark}
        </ButtonTheme>
        <RoutesApp />
        <ToastContainer autoClose={1500} position={'top-center'} />
      </ContainerApp>
    </ThemeProvider>
  );
}
