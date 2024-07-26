import * as React from "react";

import {
  Stack,
  Typography,
  Container,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

/// icons
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness7";

// components
import BasicSelect from './basicSelectComponent'
/// hooks
import { useEffect, useContext, useState } from "react";
// context
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./context/context";
import { ThemeManagerContext } from "./context/thememenager";
import { responseWidthContext } from "./context/responseContext";
///theme
import { useTheme } from "@mui/material/styles";

export default function AnchorTemporaryDrawer() {
  const [rightOpen, setRightOpen] = useState(false);
  const { responseWidth } = useContext(responseWidthContext);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeManagerContext);
  const { locale } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const direction = locale === "en" ? "ltr":"rtl";
  const directionList = locale === "en" ? "right":"left";
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setRightOpen(open);
  };

   const toggleDarkMode = () => {
     const themeNow = isDarkMode === "light" ? "dark" : "light";
     setIsDarkMode(themeNow);
     localStorage.setItem("theme", JSON.stringify(isDarkMode));
   };


    useEffect(()=>{
        i18n.changeLanguage(locale);
      }, [locale, i18n]);
  

    const getIcon = (text) => {
      switch (text) {
        case "Home":
          return <HomeIcon />;
        case "Services":
          return <BuildIcon />;
        case "Experience":
          return <ScienceIcon />;
        case "Projects":
          return <CodeIcon />;
        case "Contact":
          return <ContactMailIcon />;
        default:
          return <FolderIcon />;
      }
    };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h5"
        className="phone"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "70px",
          padding: "10px",
          fontFamily: locale === "en" ? "poppins" : "cario" 
        }}

      >
        {t("Portfolio")}
      </Typography>
      <Divider />
      <List >
        {["Home", "Services", "Experience", "Projects", "Contact"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link
                  href={`#${text}`}
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: 4 }}>
                    {getIcon(text)}
                  </ListItemIcon>
                  <ListItemText
                    primary={t(text)}
                    sx={{
                      color: theme.palette.text.primary,
                      display: "inline-block",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Container maxWidth={responseWidth}>
      <Stack
        direction="row"
        spacing={2}
        display={{ md: "none" }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          direction: direction,
          position: "relative",
          top: "30px",
        }}
      >
        <Typography variant={locale === "en" ? "h4" : "h5"}>
          {t("Portfolio")}
        </Typography>
        <MenuIcon
          sx={{ fontSize: "45px", cursor: "pointer" }}
          onClick={toggleDrawer(true)}
        />
      </Stack>

      <Drawer
        anchor={directionList}
        open={rightOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            position: "relative",
            top: "30px",
            height: "70px",
          }}
        >
          <div onClick={toggleDarkMode}>
            {isDarkMode === "light" ? (
              <Brightness4Icon sx={{ fontSize: "30px", cursor: "pointer" }} />
            ) : (
              <Brightness5Icon sx={{ fontSize: "30px", cursor: "pointer" }} />
            )}
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <BasicSelect />
        </div>
      </Drawer>
    </Container>
  );
}
