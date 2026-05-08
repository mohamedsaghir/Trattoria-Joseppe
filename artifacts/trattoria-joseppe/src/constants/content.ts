import {
  Clock,
  MapPin,
  Phone,
  Smartphone,
  Map,
  Image,
  Menu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  { title: "Moderne Startseite", icon: Image },
  { title: "Speisekarte online", icon: Menu },
  { title: "Öffnungszeiten", icon: Clock },
  { title: "Adresse & Kontakt", icon: MapPin },
  { title: "Mobile optimiert", icon: Smartphone },
  { title: "Google Maps Integration", icon: Map },
  { title: "Schneller Bestellkontakt", icon: Phone },
];

export interface SocialPost {
  image: string;
  alt: string;
  caption: string;
}

export const SOCIAL_POSTS: SocialPost[] = [
  {
    image: "/images/pizza.png",
    alt: "Pizza",
    caption: "Pizza gemacht für Genussmomente. 🍕✨",
  },
  {
    image: "/images/pasta.png",
    alt: "Fresh Pasta",
    caption: "Frisch. Heiß. Italienisch. 🍝 Jetzt bestellen — 052811602020",
  },
  {
    image: "/images/salat.png",
    alt: "Salat",
    caption: "Ein guter Abend beginnt mit gutem Essen.",
  },
];

export interface Offer {
  title: string;
  desc: string;
}

export const OFFERS: Offer[] = [
  { title: "Neues Branding", desc: "Professionelles Logo & Farben" },
  { title: "Moderne Website", desc: "Alle Infos für Ihre Kunden" },
  { title: "Social Media Posts", desc: "Vorlagen für Instagram & Co." },
];
