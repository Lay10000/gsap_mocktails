import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import noiseImg from '../images/noise.png';

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {
            type: "words"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: "expo.out",
                stagger: 0.02,
            })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.04,
            }, "-=1.0")
    })

    return(
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail doesnt matter <span className="text-white">- </span>
                            from a puddle to your drink
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            This is a long text about how good our cocktails are, because I need to fill up the page.
                            So, as you know we make our cocktails with water from puddles, so you get to experience that
                            local tast in full pleasure.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>5.1</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +0000001 happy customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="./images/abt1.png" alt="abt1" />
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div className="noisy">
                        <img src="./images/abt2.png" alt="abt2" />
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="./images/abt5.png" alt="abt5" />
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy">
                        <img src="./images/abt3.png" alt="abt3" />
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="noisy">
                        <img src="./images/abt4.png" alt="abt4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About