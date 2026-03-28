import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export function ProductCarePage() {
  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />
      <section
        className="py-10 max-w-4xl mx-auto px-6"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-full">
          <img
            src="/assets/uploads/screenshot_2026-03-28_203956-019d3518-af18-71c0-ba69-6d7c9e8576b2-3.png"
            alt="Product Care and Guidelines"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
