import { useContext } from "react";
import { LanguageContext } from "./context/context";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
    const { locale, changeLanguage } = useContext(LanguageContext);
    const language = locale === "ar" ? "اللغة" : "language";
    const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <Box>
      <FormControl size="small" sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">{language}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locale}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="ar">AR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
