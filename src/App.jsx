import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <main className="flex flex-col items-center justify-start min-h-screen md:pt-18 pt-10 bg-gray-50 bg-[url('/bg-mobile-light.jpg')] md:bg-[url('/bg-desktop-light.jpg')] dark:bg-[url('/bg-mobile-dark.jpg')] dark:md:bg-[url('/bg-desktop-dark.jpg')] dark:bg-navy-950 bg-no-repeat bg-contain">
        <Container />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
