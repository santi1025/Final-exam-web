import React, { useState } from "react";
import Home from "./Components/Home";
import Donation from "./Components/Donation";
import Books from "./Components/Books";
import Header from "./Components/Header";
import Footer from "./Components/footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  
  let activeComponent;
  
  activeComponent =
    activeSection === "home" ? <Home /> :
    activeSection === "donation" ? <Donation /> :
    activeSection === "books" ? <Books /> :
    null;

  return (
    <div className="App">
      <Header active={activeSection} onNavClick={handleNavClick} />
      {activeComponent}
      <Footer />
    </div>
    
  );
}

export default App;
