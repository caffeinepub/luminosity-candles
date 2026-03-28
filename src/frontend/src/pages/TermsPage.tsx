import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export function TermsPage() {
  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />
      <section
        className="py-10 max-w-4xl mx-auto px-6"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-full">
          <img
            src="/assets/uploads/screenshot_2026-03-28_204022-019d3518-af02-76e9-9af1-2c8b56df71f1-2.png"
            alt="Terms and Conditions"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
