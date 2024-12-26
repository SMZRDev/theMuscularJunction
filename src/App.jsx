import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-screen overflow-hidden m-0 p-0">
      <div className="bg-[url('./assets/bg-img.jpg')] bg-cover bg-center min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="m-0 p-0 max-w-screen">
        <About />
      </div>
    </div>
  );
};

export default App;
