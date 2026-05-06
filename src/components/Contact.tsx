import { Phone, MapPin, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Visit us</p>
          <h2 className="text-4xl md:text-6xl font-bold">Come <span className="gradient-text">say hi</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 space-y-6">
            <Info icon={<MapPin className="w-5 h-5" />} title="Address" text="TB Road, Opposite Eye Hospital, Proddatur, Andhra Pradesh" />
            <a href="tel:+919154622226" className="block">
              <Info icon={<Phone className="w-5 h-5" />} title="Phone" text="+91 91546 22226" />
            </a>
            <Info icon={<Clock className="w-5 h-5" />} title="Hours" text="1:00 PM – 10:30 PM (Daily)" />
            <a href="https://www.instagram.com/cafe26_streetfood" target="_blank" rel="noopener noreferrer">
              <Info icon={<Instagram className="w-5 h-5" />} title="Instagram" text="@cafe26_streetfood" />
            </a>
          </div>
          <div className="glass rounded-3xl overflow-hidden min-h-[400px]">
            <iframe
              title="Cafe 26 location"
              src="https://www.google.com/maps?q=Cafe+26+Proddatur&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-full text-primary-foreground shrink-0" style={{ background: "var(--gradient-primary)" }}>
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
}
