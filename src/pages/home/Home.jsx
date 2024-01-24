import About from "../../components/about_us/About.jsx";
import Ads from "../../components/ads_agency/Ads.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import Logo from "../../components/logo_design/logo.jsx";
import Packages from "../../components/packages/Packages.jsx";
import Projects from "../../components/projects/Projects.jsx";


export default function Home() {
  return (
    <>
        <Header />
        <About />
        <Logo />
        <Ads />
        <Packages />
      <Projects />
    <Contact />
    <Footer />
    
    </>
  )
}
