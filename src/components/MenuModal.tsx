import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { MenuItem } from "@/data/menu";
import { X, Phone, MessageCircle, ShoppingBag, Copy, Check } from "lucide-react";

const ZOMATO = "https://www.zomato.com/proddatur/cafe-26-proddatur-locality/order";

export function MenuModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!item) return;
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    tl.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    );
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;
  const waMsg = `Hi, I want to order ${item.name} from Cafe 26 Street Food`;
  const waLink = `https://wa.me/919154622226?text=${encodeURIComponent(waMsg)}`;

  const copy = async () => {
    await navigator.clipboard.writeText(waMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        className="glass relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid place-items-center w-10 h-10 rounded-full glass hover:bg-primary/20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-72 md:h-96 overflow-hidden rounded-t-3xl">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" width={1024} height={768} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <VegBadge veg={item.veg} />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.category}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">{item.name}</h3>
            </div>
            <div className="text-3xl md:text-4xl font-extrabold gradient-text">{item.price}</div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing) => (
                <span key={ing} className="px-3 py-1.5 rounded-full text-sm glass">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4 flex items-center justify-between gap-3">
            <p className="text-sm md:text-base text-foreground/90 italic">"{waMsg}"</p>
            <button onClick={copy} className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-primary/15 hover:bg-primary/25 transition">
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href={ZOMATO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-primary-foreground glow-primary transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <ShoppingBag className="w-5 h-5" /> Order on Zomato
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass hover:bg-primary/15 transition"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a
              href="tel:+919154622226"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass hover:bg-primary/15 transition"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
      style={{
        color: veg ? "var(--veg)" : "var(--nonveg)",
        border: `1px solid ${veg ? "var(--veg)" : "var(--nonveg)"}`,
        background: "oklch(0 0 0 / 0.3)",
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: veg ? "var(--veg)" : "var(--nonveg)" }}
      />
      {veg ? "Veg" : "Non-Veg"}
    </span>
  );
}
