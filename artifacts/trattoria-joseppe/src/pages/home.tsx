import { motion, type Variants } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Menu,
  Map,
  Smartphone,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Trattoria Joseppe Logo"
              className="h-20 w-20 object-contain drop-shadow-sm"
            />
          </div>
          <Button
            asChild
            className="rounded-full shadow-md bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6"
          >
            <a href="tel:052811602020">
              <Phone className="mr-2 h-4 w-4" />
              Anrufen & bestellen
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <img
            src="/images/hero-pizza.png"
            alt="Authentic Neapolitan Pizza"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="rounded-full p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl inline-block">
              <div className="rounded-full bg-white p-2 shadow-inner">
                <img
                  src="/images/logo.png"
                  alt="Trattoria Joseppe Logo"
                  className="h-44 w-44 md:h-56 md:w-56 object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={FADE_UP}
              className="text-5xl md:text-7xl lg:text-8xl font-normal font-serif text-white mb-6 leading-tight drop-shadow-lg uppercase tracking-wide"
            >
              Trattoria Joseppe <br />
              <span className="text-primary font-signature normal-case tracking-normal">
                neu erleben
              </span>
            </motion.h1>
            <motion.p
              variants={FADE_UP}
              className="text-lg md:text-2xl text-white/85 font-sans font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Eine moderne digitale Präsenz für eine authentische italienische
              Küche.
            </motion.p>
            <motion.div
              variants={FADE_UP}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full text-base px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-full sm:w-auto"
              >
                <a href="tel:052811602020">
                  <Phone className="mr-2 h-5 w-5" />
                  05281 160 2020
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Redesign */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP}
            >
              <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 font-sans">
                Markenidentität
              </span>
              <h2 className="text-4xl md:text-6xl font-normal font-serif text-foreground mb-6 uppercase tracking-wide">
                Das neue Gesicht der Trattoria
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-sans">
                Ein moderneres Logo, klarere Farben und ein professioneller
                Auftritt für mehr Vertrauen. Die neue Identität bewahrt die
                Tradition, präsentiert sie aber im besten Licht.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-1.5 w-14 bg-primary rounded-full"></div>
                <div className="h-1.5 w-5 bg-[#D13B2A] rounded-full"></div>
                <div className="h-1.5 w-5 bg-[#3A6B35] rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img
                src="/images/beforeafter.png"
                alt="Logo Vorher Nachher"
                className="w-full h-auto"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Vorher
              </div>
              <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                Nachher
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Offer */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
              <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 font-sans">
              Digitaler Auftritt
            </span>
            <h2 className="text-4xl md:text-6xl font-normal font-serif text-foreground mb-6 uppercase tracking-wide">
              Neue Website für Trattoria Joseppe
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Alles, was Ihre Kunden suchen, elegant verpackt und jederzeit
              griffbereit.
            </p>
          </motion.div>

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {[
              { title: "Moderne Startseite", icon: Image },
              { title: "Speisekarte online", icon: Menu },
              { title: "Öffnungszeiten", icon: Clock },
              { title: "Adresse & Kontakt", icon: MapPin },
              { title: "Mobile optimiert", icon: Smartphone },
              { title: "Google Maps Integration", icon: Map },
              { title: "Schneller Bestellkontakt", icon: Phone },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={FADE_UP}
                className="bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all group flex items-start gap-4"
              >
                <div className="bg-muted/70 text-secondary p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base leading-snug font-sans">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
              <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 font-sans">
              Online-Präsenz
            </span>
            <h2 className="text-4xl md:text-6xl font-normal font-serif mb-6 text-white uppercase tracking-wide">
              Social Media Posts
            </h2>
            <p className="text-lg text-white/60 font-sans">
              Einheitliche Kommunikation auf allen Kanälen, die Hunger macht.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {/* Post 1 - Pizza */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-9 w-9 rounded-full overflow-hidden border border-border">
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-none font-sans">trattoria.joseppe</p>
                  <p className="text-xs text-gray-400 mt-0.5">Lügde, Deutschland</p>
                </div>
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src="/images/pizza.png" alt="Pizza" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold mr-1 font-sans">trattoria.joseppe</span>
                  Pizza gemacht für Genussmomente. 🍕✨
                </p>
              </div>
            </motion.div>

            {/* Post 2 - Pasta */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-9 w-9 rounded-full overflow-hidden border border-border">
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-none font-sans">trattoria.joseppe</p>
                  <p className="text-xs text-gray-400 mt-0.5">Lügde, Deutschland</p>
                </div>
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src="/images/pasta.png" alt="Fresh Pasta" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold mr-1 font-sans">trattoria.joseppe</span>
                  Frisch. Heiß. Italienisch. 🍝 Jetzt bestellen — 052811602020
                </p>
              </div>
            </motion.div>

            {/* Post 3 - Salat */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-9 w-9 rounded-full overflow-hidden border border-border">
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-none font-sans">trattoria.joseppe</p>
                  <p className="text-xs text-gray-400 mt-0.5">Lügde, Deutschland</p>
                </div>
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src="/images/salat.png" alt="Salat" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold mr-1 font-sans">trattoria.joseppe</span>
                  Ein guter Abend beginnt mit gutem Essen. Besuchen Sie uns in der Mittlere Str. 41, 32676 Lügde. 🍷
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#D13B2A]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-border p-8 md:p-14">
            <div className="text-center mb-12">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-28 w-28 mx-auto mb-6 drop-shadow"
              />
              <h2 className="text-4xl font-normal font-serif uppercase tracking-wide">
                Besuchen Sie uns
              </h2>
              <p className="text-muted-foreground mt-2 font-sans">
                Wir freuen uns auf Sie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-sans">Adresse</h3>
                <p className="text-muted-foreground font-sans">
                  Mittlere Str. 41
                  <br />
                  32676 Lügde
                </p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-sans">Öffnungszeiten</h3>
                <p className="text-muted-foreground font-sans">
                  Täglich 11–15 & 17–22 Uhr
                  <br />
                  <span className="text-[#D13B2A] font-semibold">
                    Dienstag geschlossen
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-sans">Kontakt</h3>
                <p className="text-muted-foreground mb-4 font-sans">05281 160 2020</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="tel:052811602020">Jetzt anrufen</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 font-sans">
              Unser Angebot
            </span>
            <h2 className="text-4xl md:text-6xl font-normal font-serif text-white mb-6 uppercase tracking-wide">
              Für Trattoria Joseppe
            </h2>
            <p className="text-lg text-white/70 mb-12 font-sans">
              Wir helfen Trattoria Joseppe, online professioneller, moderner und
              vertrauenswürdiger aufzutreten.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
              {[
                {
                  title: "Neues Branding",
                  desc: "Professionelles Logo & Farben",
                },
                {
                  title: "Moderne Website",
                  desc: "Alle Infos für Ihre Kunden",
                },
                {
                  title: "Social Media Posts",
                  desc: "Vorlagen für Instagram & Co.",
                },
              ].map((offer, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2 font-sans">
                    {offer.title}
                  </h3>
                  <p className="text-white/60 text-sm font-sans">{offer.desc}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full text-base px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
            >
              Kostenlose Demo ansehen
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-8 w-8 object-contain opacity-60"
          />
          <span className="font-sans">Trattoria Joseppe</span>
        </div>
        <p className="font-sans">Dies ist eine Demo-Präsentation. Entworfen für Trattoria Joseppe.</p>
      </footer>
    </div>
  );
}
