import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QuestionPaper from "./QuestionPaper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestResult from "./TestResult";
const theme = createTheme({
  palette: {
    primary: {
      main: "#079992",
      contrastText: "#fff",
    },
    success: {
      main: "#78e08f",
      contrastText: "#fff",
    },
    info: {
      main: "#d1ffe3",
      contrastText: "#fff",
    },
    error: {
      main: "#F91351",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <QuestionPaper /> */}
          <Routes>
            <Route path="/" element={<QuestionPaper />} />
            <Route path="/result" element={<TestResult />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
