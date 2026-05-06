import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";
import momos from "@/assets/momos.jpg";
import pasta from "@/assets/pasta.jpg";
import drinks from "@/assets/drinks.jpg";
import fries from "@/assets/fries.jpg";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const imgs = [burger, pizza, momos, pasta, drinks, fries];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".g-img"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
  }, []);
  return (
    <section id="gallery" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Gallery</p>
          <h2 className="text-4xl md:text-6xl font-bold">From our <span className="gradient-text">kitchen</span></h2>
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <button key={i} onClick={() => setOpen(src)} className="g-img relative overflow-hidden rounded-2xl aspect-square group">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md grid place-items-center p-4 animate-fade-in">
          <button className="absolute top-6 right-6 grid place-items-center w-12 h-12 rounded-full glass">
            <X />
          </button>
          <img src={open} alt="" className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}
