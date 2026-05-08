import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/animations";

export default function BrandSection() {
  return (
    <section id="marke" className="py-24 bg-background">
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
              Ein moderneres Logo, klarere Farben und ein professioneller Auftritt
              für mehr Vertrauen. Die neue Identität bewahrt die Tradition,
              präsentiert sie aber im besten Licht.
            </p>
            <div className="flex gap-3 items-center">
              <div className="h-1.5 w-14 bg-primary rounded-full" />
              <div className="h-1.5 w-5 bg-[#D13B2A] rounded-full" />
              <div className="h-1.5 w-5 bg-[#3A6B35] rounded-full" />
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
  );
}
