import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CSSReset, ChakraProvider, theme, Switch } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        {/* <Route exact path='/' component={} />
       <Route exact path='/sign-up' component={} /> */}
      </Switch>
    </ChakraProvider>
  );
}

export default App;
