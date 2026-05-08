import { motion, type Variants } from "framer-motion";
import { Phone, MapPin, Clock, CheckCircle2, ChevronRight, Menu, Map, Smartphone, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoPath from "@assets/image_1778261156672.png";
import beforeAfterPath from "@assets/image_1778260850744.png";
import pizzaPosterPath from "@assets/image_1778260859445.png";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Trattoria Joseppe Logo" className="h-12 w-12 object-contain" />
            <span className="font-serif font-semibold text-xl tracking-tight hidden sm:inline-block">
              Trattoria Joseppe
            </span>
          </div>
          <Button asChild className="rounded-full shadow-md bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="tel:052811602020">
              <Phone className="mr-2 h-4 w-4" />
              Anrufen & bestellen
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-foreground/60 z-10" />
          <img 
            src="/images/hero-pizza.png" 
            alt="Authentic Neapolitan Pizza" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="bg-background p-3 rounded-full inline-block shadow-2xl">
              <img src={logoPath} alt="Trattoria Joseppe Logo" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
            </div>
          </motion.div>
          
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight">
              Trattoria Joseppe <br/><span className="text-primary italic">neu erleben</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Eine moderne digitale Präsenz für eine authentische italienische Küche.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-full sm:w-auto">
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Das neue Gesicht der Trattoria
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ein moderneres Logo, klarere Farben und ein professioneller Auftritt für mehr Vertrauen. Die neue Identität bewahrt die Tradition, präsentiert sie aber im besten Licht.
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <div className="h-1 w-4 bg-[#D13B2A] rounded-full"></div>
                <div className="h-1 w-4 bg-[#3A6B35] rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img src={beforeAfterPath} alt="Logo Vorher Nachher" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Neue Website für Trattoria Joseppe
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles, was Ihre Kunden suchen, elegant verpackt und jederzeit griffbereit.
            </p>
          </motion.div>

          <motion.div 
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group flex items-start gap-4"
              >
                <div className="bg-muted text-secondary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Social Media Posts
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Einheitliche Kommunikation auf allen Kanälen, die Hunger macht.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Post 1 - Poster */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-background border">
                  <img src={logoPath} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-semibold text-sm">trattoria.joseppe</span>
              </div>
              <div className="aspect-square bg-secondary relative">
                <img src={pizzaPosterPath} alt="Pizza Poster" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm">
                  <span className="font-semibold mr-2">trattoria.joseppe</span>
                  PIZZA GEMACHT FÜR Genussmomente. 🍕✨
                </p>
              </div>
            </motion.div>

            {/* Post 2 - Pasta */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-background border">
                  <img src={logoPath} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-semibold text-sm">trattoria.joseppe</span>
              </div>
              <div className="aspect-square relative">
                <img src="/images/social-pasta.png" alt="Fresh Pasta" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm">
                  <span className="font-semibold mr-2">trattoria.joseppe</span>
                  Frisch. Heiß. Italienisch. 🍝 Jetzt bestellen — 052811602020
                </p>
              </div>
            </motion.div>

            {/* Post 3 - Bruschetta */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl md:mt-8"
            >
              <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-background border">
                  <img src={logoPath} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-semibold text-sm">trattoria.joseppe</span>
              </div>
              <div className="aspect-square relative">
                <img src="/images/social-bruschetta.png" alt="Bruschetta" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white text-black">
                <p className="text-sm">
                  <span className="font-semibold mr-2">trattoria.joseppe</span>
                  Ein guter Abend beginnt mit gutem Essen. Wir freuen uns auf Ihren Besuch in der Mittlere Str. 41, 32676 Lügde. 🍷
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#D13B2A]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
            <div className="text-center mb-10">
              <img src={logoPath} alt="Logo" className="h-20 w-20 mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold">Besuchen Sie uns</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="flex flex-col items-center p-4">
                <div className="bg-muted p-4 rounded-full mb-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                <p className="text-muted-foreground">Mittlere Str. 41<br/>32676 Lügde</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="bg-muted p-4 rounded-full mb-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Öffnungszeiten</h3>
                <p className="text-muted-foreground">Täglich 11–15 Uhr und 17–22 Uhr<br/><span className="text-[#D13B2A] font-medium">Dienstag geschlossen</span></p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="bg-muted p-4 rounded-full mb-4 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Kontakt</h3>
                <p className="text-muted-foreground mb-4">05281 160 2020</p>
                <Button asChild variant="outline" className="rounded-full w-full">
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Unser Angebot für Trattoria Joseppe
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-12">
              Wir helfen Trattoria Joseppe, online professioneller, moderner und vertrauenswürdiger aufzutreten.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
              {[
                { title: "Neues Branding", desc: "Professionelles Logo & Farben" },
                { title: "Moderne Website", desc: "Alle Infos für Ihre Kunden" },
                { title: "Social Media Posts", desc: "Vorlagen für Instagram & Co." }
              ].map((offer, i) => (
                <div key={i} className="bg-secondary-foreground/5 p-6 rounded-xl border border-secondary-foreground/10">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">{offer.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{offer.desc}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl">
              Kostenlose Demo ansehen
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>Dies ist eine Demo-Präsentation. Entworfen für Trattoria Joseppe.</p>
      </footer>
    </div>
  );
}
