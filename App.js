import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import TeamSection from "./components/TeamSection";

import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { infoObjOne } from "./components/InfoSection/InfoData";
import { infoObjTwo } from "./components/InfoSection/InfoData";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <InfoSection {...infoObjOne} />
      <InfoSection {...infoObjTwo} />
      <TeamSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
