import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FADE_UP } from "@/lib/animations";
import { OFFERS } from "@/constants/content";

export default function OfferSection() {
  return (
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
            {OFFERS.map((offer, i) => (
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
  );
}
