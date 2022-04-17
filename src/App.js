import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/Themes";
import { Navigation, Footer, ScrollToTop } from "./components";
import {
  Home,
  About,
  Faq,
  Roadmap,
  Showcase,
  Team,
} from "./components/sections";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
