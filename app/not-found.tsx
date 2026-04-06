import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-blue-100 font-heading mb-2">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3 font-heading">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
