'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills  from "./components/Skills";
import Education from "./components/Education";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  
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
