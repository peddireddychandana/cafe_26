import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";
import fries from "@/assets/fries.jpg";
import momos from "@/assets/momos.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { name: "BBQ Chicken Pizza", price: "₹226", img: pizza },
  { name: "Crispy Chicken Burger", price: "₹108", img: burger },
  { name: "French Fries", price: "₹89", img: fries },
  { name: "Chicken Momos", price: "₹170", img: momos },
];

export function Popular() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".pop-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" }
      }
    );
  }, []);
  return (
    <section id="popular" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Loved by all</p>
          <h2 className="text-4xl md:text-6xl font-bold">Most <span className="gradient-text">popular</span></h2>
        </div>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(it => (
            <div key={it.name} className="pop-card glass rounded-2xl overflow-hidden card-hover">
              <div className="aspect-square overflow-hidden">
                <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{it.name}</h3>
                <p className="gradient-text font-bold">{it.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
