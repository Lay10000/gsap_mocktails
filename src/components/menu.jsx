"use client";

import { useRef, useState } from "react";
import { allCocktails } from "../../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const contentRef = useRef();
    const cocktailImgRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("next");

    useGSAP(() => {
        gsap.fromTo(".recipe", { opacity: 0 }, { opacity: 1, duration: 1 })

        const fromXPercent = slideDirection === "left" ? 100 : -100;

        gsap.fromTo(cocktailImgRef.current, { 
            opacity: 0, 
            xPercent: fromXPercent, 
        }, {
            opacity: 1, 
            xPercent: 0, 
            duration: 0.7, 
            ease: "power1.inOut"
        })
    }, [currentIndex, slideDirection]);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index, direction = "next") => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        if (newIndex === currentIndex) return;

        // Animate out the current cocktail
        const outXPercent = direction === "left" ? -100 : 100;

        gsap.to(cocktailImgRef.current, {
            opacity: 0,
            xPercent: outXPercent,
            duration: 0.5,
            ease: "power1.inOut",
            onComplete: () => {
                // Update state - this triggers the slide-in animation via useGSAP
                setSlideDirection(direction);
                setCurrentIndex(newIndex);
            }
        });

        gsap.to(".recipe", {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
        });
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails ]
    }

    const currentCocktail = getCocktailAt(0);


    return(
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">Cocktail menu</h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return(
                        <button key={cocktail.id} className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`} 
                        onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1, "left")}>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button className="text-right" onClick={() => goToSlide(currentIndex + 1, "right")}>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="cocktail">
                    <img ref={cocktailImgRef} src={currentCocktail.image} className="object-contain" />
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p id="recipe-for">Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu