import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menu, categories, type MenuItem } from "@/data/menu";
import { MenuModal, VegBadge } from "./MenuModal";
import { ShoppingBag } from "lucide-react";

const ZOMATO_BASE = "https://www.zomato.com/proddatur/cafe-26-proddatur-locality/order";
export const zomatoLinkFor = (name: string) =>
  `${ZOMATO_BASE}?utm_source=cafe26_site&utm_medium=menu_card&utm_campaign=preselect&search=${encodeURIComponent(name)}#${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`;

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
            <div
              key={item.id}
              className="menu-card relative text-left glass rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              <button
                onClick={() => setSelected(item)}
                aria-label={`View ${item.name}`}
                className="relative h-52 overflow-hidden block"
              >
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
              </button>
              <div className="p-5 flex-1 flex flex-col">
                <button onClick={() => setSelected(item)} className="text-left">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">{item.name}</h3>
                </button>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                  <span className="font-bold text-xl gradient-text">{item.price}</span>
                </div>
                <a
                  href={zomatoLinkFor(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground glow-primary transition hover:scale-[1.02]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ShoppingBag className="w-4 h-4" /> Order on Zomato
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
