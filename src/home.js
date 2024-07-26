import { Grid, Stack, Typography, Container,Link } from "@mui/material";
/// hook
import { useContext } from "react";
///icons
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
//// i18next. translate 
import { useTranslation } from "react-i18next";
/// responseValue & LanguageValue
import { LanguageContext } from "./context/context";
import { responseWidthContext } from "./context/responseContext";

/// styled Component Imports
import { AnimatedAvatar, ThemedButtons , TextFunction} from "./styledComponent";

export default function Home(){
  const { t } = useTranslation();
  const { locale } = useContext(LanguageContext);
  const { responseWidth } = useContext(responseWidthContext);
  // Adjust responsive styles based on responseWidth
  const topResponse = responseWidth === "md" ? "230px" : "100px";
  const imgResponse = responseWidth === "md" ? "350px" : "220px";
  const nameResponse = responseWidth === "md" ? "h3" : "h4";
  const descriptionResponse = responseWidth === "md" ? "h4" : "h5";

  const direction = locale === "ar" ? "rtl" : "ltr";
  /// styled Component
  const { ButtonPrimary, ButtonSecondary } = ThemedButtons();
  const { AnimatedText } = TextFunction();

  return (
    <>
      <Container maxWidth="lg" sx={{ height: "100vh", padding: "0px" }}>
        <Container
          maxWidth="md"
          sx={{ position: "relative", top: topResponse }}
        >
          <Grid
            container
            height={"400px"}
            sx={{
              direction: direction,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sm={6}
            >
              <AnimatedAvatar
                alt="A"
                src="/images/m13.jpeg"
                sx={{
                  width: imgResponse,
                  height: imgResponse,
                  fontSize: "90px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              sm={6}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: locale === "en" ? "poppins" : "cario" }}
                marginTop={{ xs: "40px", md: "0px" }}
              >
                {t("Hello , I'm")}
              </Typography>
              <Typography
                variant={nameResponse}
                gutterBottom
                sx={{
                  fontWeight: "medium",
                  fontFamily: locale === "en" ? "poppins" : "cario",
                }}
              >
                {t("Ahmed Barkhed")}
              </Typography>
              <AnimatedText
                variant={descriptionResponse}
                sx={{
                  fontFamily: locale === "en" ? "poppins" : "cario",
                }}
                gutterBottom
              />
              <Stack
                spacing={1}
                direction="row"
                sx={{
                  margin: "0 auto",
                  // direction: "ltr !important",
                }}
              >
                <Link
                  href="https://onedrive.live.com/download?cid=B95F558AC060C368&resid=B95F558AC060C368!127&authkey=!AHzArj5XuVpUBxA"
                  download
                >
                  <ButtonSecondary>{t("Download CV")}</ButtonSecondary>
                </Link>
                <Link href="#Contact">
                  <ButtonPrimary>{t("Contact Info")}</ButtonPrimary>
                </Link>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                marginTop="10px"
                sx={{
                  direction: "ltr !important",
                }}
              >
                <Link href="https://github.com/Gintoki55">
                  <GitHubIcon
                    sx={{
                      fontSize: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Link href="https://t.me/+96899149747">
                  <TelegramIcon
                    sx={{
                      fontSize: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}