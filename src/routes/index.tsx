import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { MenuSection } from "@/components/MenuSection";
import { Popular } from "@/components/Popular";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cafe 26 Street Food — Premium Street Food in Proddatur" },
      { name: "description", content: "Wood-fired pizzas, juicy burgers, steamy momos & creamy pastas. Order online from Cafe 26 Street Food, Proddatur." },
      { property: "og:title", content: "Cafe 26 Street Food — Proddatur" },
      { property: "og:description", content: "Premium street food experience. Order on Zomato or WhatsApp." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <Popular />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
