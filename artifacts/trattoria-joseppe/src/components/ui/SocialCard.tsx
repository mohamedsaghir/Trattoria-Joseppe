import { motion } from "framer-motion";
import type { SocialPost } from "@/constants/content";

interface SocialCardProps {
  post: SocialPost;
  delay: number;
}

export default function SocialCard({ post, delay }: SocialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="p-3 border-b flex items-center gap-2 bg-white text-black">
        <div className="h-9 w-9 rounded-full overflow-hidden border border-border shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-sm leading-none font-sans">
            trattoria.joseppe
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Lügde, Deutschland</p>
        </div>
      </div>

      <div className="aspect-[4/5] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4 bg-white text-black">
        <p className="text-sm leading-relaxed">
          <span className="font-bold mr-1 font-sans">trattoria.joseppe</span>
          {post.caption}
        </p>
      </div>
    </motion.div>
  );
}
