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
    <div id="about" ref={sectionRef}>
      <div className="mb-16 md:px-0 px-5">
        <div className="content grid grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2 ref={headingRef}>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content md:col-span-4 flex flex-col justify-between">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top grid */}
      <div className="top-grid grid grid-cols-12 gap-6 mb-10">
        <div className="md:col-span-3 relative">
          <div className="noisy absolute inset-0" />
          <img src="/images/abt1.png" alt="grid-img-1" className="w-full" />
        </div>

        <div className="md:col-span-6 relative">
          <div className="noisy absolute inset-0" />
          <img src="/images/abt2.png" alt="grid-img-2" className="w-full" />
        </div>

        <div className="md:col-span-3 relative">
          <div className="noisy absolute inset-0" />
          <img src="/images/abt5.png" alt="grid-img-5" className="w-full" />
        </div>
      </div>

      {/* Bottom grid */}
      <div className="bottom-grid grid grid-cols-12 gap-6">
        <div className="md:col-span-8 relative">
          <div className="noisy absolute inset-0" />
          <img src="/images/abt3.png" alt="grid-img-3" className="w-full" />
        </div>

        <div className="md:col-span-4 relative">
          <div className="noisy absolute inset-0" />
          <img src="/images/abt4.png" alt="grid-img-4" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
