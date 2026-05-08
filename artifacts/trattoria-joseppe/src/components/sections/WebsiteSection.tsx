import { motion } from "framer-motion";
import { FADE_UP, STAGGER } from "@/lib/animations";
import { FEATURES } from "@/constants/content";

export default function WebsiteSection() {
  return (
    <section id="website" className="py-24 bg-[#FAFAF8]">
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
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all group flex items-center gap-4"
            >
              <div className="bg-muted/70 text-secondary p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base leading-snug font-sans">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
