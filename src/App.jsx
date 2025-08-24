import { useState } from "react";
import profile from "./data/Profile";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React from "react";

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark min-h-screen bg-zinc-950 text-gray-100" : "min-h-screen bg-white text-gray-900"}>
      <Navbar profile={profile} toggleDark={() => setDark(!dark)} dark={dark} />
      <Hero profile={profile} />
      <main>
        <About profile={profile.about} />
        <Skills skills={profile.skills} />
        <Experience items={profile.experience} />
        <Projects items={profile.projects} />
        <Education items={profile.education} />
        <Contact profile={profile} />
      </main>
      <Footer/>
    </div>
  );
}
