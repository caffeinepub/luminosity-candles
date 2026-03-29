export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      style={{ background: "oklch(0.07 0.003 280)" }}
      className="border-t"
      data-ocid="footer.panel"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          &copy; {year} Luxxo Candles- Sculpting Scent And Stone
        </p>
        <p className="text-xs text-muted-foreground">
          Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-bright transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
