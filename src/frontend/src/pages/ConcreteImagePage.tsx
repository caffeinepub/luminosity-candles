import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface ConcreteImagePageProps {
  imageSrc: string;
  title: string;
}

export function ConcreteImagePage({ imageSrc, title }: ConcreteImagePageProps) {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{ background: "#000" }}
    >
      {/* Back button */}
      <Link
        to="/"
        className="absolute top-5 left-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
        style={{
          color: "oklch(0.77 0.12 85)",
          border: "1px solid oklch(0.77 0.12 85 / 60%)",
          background: "oklch(0.07 0.004 280 / 80%)",
          backdropFilter: "blur(8px)",
          textDecoration: "none",
        }}
        data-ocid="concrete.back_button"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      {/* Full-page screenshot */}
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: "100%",
          minHeight: "100vh",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}
