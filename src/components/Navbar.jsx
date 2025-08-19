import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { navLinks } from "../../constants/index.js";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current, // ✅ use ref
        start: "top top", // when nav hits top of viewport
        end: "+=200", // scroll range
        scrub: true, // ✅ makes it smooth on scroll
      },
    });

    navTween.fromTo(
      navRef.current,
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
          <p className="font-semibold text-white">Crystal Pour</p>
        </a>

        <ul className="flex gap-6 text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-gray-300 transition"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
