
import RegisterForm from "./components/2-GridTextFields/GridTextFields";
import { createTheme,ThemeProvider } from "@mui/material";
import MyTheme from "./components/3-customTheme/themes";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    },
    secondary: {
      main: '#0074D9', 
    },
    success: {
      main: '#2ECC40', 
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MyButtonComponent/>        */}
      <RegisterForm />
      <MyTheme />
    </ThemeProvider>
  );
}
