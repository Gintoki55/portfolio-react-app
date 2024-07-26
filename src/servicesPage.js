import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import {AccessAlarm, Code, DesktopMac, Palette} from "@mui/icons-material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CloudIcon from "@mui/icons-material/Cloud";
import { useContext } from "react";

//// i18next. translate
import { useTranslation } from "react-i18next";
/// responseValue & LanguageValue
import { LanguageContext } from "./context/context";
import { responseWidthContext } from "./context/responseContext";
import { useTheme } from "@mui/material/styles";
const Services = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LanguageContext);
  const direction = locale === "ar" ? "rtl" : "ltr";
  const { responseWidth } = useContext(responseWidthContext);
  const fontSize = responseWidth === "md" ? "20px" : "16px";
  const theme = useTheme();

  const services = [
    {
      icon: <AccessAlarm />,
      title: "Performance Optimization",
      description:
        "Optimizing website performance to ensure fast loading times and a better user experience.",
      color: "#1E88E5",
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      description:
        "Creating intuitive, visually appealing interfaces that prioritize user experience, ensuring that your website or application is not only functional but also enjoyable to use. By focusing on design principles and user feedback, I aim to deliver interfaces that are both aesthetically pleasing and highly efficient.",
      color: "#8E24AA",
    },
    {
      icon: <Code />,
      title: "Front-End Development",
      description:
        "Developing user interfaces using HTML, CSS, and JavaScript, along with the React framework to create innovative designs and provide a smooth, responsive user experience.",
      color: "#FFC107",
    },
    {
      icon: <DesktopMac />,
      title: "Responsive Web Design",
      description:
        "Designing responsive websites using Bootstrap and Material-UI to ensure an optimal user experience across various devices.",
      color: theme.palette.text.primary,
    },
    {
      icon: <AccountTreeIcon />,
      title: "Version Control with Git and GitHub",
      description:
        "Managing code using Git and GitHub to ensure effective collaboration and code review.",
      color: "#3F51B5",
    },
    {
      icon: <CloudIcon />,
      title: "API Integration",
      description:
        "Integrating websites with APIs to display dynamic data and enhance interactivity.",
      color: "#26C6DA",
    },
  ];

  return (
    <Box sx={{ position: "relative", top: "80px", paddingBottom: "20px" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontFamily: "Poppins", fontWeight: "200" }}
      >
        {t("Explore my")}{" "}
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontFamily: locale === "en" ? "poppins" : "cario" }}
      >
        {t("Services")}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontFamily: "Poppins", fontSize: fontSize, fontWeight: "200" }}
      >
        {t(
          "Browse our diverse services offered to clients, including creative design, web development, and technology consulting."
        )}
      </Typography>
      <Grid container spacing={3} sx={{ position: "relative", top: "20px" }}>
        {services.map((service, index) => (
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            key={index}
            sx={{ margin: { xs: "0 auto" } }}
            data-aos="fade-up"
          >
            <Card
              sx={{
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item sx={{ color: service.color }}>
                    {service.icon}
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{t(service.title)}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ direction: direction }}
                    >
                      {t(service.description)}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
