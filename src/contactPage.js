import { Grid, Typography, Box, Stack, Divider, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

import { useContext } from "react";
//// i18next. translate 
import { useTranslation } from "react-i18next";
/// responseValue & LanguageValue
import { LanguageContext } from "./context/context";
import { responseWidthContext } from "./context/responseContext";
import { useTheme } from "@mui/material/styles";
export default function Contact() {
    const theme = useTheme();
    const { t } = useTranslation();
    const { locale } = useContext(LanguageContext);
    const { responseWidth } = useContext(responseWidthContext);
    
  return (
    <Box
      sx={{ position: "relative", top: "200px", paddingBottom: "20px" }}
      data-aos="fade-up"
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Poppins", fontWeight: "200" }}
      >
        {t("Get In Touch")}{" "}
      </Typography>
      <Typography
        variant={responseWidth === "md" ? "h2" : "h3"}
        gutterBottom
        sx={{
          fontFamily: "Poppins",
          fontWeight: locale === "en" ? "500" : "bold",
        }}
      >
        {t("Contact Me")}
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          height={90}
          width={600}
          my={4}
          p={4}
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "20px",
            display: "flex",
            flexDirection: responseWidth === "md" ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textDecoration: "none",
            }}
            href="mailto:ahmedbarkhed7@gmail.com"
          >
            <EmailIcon sx={{ color: "grey", marginRight: "5px" }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "200",
                fontSize: responseWidth === "md" ? "20px" : "16px",
                color: theme.palette.text.primary,
              }}
            >
              ahmedbarkhed7@gmail.com
            </Typography>
          </a>
          <a
            style={{
              display: responseWidth === "md" ? "flex" : "none",
              flexDirection: "row",
              alignItems: "center",
              textDecoration: "none",
            }}
            href="https://t.me/+96899149747"
          >
            <TelegramIcon sx={{ color: "grey", marginRight: "5px" }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "200",
                color: theme.palette.text.primary,
              }}
            >
              Telegram
            </Typography>
          </a>
        </Box>
      </div>
      <Divider
        sx={{
          position: "relative",
          top: responseWidth === "md" ? "180px" : "140px",
        }}
      />
      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          top: responseWidth === "md" ? "230px" : "170px",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["Home", "Services", "Experience", "Projects", "Contact"].map(
              (text) => (
                <Link href={`#${text}`} underline="hover" key={text}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily:
                        locale === "en"
                          ? "poppins !important"
                          : "cario !important",
                      fontWeight: "300",
                      fontSize: responseWidth === "md" ? "18px" : "12px",
                    }}
                  >
                    {t(text)}
                  </Typography>
                </Link>
              )
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Poppins",
              fontWeight: "300",
              fontSize: responseWidth === "md" ? "19px" : "14px",
            }}
          >
            © 2024 Ahmed Barkhed Protofile, All Right Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
