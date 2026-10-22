import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

const App = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <ThemeProvider>
      <main
        className="app-background flex flex-col items-center justify-start min-h-screen md:pt-18 pt-10 bg-gray-50 dark:bg-navy-950 bg-no-repeat bg-contain"
        style={{
          "--bg-mobile-light": `url("${baseUrl}bg-mobile-light.jpg")`,
          "--bg-desktop-light": `url("${baseUrl}bg-desktop-light.jpg")`,
          "--bg-mobile-dark": `url("${baseUrl}bg-mobile-dark.jpg")`,
          "--bg-desktop-dark": `url("${baseUrl}bg-desktop-dark.jpg")`,
        }}
      >
        <Container />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
