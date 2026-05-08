import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/animations";
import { SOCIAL_POSTS } from "@/constants/content";
import SocialCard from "@/components/ui/SocialCard";

export default function SocialSection() {
  return (
    <section id="social" className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
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
          {SOCIAL_POSTS.map((post, i) => (
            <SocialCard key={i} post={post} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
