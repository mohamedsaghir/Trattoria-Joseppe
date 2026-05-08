import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PHONE_NUMBER } from "@/constants/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo.png"
            alt="Trattoria Joseppe Logo"
            className="h-20 w-20 object-contain drop-shadow-sm"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium font-sans text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden sm:flex rounded-full shadow-md bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6"
          >
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="mr-2 h-4 w-4" />
              Anrufen & bestellen
            </a>
          </Button>

          <button
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/98 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium font-sans text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-2 flex items-center gap-2 text-sm font-medium font-sans text-secondary-foreground bg-secondary rounded-full px-5 py-2.5 w-fit"
          >
            <Phone className="h-4 w-4" />
            Anrufen & bestellen
          </a>
        </div>
      )}
    </nav>
  );
}
