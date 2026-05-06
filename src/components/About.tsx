import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "@/assets/hero-food.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".about-l"),
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
    gsap.fromTo(
      ref.current.querySelector(".about-r"),
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
  }, []);
  return (
    <section id="about" ref={ref} className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="about-l text-sm uppercase tracking-[0.3em] text-primary mb-3">About us</p>
          <h2 className="about-l text-4xl md:text-5xl font-bold mb-6">A taste of <span className="gradient-text">premium</span> street food</h2>
          <p className="about-l text-muted-foreground text-lg leading-relaxed mb-4">
            Cafe 26 is a premium street food cafe in Proddatur offering delicious pizzas, burgers, sandwiches, pasta, and beverages with quality ingredients at affordable prices.
          </p>
          <p className="about-l text-muted-foreground leading-relaxed">
            Every dish is hand-crafted, made-to-order and finished with our signature sauces — bringing big-city flavor to your neighborhood.
          </p>
        </div>
        <div className="about-r relative rounded-3xl overflow-hidden aspect-[4/5] glass">
          <img src={hero} alt="Cafe 26 food spread" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
