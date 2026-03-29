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
      1: "/assets/uploads/screenshot_2026-03-29_205915-019d3a44-8c97-761a-a040-a85b7f76d045-3.png",
      2: "/assets/uploads/screenshot_2026-03-29_205929-019d3a44-8aed-736b-adfe-b540417728f2-1.png",
    },
    sunflower: {
      1: "/assets/uploads/screenshot_2026-03-29_205939-019d3a44-8c65-742b-a370-da562d3fe989-2.png",
      2: "/assets/uploads/screenshot_2026-03-29_205948-019d3a44-9e85-772e-b9dd-10fdf43100b3-15.png",
    },
    rose: {
      1: "/assets/uploads/screenshot_2026-03-29_210039-019d3a44-9c36-7428-812b-290763f6e5ee-13.png",
      2: "/assets/uploads/screenshot_2026-03-29_210207-019d3a44-9f04-745b-a3b4-f1de3dc0ece0-16.png",
    },
    teddy: {
      1: "/assets/uploads/screenshot_2026-03-29_210328-019d3a44-8f8c-753c-add4-54ad7b3e4ba3-8.png",
      2: "/assets/uploads/screenshot_2026-03-29_210345-019d3a44-8f5f-7768-af21-d71d233f6325-6.png",
    },
    tulip: {
      1: "/assets/uploads/screenshot_2026-03-29_210002-019d3a44-9af1-70bc-a597-156f020539f0-11.png",
    },
    lotus: {
      1: "/assets/uploads/screenshot_2026-03-29_210024-019d3a44-8dcf-7218-9a0a-46940e7a50a2-4.png",
    },
    urli: {
      1: "/assets/uploads/screenshot_2026-03-29_210401-019d3a44-8f9f-723a-8a9f-0d52a7a82c29-10.png",
    },
    ocean: {
      1: "/assets/uploads/screenshot_2026-03-29_210411-019d3a44-8f87-773f-a2c2-23c854f8fde9-9.png",
    },
    scandinavian: {
      1: "/assets/uploads/screenshot_2026-03-29_210451-019d3a44-a0a8-70d9-96cf-722298360e86-17.png",
    },
    "evil-eye": {
      1: "/assets/uploads/screenshot_2026-03-29_210505-019d3a44-9d10-71ab-a7b9-6ac2611c89da-14.png",
    },
    zodiac: {
      1: "/assets/uploads/screenshot_2026-03-29_210519-019d3a44-8e5b-70ad-8c2d-b3057a69c3f2-5.png",
    },
    crystals: {
      1: "/assets/uploads/screenshot_2026-03-29_210534-019d3a44-8f4e-76c1-b109-f08ad3301dca-7.png",
    },
    food: {
      1: "/assets/uploads/screenshot_2026-03-29_210617-019d3a44-9b87-7279-b834-a993edb60bce-12.png",
    },
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
