import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    // Split heading into words
    const titleSplit = new SplitText(headingRef.current, { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        stagger: 0.05,
      })
      .from(
        sectionRef.current.querySelectorAll(".top-grid div, .bottom-grid div"),
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.08,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div id="about" ref={sectionRef} className="px-5 md:px-0">
      <div className="mb-16">
        <div className="content grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2
              ref={headingRef}
              className="text-2xl md:text-4xl font-bold leading-snug"
            >
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content col-span-12 md:col-span-4 flex flex-col justify-between mt-4 md:mt-0">
            <p className="text-sm md:text-base mb-4">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="text-2xl md:text-3xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-xs md:text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top grid */}
      <div className="top-grid grid grid-cols-12 gap-4 md:gap-6 mb-10">
        <div className="col-span-12 md:col-span-3 relative">
          <img
            src="/images/abt1.png"
            alt="grid-img-1"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="col-span-12 md:col-span-6 relative">
          <img
            src="/images/abt2.png"
            alt="grid-img-2"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="col-span-12 md:col-span-3 relative">
          <img
            src="/images/abt5.png"
            alt="grid-img-5"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Bottom grid */}
      <div className="bottom-grid grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-8 relative">
          <img
            src="/images/abt3.png"
            alt="grid-img-3"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="col-span-12 md:col-span-4 relative">
          <img
            src="/images/abt4.png"
            alt="grid-img-4"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
