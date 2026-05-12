import { motion } from "framer-motion";
import { ChevronRight, Users, TrendingUp, Store, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FADE_UP, STAGGER } from "@/lib/animations";
import { PHONE_NUMBER } from "@/constants/navigation";

const BENEFITS = [
  {
    icon: Users,
    title: "Mehr Kunden",
    desc: "Erreichen Sie tausende neue Kunden in Ihrer Umgebung.",
  },
  {
    icon: TrendingUp,
    title: "Mehr Bestellungen",
    desc: "Steigern Sie Ihre Bestellungen und Ihren Umsatz.",
  },
  {
    icon: Store,
    title: "Professionelles Profil",
    desc: "Wir erstellen und optimieren Ihr Lieferando-Profil für den besten Auftritt.",
  },
  {
    icon: HeadphonesIcon,
    title: "Rundum-Service",
    desc: "Einrichtung, Optimierung und Betreuung – alles aus einer Hand.",
  },
];

export default function LieferandoSection() {
  return (
    <section id="lieferando" className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 font-sans">
            Neu im Angebot
          </span>
          <h2 className="text-4xl md:text-6xl font-normal font-serif text-foreground mb-6 uppercase tracking-wide">
            Lieferando Business Account
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Mehr Reichweite. Mehr Bestellungen. Mehr Erfolg.
          </p>
        </motion.div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-border mb-16 max-w-5xl mx-auto"
        >
          <img
            src="/images/lieferando-banner.png"
            alt="Lieferando Business Account für Trattoria Joseppe"
            className="w-full h-auto block"
          />
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14"
        >
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all group text-center"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-xl inline-flex mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-base font-sans mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center"
        >
          <p className="text-muted-foreground font-sans mb-6 text-lg">
            Wir richten Ihren professionellen Lieferando-Account ein und optimieren Ihr Profil,
            damit Sie <span className="text-primary font-semibold">mehr Kunden erreichen</span> und
            Ihren <span className="text-primary font-semibold">Umsatz steigern</span>.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full text-base px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <a href="https://www.lieferando.de/en/partner/signup/" target="_blank" rel="noopener noreferrer">
              Lassen Sie uns loslegen!
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
