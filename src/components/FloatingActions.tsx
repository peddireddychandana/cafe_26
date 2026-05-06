import { Phone, MessageCircle, ShoppingBag } from "lucide-react";

const ZOMATO = "https://www.zomato.com/proddatur/cafe-26-proddatur-locality/order";
const WA = "https://wa.me/919154622226?text=Hi%20I%20want%20to%20order%20from%20Cafe%2026";

export function FloatingActions() {
  return (
    <>
      <div className="fixed right-4 bottom-20 md:bottom-6 z-40 flex flex-col gap-3">
        <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid place-items-center w-14 h-14 rounded-full text-primary-foreground shadow-2xl animate-float" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="tel:+919154622226" aria-label="Call" className="grid place-items-center w-14 h-14 rounded-full text-primary-foreground shadow-2xl" style={{ background: "var(--gradient-primary)" }}>
          <Phone className="w-6 h-6" />
        </a>
      </div>
      <a href={ZOMATO} target="_blank" rel="noopener noreferrer" className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 py-4 font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
        <ShoppingBag className="w-5 h-5" /> Order Now on Zomato
      </a>
    </>
  );
}
