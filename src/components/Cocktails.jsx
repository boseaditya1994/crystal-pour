import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cocktailLists, mockTailLists } from "../../constants/index.js";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  const leftLeafRef = useRef(null);
  const rightLeafRef = useRef(null);

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 70%", // when section enters viewport
        end: "bottom 30%", // smoother parallax range
        scrub: true,
      },
    });

    parallaxTimeline
      .from(leftLeafRef.current, {
        x: -100,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      })
      .from(
        rightLeafRef.current,
        {
          x: 100,
          y: 100,
          opacity: 0,
          ease: "power2.out",
        },
        "<" // sync both animations
      );
  }, []);

  return (
    <section id="cocktails" className="noisy relative">
      <img
        ref={leftLeafRef}
        src="/images/cocktail-left-leaf.png"
        alt="left leaf"
        className="absolute left-0 top-10 w-40"
      />
      <img
        ref={rightLeafRef}
        src="/images/cocktail-right-leaf.png"
        alt="right leaf"
        className="absolute right-0 top-10 w-40"
      />

      <div className="list mt-20">
        {/* Popular Cocktails */}
        <div className="popular mb-16">
          <h2 className="text-2xl font-bold mb-6">Most popular cocktails:</h2>
          <ul className="space-y-6">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex justify-between items-start border-b pb-3"
              >
                <div className="md:me-28">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-gray-400">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-gray-300">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Loved Mocktails */}
        <div className="loved">
          <h2 className="text-2xl font-bold mb-6">Most loved mocktails:</h2>
          <ul className="space-y-6">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex justify-between items-start border-b pb-3"
              >
                <div className="me-28">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-gray-400">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-gray-300">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
