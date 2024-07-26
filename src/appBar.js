import {
  Grid,
  Typography,
  Stack,
  Divider,
  Link,
} from "@mui/material";
/// icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness7";
/// hooks
import { useEffect, useContext } from "react";
/// Components
import BasicSelect from "./basicSelectComponent";
import { useTheme } from "@mui/material/styles";
// language translate
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./context/context";
import styled from "styled-components";
import {ThemeManagerContext} from './context/thememenager'

///styled component 
import { sliderTop, sliderLeft } from "./styledComponent"

export default function Bar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeManagerContext);
  const { locale } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const marginRightStack = locale === "en" ? "0px !important" : "16px !important";
  const theme = useTheme();

   const toggleDarkMode = () => {
    const themeNow = isDarkMode === "light" ? "dark" : "light";
    setIsDarkMode(themeNow);
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);



  const NavTypography = styled(Typography)`
    font-family: ${locale === "en" ? "poppins" : "cario"}!important;
    font-size: 20px;
    font-weight: 300 !important;
    cursor: pointer;
    color: ${theme.palette.text.primary};
    animation: ${sliderTop} 1s ease forwards;
  `;

  const TitleTypography = styled(Typography)`
    font-family: poppins;
    font-size: 30px;
    font-weight: 300;
    display: flex;
    animation: ${sliderLeft} 1s ease forwards;
  `;



  return (
    <div style={{ position: "relative", top: "25px", direction: direction }}>
      <Grid
        container
        spacing={4}
        display={{ xs: "none", sm: "none", md: "flex" }}
      >
        <Grid item xs={2}>
          <TitleTypography
            variant="h5"
            sx={{ fontFamily: locale === "en" ? "poppins" : "cario" }}
          >
            {t("Portfolio")}
          </TitleTypography>
        </Grid>
        <Grid item xs={8}>
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "flex-end" }}
          >
            <Link href="#Home" underline="none">
              <NavTypography variant="h6" className="MarginLeft">
                {t("Home")}
              </NavTypography>
            </Link>

            <Link href="#Services" underline="none">
              <NavTypography variant="h6">{t("Services")}</NavTypography>
            </Link>
            <Link href="#Experience" underline="none">
              <NavTypography variant="h6">{t("Experience")}</NavTypography>
            </Link>
            <Link href="#Projects" underline="none">
              <NavTypography variant="h6">{t("Projects")}</NavTypography>
            </Link>
            <Link href="#Contact" underline="none">
              <NavTypography variant="h6">{t("Contact")}</NavTypography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "flex-end",
              display: "flex",
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <BasicSelect />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ marginRight: marginRightStack }}
            />
            <div onClick={toggleDarkMode}>
              {isDarkMode === "light" ? (
                <Brightness4Icon sx={{ fontSize: "30px", cursor: "pointer" }} />
              ) : (
                <Brightness5Icon sx={{ fontSize: "30px", cursor: "pointer" }} />
              )}
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
