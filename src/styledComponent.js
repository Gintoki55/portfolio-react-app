import { Avatar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "./context/context";
import { useContext } from "react";
///// Avatar Photo Home Page
export const sliderLeft = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);  
    opacity: 1;
  }
`;
/// app bar animation  
export const sliderTop = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);  
    opacity: 1;
  }
`;

const AnimatedAvatar = styled(Avatar)`
  animation: ${sliderLeft} 1s ease forwards;
`;

////// buttons PageHome
const BaseButton = styled.button`
  border: none;
  padding: 15px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.2s ease;
  font-weight: bold;
  transform: scale(0.9);
`;

function ThemedButtons() {
  const theme = useTheme();

  const ButtonPrimary = styled(BaseButton)`
    background-color: ${theme.palette.primary.dark};
    color: white;
    border: 2px solid ${theme.palette.primary.dark};

    &:hover {
      transform: scale(1);
    }
  `;

  const ButtonSecondary = styled(BaseButton)`
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
    border: 2px solid ${theme.palette.text.primary};

    &:hover {
      background-color: black;
      color: white;
      transform: scale(1);
    }
  `;

  return { ButtonPrimary, ButtonSecondary };
}

///// text transltion 



 const wordsEn = keyframes`
        0%, 20% {
            content: "Fronted Developer";
        }
        21%, 40% {
            content: "Programming";
        }
        41%, 60% {
            content: "Freelancer";
        }
        61%, 80% {
            content: "UI/UX Designer";
        }
        81%, 100% {
            content: "Web Developer";
        }
        `;
const wordsAr = keyframes`
        0%, 20% {
            content: "مطور واجهات أمامية";
        }
        21%, 40% {
            content: "مبرمج";
        }
        41%, 60% {
            content: "مستقل";
        }
        61%, 80% {
            content: "مصمم جرافيكي";
        }
        81%, 100% {
            content: "مطور مواقع";
        }
        `;

const nameEn = "Fronted Developer";
const nameAr = "مطور واجهات أمامية";

function TextFunction (){
   const theme = useTheme()
    const { locale } = useContext(LanguageContext);
    const typing = keyframes`
${
  locale === "en"
    ? `  10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
    width: 0;
    }
    5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
        width: calc(100% + 8px);
    }`
    : `  95%, 90%, 75%, 70%, 55%, 50%, 35%, 30%, 15%, 10% {
        width: 0;
    }
    85%, 80%, 65%, 60%, 45%, 40%, 25%, 20%, 5% {
        width: calc(100% + 8px);
    }`
}

`;

    const cursor = keyframes`
    0%, 50%, 100% {
       ${
         locale === "en"
           ? `border-left: 2px solid ${theme.palette.text.primary}`
           : `border-right: 2px solid ${theme.palette.text.primary}`
       }
    }
    25%, 75% {
         ${
           locale === "en"
             ? `border-left: 2px solid transparent`
             : `border-right: 2px solid transparent`
         }
    }
    `;

    const AnimatedText = styled(Typography)`
      position: relative;
      color: ${theme.palette.primary.dark};

      &::before {
        content: "${locale === "en" ? nameEn : nameAr}";
        animation: ${locale === "en" ? wordsEn : wordsAr} 20s infinite;
      }

      &::after {
        content: "";
        position: absolute;
        width: ${locale ==="en"?` calc(100% + 8px)`:`calc(100% + 8px)`};
        height: 100%;
        background-color: ${theme.palette.background.default};
        ${locale === "en"
          ? `border-left: 2px solid ${theme.palette.text.primary}`
          : `border-right: 2px solid ${theme.palette.text.primary}`};
        ${locale === "en" ? `right` : `left`}: -8px;
        animation: ${cursor} 0.8s infinite, ${typing} 20s steps(14) infinite;
      }
    `;

    return {AnimatedText};
}

export { AnimatedAvatar, ThemedButtons, TextFunction };

