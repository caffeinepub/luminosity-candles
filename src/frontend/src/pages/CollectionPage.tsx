import { COLLECTIONS } from "@/components/CollectionButton";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useGetAllCollections } from "@/hooks/useQueries";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// Collections that have two pages (Page 1 / Page 2 switcher)
const TWO_PAGE_COLLECTIONS = ["daisy", "sunflower", "rose", "teddy"];

// Image maps for each collection
const COLLECTION_IMAGES: Record<string, Record<1 | 2, string> | { 1: string }> =
  {
    daisy: {
      1: "/assets/uploads/Screenshot-2026-03-19-224753-6.png",
      2: "/assets/uploads/image_2026-03-19_221618623-1.png",
    },
    sunflower: {
      1: "/assets/uploads/Screenshot-2026-03-19-222323-2.png",
      2: "/assets/uploads/image_2026-03-19_222348286-1.png",
    },
    rose: {
      1: "/assets/uploads/image_2026-03-19_222926034-1.png",
      2: "/assets/uploads/Screenshot-2026-03-19-224713-10.png",
    },
    teddy: {
      1: "/assets/uploads/image_2026-03-19_223652033-2.png",
      2: "/assets/uploads/image_2026-03-19_223719759-1.png",
    },
    tulip: { 1: "/assets/uploads/Screenshot-2026-03-19-224323-8.png" },
    lotus: { 1: "/assets/uploads/Screenshot-2026-03-19-224313-11.png" },
    urli: { 1: "/assets/uploads/Screenshot-2026-03-19-224353-9.png" },
    ocean: { 1: "/assets/uploads/Screenshot-2026-03-19-224410-5.png" },
    scandinavian: { 1: "/assets/uploads/Screenshot-2026-03-19-224427-7.png" },
    "evil-eye": { 1: "/assets/uploads/Screenshot-2026-03-19-224452-1.png" },
    zodiac: { 1: "/assets/uploads/Screenshot-2026-03-19-224519-3.png" },
    crystals: { 1: "/assets/uploads/Screenshot-2026-03-19-224538-4.png" },
    food: { 1: "/assets/uploads/Screenshot-2026-03-19-224609-2.png" },
  };

function ImageCollectionLayout({
  collectionName,
  images,
  hasTwoPages,
  currentPage,
  setCurrentPage,
}: {
  collectionName: string;
  images: Record<number, string>;
  hasTwoPages: boolean;
  currentPage: 1 | 2;
  setCurrentPage: (p: 1 | 2) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />
      <section
        className="py-12 max-w-5xl mx-auto px-6"
        data-ocid="collection.section"
      >
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 text-sm uppercase tracking-widest"
          data-ocid="collection.back.button"
        >
          <ArrowLeft size={16} />
          All Collections
        </button>

        {hasTwoPages && (
          <div className="flex items-center gap-2 mb-10">
            {([1, 2] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCurrentPage(p)}
                className="px-5 py-2 text-sm uppercase tracking-widest font-semibold border transition-colors"
                style={{
                  borderRadius: "3px",
                  background:
                    currentPage === p
                      ? "oklch(0.77 0.12 85 / 15%)"
                      : "transparent",
                  borderColor:
                    currentPage === p
                      ? "oklch(0.77 0.12 85 / 70%)"
                      : "oklch(0.77 0.12 85 / 25%)",
                  color: currentPage === p ? "#D4AF37" : "oklch(0.6 0.02 280)",
                }}
                data-ocid="collection.tab"
              >
                Page {p}
              </button>
            ))}
          </div>
        )}

        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
          data-ocid="collection.panel"
        >
          <img
            src={images[currentPage]}
            alt={`${collectionName} Collection${hasTwoPages ? ` Page ${currentPage}` : ""}`}
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "8px",
              border: "1px solid oklch(0.77 0.12 85 / 25%)",
              boxShadow: "0 0 40px oklch(0.77 0.12 85 / 10%)",
            }}
          />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export function CollectionPage() {
  const navigate = useNavigate();
  const { id } = useParams({ from: "/collection/$id" });
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  const collectionConfig = COLLECTIONS.find((c) => c.id === id);
  const { data: backendCollections } = useGetAllCollections();
  void backendCollections;

  const images = COLLECTION_IMAGES[id];

  if (images) {
    const hasTwoPages = TWO_PAGE_COLLECTIONS.includes(id);
    return (
      <ImageCollectionLayout
        collectionName={collectionConfig?.label ?? id}
        images={images as Record<number, string>}
        hasTwoPages={hasTwoPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (!collectionConfig) {
    return (
      <div className="min-h-screen vignette-bg">
        <Navigation />
        <div
          className="flex flex-col items-center justify-center py-40 gap-4"
          data-ocid="collection.error_state"
        >
          <p className="font-playfair text-2xl text-gold">
            Collection not found
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="text-muted-foreground hover:text-gold transition-colors"
            data-ocid="collection.back.button"
          >
            ← Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />
      <section
        className="py-20 max-w-5xl mx-auto px-6"
        data-ocid="collection.section"
      >
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 text-sm uppercase tracking-widest"
          data-ocid="collection.back.button"
        >
          <ArrowLeft size={16} />
          All Collections
        </button>
        <h1 className="font-playfair text-4xl text-gold mb-6">
          {collectionConfig.label}
        </h1>
        <p className="text-muted-foreground">Collection coming soon.</p>
      </section>
      <Footer />
    </div>
  );
}
