export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      <div className="flex items-center justify-center gap-2 mb-2">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-8 w-8 object-contain opacity-60"
        />
        <span className="font-sans">Trattoria Joseppe</span>
      </div>
      <p className="font-sans">
        Dies ist eine Demo-Präsentation. Entworfen für Trattoria Joseppe.
      </p>
    </footer>
  );
}
