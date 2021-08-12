import "./app.css";
import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Works from "./component/works/Works";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import { useState } from "react";
import { Helmet } from "react-helmet"


function App() {
  const [hemOpen, setHemOpen] = useState(false)


  return (
    <>
      <div>
        <Helmet>
          <meta name="google-site-verification" content="HhY359LSS9CimD2Q8x1jCve7xGLTsGY6HargVr5yJwM" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>React portfolio website !!</title>
        </Helmet>
        <div className="app scrollbar-hidden">

          <Topbar hemOpen={hemOpen} setHemOpen={setHemOpen} />
          <Menu hemOpen={hemOpen} setHemOpen={setHemOpen} />

          <div className="sections scrollbar-hidden">
            <Intro />
            <Portfolio />
            <Works />
            <Testimonials />
            <Contact />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
