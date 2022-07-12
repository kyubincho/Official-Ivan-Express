import { createTheme } from "@mui/material/styles";
import { common, grey } from "@mui/material/colors";

// declare module "@mui/styles/defaultTheme" {
//   interface DefaultTheme extends Theme {}
// }

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: common.black,
    },
    secondary: {
      main: grey[200],
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
