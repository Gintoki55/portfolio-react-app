import { Grid, Card, CardContent, Typography, Box , CardMedia, Stack} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import link from './logos/link.svg'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useContext } from "react";

//// i18next. translate 
import { useTranslation } from "react-i18next";
/// responseValue & LanguageValue
import { LanguageContext } from "./context/context";
import { useTheme } from "@mui/material/styles";
export default function ProjectPage() {
    const { t } = useTranslation();
    const { locale } = useContext(LanguageContext);
    const direction = locale === "ar" ? "rtl" : "ltr";
    const theme = useTheme();

  function ImgMediaCard({ data }) {
    return (
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          borderRadius: "8px",
        }}
        data-aos="fade-up"
      >
        <CardMedia
          component="img"
          alt={data.title}
          height="180"
          image={data.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t(data.title)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: locale === "ar" ? "right" : "left" }}
          >
            {t(data.description)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginTop: "5px",
              direction: direction,
              textAlign: locale === "ar" ? "right" : "left",
            }}
          >
            <b>{t("Technologies Used")}:</b> {data.use}
          </Typography>
        </CardContent>
        <div className="cardActionStyle">
          <a
            href={data.githubLink}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Stack spacing={1} direction="row" paddingBottom={"5px"}>
              <img src={link} width="25px" height="25px" alt="projectImage" />
              <GitHubIcon
                sx={{ fontSize: "25px", cursor: "pointer", color: "gray" }}
              />
            </Stack>
          </a>
          <a
            href={data.link}
            style={{
              textDecoration: "none",
            }}
          >
            <Stack
              spacing={1}
              direction="row"
              sx={{ cursor: "pointer" }}
              href="google.com"
            >
              <Typography
                variant="h6"
                sx={{ color: `${theme.palette.primary.main} !important` }}
              >
                Live
              </Typography>
              <OpenInNewIcon sx={{ cursor: "pointer", color: "gray" }} />
            </Stack>
          </a>
        </div>
      </Card>
    );
  }

  const ProjectsData = [
    {
      title: "Prayer times project",
      description:
        "A responsive web application that calculates and displays the next prayer time and the remaining time until the next prayer. Designed for seamless use across all devices.",
      use: "React & Material UI",
      image: "images/prayerTime.jpeg",
      link: "https://steady-selkie-6d6d21.netlify.app",
      githubLink: "https://github.com/Gintoki55/prayerTimig-react-app",
    },
    {
      title: "Social Media Project",
      description:
        "A platform to connect users, share updates, and interact with content. Features include user profiles, news feeds, and more.",
      use: "html & css & Js & Bootstrap",
      image: "images/insta.jpeg",
      link: "https://boisterous-queijadas-8959f6.netlify.app",
      githubLink: "https://github.com/Gintoki55/final-project-advanced-js",
    },
    {
      title: "Football Academy Project",
      description:
        "An online platform dedicated to football academies, offering official sponsorships and various payment methods. It includes discounts and promotions for sponsors, providing a streamlined experience for managing academy funding.",
      use: "html & css",
      image: "images/rayaacademy.jpeg",
      link: "https://tourmaline-mandazi-28ee36.netlify.app",
      githubLink: "https://github.com/Gintoki55/raya",
    },
    {
      title: "Weather Application Project",
      description:
        "A weather application that provides real-time weather updates and forecasts. It supports both English and Arabic languages, allowing users to easily switch between languages for localized weather information.",
      use: "React & Material UI",
      image: "images/weather.jpeg",
      link: "https://cute-kleicha-14b04b.netlify.app",
      githubLink: "https://github.com/Gintoki55/weather-react-app",
    },
    {
      title: "Todo List Project",
      description:
        "A task management application featuring lists for both completed and pending tasks. Users can organize their tasks, mark them as completed, and easily track their progress.",
      image: "images/quiz.jpeg",
      use: "React & Material UI",
      link: "https://deluxe-boba-b7240a.netlify.app",
      githubLink: "https://github.com/Gintoki55/todo-react-app",
    },
    {
      title: "My Notes Project",
      description:
        "An application for managing notes with a feature to recover deleted tasks and a mobile-friendly interface for users. It includes a task list where users can organize and manage their notes efficiently.",
      use: "html & css & Js & Bootstrap",
      image: "images/test.jpeg",
      link: "https://tourmaline-monstera-ae5acc.netlify.app",
      githubLink: "https://github.com/Gintoki55/Mynotion",
    },
  ];

  return (
    <Box sx={{ position: "relative", top: "80px", paddingBottom: "20px" }}>
      <Typography
        variant="h6"
        sx={{ fontFamily: "Poppins", fontWeight: "200" }}
      >
        {t("Browser My Recent")}{" "}
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          position: "relative",
          top: "20px",
          fontFamily: locale === "en" ? "poppins" : "cario",
        }}
      >
        {t("Projects")}
      </Typography>

      <Grid container spacing={2} sx={{ position: "relative", top: "50px" }}>
        {ProjectsData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImgMediaCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


