import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  );
};

export default App;
