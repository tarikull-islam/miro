import { useEffect } from "react";
import "./scss/index.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./section/home/Home";
import TrustedUser from "./section/trustedUser/TrustedUser";
import Collaborate from "./section/Collaborate/Collaborate";
import WorkToGether from "./section/workToGether/WorkToGether";
import ContactTools from "./section/contactTools/ContactTools";
import TrustMiro from "./section/trustMiro/TrustMiro";
import BestTeams from "./section/bestTeams/BestTeams";
import JoinUser from "./section/joinUser/JoinUser";
import WeWork from "./section/weWork/WeWork";
import ScrollReveal from "scrollreveal";
const App = () => {
  useEffect(() => {
    const registerAnimation = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 600,
        reset: false,
      });
      sr.reveal(
        `
        #home, #trusted-user, #collaborate ,#work-to-gether , #contact-tools ,#we-work,trust-miro , #best-teams , #join-user
        `
      );
    };
    registerAnimation();
  }, []);
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <TrustedUser />
        <Collaborate />
        <WorkToGether />
        <ContactTools />
        <WeWork />
        <TrustMiro />
        <BestTeams />
        <JoinUser />
      </main>
      <Footer />
    </>
  );
};

export default App;
