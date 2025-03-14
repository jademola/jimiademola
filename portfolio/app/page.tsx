'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills  from "./components/Skills";
import Education from "./components/Education";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
    </>
  );
}
