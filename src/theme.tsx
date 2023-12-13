import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, purple, red, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
    success: {
      main: purple[500],
    },
    warning: {
      main: orange[400],
    },
  },
});

export default responsiveFontSizes(theme);
