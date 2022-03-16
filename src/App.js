import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { light, dark } from "./styles/ThemeStyles";
import Navigation from "./components/Nav/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
