import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";

import { responseWidthContext } from "./context/responseContext";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";


export default function FloatingActionButtons() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { responseWidth } = useContext(responseWidthContext);
  const theme = useTheme();

  const handleScroll = () => {
    // Check if the scroll position is greater than 100px, if so, show the button, otherwise hide it.
    if (window.scrollY > 140) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const BoxWhatsIcon = styled(Box)`
      bottom: ${responseWidth === "md" ? "40px" : "30px"};
      position: fixed;
      background-color: rgb(52, 127, 52);
      left: ${responseWidth === "md" ? "40px" : "30px"};
      border-radius: 50%;
      width: ${responseWidth === "md" ? "60px" : "55px"};
      height: ${responseWidth === "md" ? "60px" : "55px"};
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: ${theme.shadows[4]};
      cursor: pointer;
      background: ${theme.palette.myColors.floatingButtonColor.primary};
      &:active {
        background: ${theme.palette.action.active};
      }
  `;

    function WhatsIcon() {
    return (
      <BoxWhatsIcon
        id="whatsapp-icon"
        sx={{lineHeight:"1"}}
      >
        <Link
          href="https://api.whatsapp.com/send/?phone=96899149747&text&type=phone_number&app_absent=0"
          sx={{ color: theme.palette.myColors.floatingButtonColor.secondary }}
        >
          <WhatsAppIcon
            sx={{ fontSize: responseWidth === "md" ? "45px" : "35px" }}
          />
        </Link>
      </BoxWhatsIcon>
    );
  }

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: responseWidth === "md" ? "40px" : "30px",
          right: responseWidth === "md" ? "40px" : "30px",
          display: isButtonVisible === false ? "none" : "block",
          transition: "transform 0.2s ease, display 0.2s ease",
        }}
      >
        <Fab
          sx={{
            border: `3px solid ${theme.palette.primary.light}`,
            opacity: "0.7",
            lineHeight: "1",
            backgroundColor: "#fff",
            width: "50px",
            height: "50px",
          }}
          className="upIcon"
        >
          <Link
            href="#Home"
            underline="none"
            sx={{ color: theme.palette.primary.main }}
          >
            <UpIcon sx={{ fontSize: "2rem" }} />
          </Link>
        </Fab>
      </Box>
      <WhatsIcon />
    </>
  );
}





