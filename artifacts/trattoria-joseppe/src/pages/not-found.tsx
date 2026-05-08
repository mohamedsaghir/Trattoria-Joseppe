import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-4 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-8 w-8 text-red-500 shrink-0" />
          <h1 className="text-2xl font-bold text-gray-900">404 – Seite nicht gefunden</h1>
        </div>
        <p className="text-sm text-gray-600">
          Die gewünschte Seite existiert nicht.{" "}
          <a href="/" className="text-primary underline underline-offset-2 hover:no-underline">
            Zurück zur Startseite
          </a>
        </p>
      </div>
    </div>
  );
}
