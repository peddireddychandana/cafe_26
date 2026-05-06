import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

const ZOMATO = "https://www.zomato.com/proddatur/cafe-26-proddatur-locality/order";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between ${scrolled ? "glass rounded-full mx-4 md:mx-auto" : ""}`}>
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg md:text-xl">
          <span className="grid place-items-center w-9 h-9 rounded-full text-primary-foreground font-black" style={{ background: "var(--gradient-primary)" }}>26</span>
          <span>Cafe <span className="gradient-text">26</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["menu","popular","gallery","about","contact"].map(s => (
            <a key={s} href={`#${s}`} className="capitalize text-muted-foreground hover:text-foreground transition">{s}</a>
          ))}
        </nav>
        <a href={ZOMATO} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <ShoppingBag className="w-4 h-4" /> Order
        </a>
      </div>
    </header>
  );
}
