import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/constants/navigation";

export default function InfoSection() {
  return (
    <section id="kontakt" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#D13B2A]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-border p-8 md:p-14">
          <div className="text-center mb-12">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-28 w-28 mx-auto mb-6 drop-shadow"
            />
            <h2 className="text-4xl font-normal font-serif uppercase tracking-wide">
              Besuchen Sie uns
            </h2>
            <p className="text-muted-foreground mt-2 font-sans">
              Wir freuen uns auf Sie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 text-center">
            <div className="flex flex-col items-center p-8">
              <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-sans">Adresse</h3>
              <p className="text-muted-foreground font-sans text-center">
                Mittlere Str. 41
                <br />
                32676 Lügde
              </p>
            </div>

            <div className="flex flex-col items-center p-8 border-y md:border-y-0 md:border-x border-border">
              <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-sans">Öffnungszeiten</h3>
              <p className="text-muted-foreground font-sans text-center">
                Täglich 11–15 & 17–22 Uhr
                <br />
                <span className="text-[#D13B2A] font-semibold">
                  Dienstag geschlossen
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center p-8">
              <div className="bg-primary/10 p-4 rounded-2xl mb-4 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-sans">Kontakt</h3>
              <p className="text-muted-foreground mb-4 font-sans">{PHONE_DISPLAY}</p>
              <Button
                asChild
                variant="outline"
                className="rounded-full w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a href={`tel:${PHONE_NUMBER}`}>Jetzt anrufen</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
