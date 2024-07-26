import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useContext } from "react";

/// svg Icons
import git from "./logos/git.svg";
import bootstrap from "./logos/bootstrap.svg";
import css from "./logos/css.svg";
import html from "./logos/html.svg";
import js from "./logos/javascript.svg";
import react from "./logos/react.svg";

//// i18next. translate
import { useTranslation } from "react-i18next";
/// responseValue & LanguageValue
import { LanguageContext } from "./context/context";
const Experience = () => {
      const { t } = useTranslation();
      const { locale } = useContext(LanguageContext);

      const experience = [
        {
          icon: (
            <img
              src={html}
              alt="html Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
        {
          icon: (
            <img
              src={css}
              alt="css Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
        {
          icon: (
            <img src={js} alt="js Icon" style={{ width: "100%", height: "100%" }} />
          ),
        },
        {
          icon: (
            <img
              src={git}
              alt="git Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
        {
          icon: (
            <img
              src={bootstrap}
              alt="bootstrap Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },

        {
          icon: (
            <img
              src="/images/material.png"
              alt="material icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
        {
          icon: (
            <img
              src={react}
              alt="React Icon"
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
      ];

  return (
    <Box sx={{ position: "relative", top: "80px", paddingBottom: "20px" }}>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", fontWeight: "200" }}
      >
        {t("Explore my")}{" "}
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontFamily: locale === "en" ? "poppins" : "cario" }}
      >
        {t("Experience")}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: "200" }}
      >
        {t("Front-End")}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ position: "relative", top: "50px" }}
        data-aos="fade-right"
      >
        {experience.map((skills, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card
              sx={{
                width: "150px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                margin: { xs: "0 auto" },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {skills.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
