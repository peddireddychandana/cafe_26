import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "@/assets/hero-food.jpg";
import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";
import drinks from "@/assets/drinks.jpg";
import { ShoppingBag, MessageCircle } from "lucide-react";

const ZOMATO = "https://www.zomato.com/proddatur/cafe-26-proddatur-locality/order";
const WA = "https://wa.me/919154622226?text=Hi%20I%20want%20to%20order%20from%20Cafe%2026";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", { y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: "power4.out" });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power3.out" });
      gsap.from(".float-food", { y: -200, opacity: 0, duration: 1.2, delay: 0.3, stagger: 0.2, ease: "bounce.out" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <img src={burger} alt="" aria-hidden className="float-food animate-float-slow absolute top-24 left-[6%] w-24 md:w-36 rounded-2xl shadow-2xl rotate-[-8deg] hidden sm:block" />
      <img src={pizza} alt="" aria-hidden className="float-food animate-float absolute top-32 right-[6%] w-28 md:w-40 rounded-2xl shadow-2xl rotate-[10deg] hidden sm:block" />
      <img src={drinks} alt="" aria-hidden className="float-food animate-float-slow absolute bottom-24 left-[10%] w-20 md:w-28 rounded-2xl shadow-2xl rotate-[6deg] hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="hero-line inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-xs uppercase tracking-[0.25em]">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Proddatur, Andhra Pradesh
        </div>
        <h1 className="hero-line text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
          Cafe 26<br />
          <span className="gradient-text">Street Food</span>
        </h1>
        <p className="hero-line text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Wood-fired pizzas, juicy burgers, steamy momos & creamy pastas — premium street flavors served fresh.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={ZOMATO}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-primary-foreground glow-primary transition hover:scale-[1.04]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <ShoppingBag className="w-5 h-5" /> Order on Zomato
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold glass hover:bg-primary/15 transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href="#menu" className="hero-cta inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold glass hover:bg-primary/15 transition">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
