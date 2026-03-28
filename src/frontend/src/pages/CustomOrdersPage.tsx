import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export function CustomOrdersPage() {
  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />
      <section
        className="py-10 max-w-4xl mx-auto px-6"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-full">
          <img
            src="/assets/uploads/screenshot_2026-03-28_203835-019d3518-b003-72db-83e7-0214ca40942f-6.png"
            alt="Custom and Bulk Orders"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
