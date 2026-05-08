import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FADE_UP, STAGGER } from "@/lib/animations";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/constants/navigation";

export default function HeroSection() {
  return (
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
            <div className="rounded-full bg-white shadow-inner overflow-hidden">
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
            Eine moderne digitale Präsenz für eine authentische italienische Küche.
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
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="mr-2 h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
