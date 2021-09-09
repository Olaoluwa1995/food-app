import "./App.css";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import { customTheme } from "./styles/theme";
import HomePage from "./pages/home/home";
import SignUpPage from "./pages/signup/signup";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
