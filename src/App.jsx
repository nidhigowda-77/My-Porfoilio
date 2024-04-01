import { About } from "./component/About";
import { Bot } from "./component/Bot";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { Hero } from "./component/Hero";
import { Hireme } from "./component/Hireme";
import { Navbar } from "./component/Navbar";
import Project from "./component/Project";
import { Skills } from "./component/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
