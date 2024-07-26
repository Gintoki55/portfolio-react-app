import { createContext, useState, useEffect } from "react";

export const responseWidthContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [responseWidth, setResponseWidth] = useState("md");

  const changeResponse = (value) => {
    setResponseWidth(value);
  };

          useEffect(() => {
            const handleResize = () => {
              if (window.innerWidth < 600) {
                changeResponse("xs");
              } else {
                changeResponse("md");
              }
              console.log(responseWidth)
            };

            // Initial call to set the correct width
            handleResize();

            // Add event listener for window resize
            window.addEventListener("resize", handleResize);

            // Cleanup event listener on component unmount
            return () => window.removeEventListener("resize", handleResize);
          }, [responseWidth]);
  return (
    <responseWidthContext.Provider value={{ responseWidth, changeResponse }}>
      {children}
    </responseWidthContext.Provider>
  );
};
