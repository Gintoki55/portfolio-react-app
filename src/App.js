import "./App.css";
import "./i18n";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "./context/context";
import { ResponseProvider } from "./context/responseContext";
import ProjectManager from "./project";
import { ThemeManagerContext } from "./context/thememenager";
import { useContext, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { teal } from "@mui/material/colors";
///animation Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const typographySettings = {
  fontFamily: ["poppins","cario","NOTO"],
  fontWeightLight: 100,
  fontWeightRegular: 300,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    myColors:{
      floatingButtonColor:{
        primary: teal[500],
        secondary: teal[50],
      }
    }
  },
  typography: typographySettings,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    myColors: {
      floatingButtonColor: {
        primary: teal[50],
        secondary: teal[500],
      },
    },
  },
  typography: typographySettings,
});

function App() {
  const { isDarkMode } = useContext(ThemeManagerContext);
   useEffect(() => {
     AOS.init({
       duration: 1500,
       once: false,
     });
   }, []);
  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <LanguageProvider>
          <ResponseProvider>
            <ProjectManager />
          </ResponseProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
