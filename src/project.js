import Container from "@mui/material/Container";
import { Box } from "@mui/material";

// Pages
import Home from "./home";
import Services from "./servicesPage";
import Experience from "./skillsPage";
import ProjectsPage from "./projectsPage";
import Contact from "./contactPage";
import Bar from "./appBar";
import AnchorTemporaryDrawer from "./drawer";

// icons & floating icons component
import FloatingActionButtons from "./floatingIcon";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { useContext } from "react";
import { responseWidthContext } from "./context/responseContext";
import { useTheme } from "@mui/material/styles";
export default function ProjectManager() {
      const { responseWidth } = useContext(responseWidthContext);
      const theme = useTheme();
      
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ minHeight: "100vh", padding: "0px" }}
        id="Home"
      >
        <Bar />
        <AnchorTemporaryDrawer />
        <Home />
      </Container>

      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          position: responseWidth === "md" ? "absolute" : "static",
          right: "140px",
          color: theme.palette.primary.main,
        }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "40px" }} />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
        id="Services"
      >
        <Services />
      </Container>

      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          position: responseWidth === "md" ? "absolute" : "static",
          right: "140px",
          color: theme.palette.primary.main,
        }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "40px" }} />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
        id="Experience"
      >
        <Experience />
      </Container>

      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          position: responseWidth === "md" ? "absolute" : "relative",
          right: responseWidth === "md" ? "140px" : "0px",
          top: responseWidth === "md" ? "none" : "40px",
          color: theme.palette.primary.main,
        }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "40px" }} />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
        id="Projects"
      >
        <ProjectsPage />
      </Container>
      <Box
        sx={{
          textAlign: "center",
          margin: "20px 0",
          position: "relative",
          top: "90px",
          color: theme.palette.primary.main,
        }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "40px" }} />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
        id="Contact"
      >
        <Contact />
      </Container>

      <FloatingActionButtons />
    </div>
  );
}
