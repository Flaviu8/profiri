import About from "../../components/about_us/About.jsx";
import Ads from "../../components/ads_agency/Ads.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Header from "../../components/header/Header.jsx";
import Logo from "../../components/logo_design/logo.jsx";
import Packages from "../../components/packages/Packages.jsx";
import Projects from "../../components/projects/Projects.jsx";
import {Helmet} from "react-helmet";


export default function Home() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Profiri- Designul vorbește de la sine</title>
                <meta name="description" content="Suntem o companie care dispune de un serviciu de logo design dedicat care are datoria să respecte cerințele și așteptările fiecărui client." />
                <meta name="keywords" content="personalizare tricouri social media ads personalizare hanorace pliante logoouri personalizate pliante personalizate brosuri logo personalizat"/>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
        <About />
        <Logo />
        <Ads />
        <Packages />
      <Projects />
    <Contact />
    
    </>
  )
}
