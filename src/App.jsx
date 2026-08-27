import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";
import Art from "./components/art";
import Menu from "./components/menu";
import Contact from "./components/contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
//FIX FOR DIFFERNT WINDOWS SCALE RESOLUTIONS:
    useEffect(() => {
        const scale = window.devicePixelRatio; 
        
        const standardBase = 16; 
        
        if (scale > 1) {
            const targetFontSize = standardBase / scale;
            document.documentElement.style.fontSize = `${targetFontSize}px`;
        } else {
            document.documentElement.style.fontSize = "16px";
        }
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => clearTimeout(timer);
    }, []);
// --------------------------------------------

    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    );
};

export default App;
