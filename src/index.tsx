import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    // Personnalisez votre thème ici
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
