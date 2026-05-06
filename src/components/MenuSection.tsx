import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menu, categories, type MenuItem } from "@/data/menu";
import { MenuModal, VegBadge } from "./MenuModal";

gsap.registerPlugin(ScrollTrigger);

export function MenuSection() {
  const [active, setActive] = useState<(typeof categories)[number] | "All">("All");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const items = active === "All" ? menu : menu.filter((m) => m.category === active);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".menu-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      }
    );
  }, [active]);

  return (
    <section id="menu" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Menu</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Crafted <span className="gradient-text">street food</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tap any dish to explore ingredients & order in seconds.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? "text-primary-foreground glow-primary"
                  : "glass hover:bg-primary/15"
              }`}
              style={active === c ? { background: "var(--gradient-primary)" } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="menu-card text-left glass rounded-2xl overflow-hidden card-hover group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {item.label && (
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {item.label}
                  </span>
                )}
                <div className="absolute top-3 right-3">
                  <VegBadge veg={item.veg} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                  <span className="font-bold text-xl gradient-text">{item.price}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
