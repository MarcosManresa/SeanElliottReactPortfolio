// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Project";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  //handles routes/paths within the application
  //selects element based on link clicked
  return (
    <section>
      <Router>
        <Navigation />
        
        <Routes>
          {/*About component is displayed*/}
          <Route path="/"  element={<About/>}/>
          <Route path="/SeanElliottReactPortfolio"  element={<About/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </section>
  );
}

export default App;
