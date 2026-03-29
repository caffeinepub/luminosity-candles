import { Link, useNavigate } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export function Navigation() {
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: "oklch(0.09 0.004 280 / 95%)" }}
    >
      <div
        className="border-b"
        style={{ borderColor: "oklch(0.77 0.12 85 / 20%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-playfair text-2xl font-bold tracking-wider text-gold gold-glow no-underline"
          >
            Luxxo Studios
          </Link>
          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors cursor-pointer bg-transparent border-none"
            >
              Collections
            </button>
          </nav>
          <div className="flex items-center gap-5">
            <a
              href="tel:9920055525"
              className="flex items-center gap-2 no-underline"
              data-ocid="nav.link"
            >
              <Phone size={18} style={{ color: "#22c55e" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#22c55e" }}
              >
                9920055525
              </span>
            </a>
            <a
              href="https://instagram.com/luxxostudio5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline"
              data-ocid="nav.link"
            >
              <SiInstagram size={18} style={{ color: "#EC4899" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#EC4899" }}
              >
                @luxxostudio5
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
