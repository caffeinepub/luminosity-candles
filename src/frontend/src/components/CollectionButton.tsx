import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

const ICON_STROKE = "rgba(255,255,255,0.45)";
const ICON_FILL = "rgba(255,255,255,0.12)";

function DaisyIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="24"
            rx="7"
            ry="14"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="11" fill={ICON_STROKE} stroke="none" />
        <circle
          cx="50"
          cy="50"
          r="7"
          fill="rgba(255,255,255,0.08)"
          stroke="none"
        />
      </g>
    </svg>
  );
}

function SunflowerIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2" fill={ICON_FILL}>
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse
            key={`petal-${i * 30}`}
            cx="50"
            cy="21"
            rx="6"
            ry="14"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <circle
          cx="50"
          cy="50"
          r="14"
          fill={ICON_FILL}
          stroke={ICON_STROKE}
          strokeWidth="2.5"
        />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = 8;
          const x = 50 + r * Math.cos((deg * Math.PI) / 180);
          const y = 50 + r * Math.sin((deg * Math.PI) / 180);
          return (
            <circle
              key={deg}
              cx={x}
              cy={y}
              r="2.5"
              fill={ICON_STROKE}
              stroke="none"
            />
          );
        })}
        <circle cx="50" cy="50" r="3" fill={ICON_STROKE} stroke="none" />
      </g>
    </svg>
  );
}

function TulipIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <path d="M50 62 C38 58 28 48 30 34 C34 22 46 22 50 38 Z" />
        <path d="M50 62 C62 58 72 48 70 34 C66 22 54 22 50 38 Z" />
        <path d="M50 62 C44 52 42 38 50 22 C58 38 56 52 50 62 Z" />
        <line x1="50" y1="62" x2="50" y2="88" strokeWidth="3" />
        <path d="M50 78 C42 72 33 66 37 58 C41 52 50 62 50 78 Z" />
        <path d="M50 74 C58 68 67 62 63 54 C59 48 50 58 50 74 Z" />
      </g>
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <path d="M50 72 C50 55 44 38 50 22 C56 38 50 55 50 72 Z" />
        <path d="M50 72 C42 60 32 50 30 36 C40 30 50 46 50 72 Z" />
        <path d="M50 72 C58 60 68 50 70 36 C60 30 50 46 50 72 Z" />
        <path d="M50 72 C38 68 20 62 15 48 C20 38 38 48 50 72 Z" />
        <path d="M50 72 C62 68 80 62 85 48 C80 38 62 48 50 72 Z" />
        <path d="M25 75 Q50 68 75 75" strokeWidth="3" fill="none" />
        <path d="M15 82 Q50 74 85 82" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

function RoseIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <path d="M50 72 C36 68 20 56 22 40 C26 26 44 28 50 50 Z" />
        <path d="M50 72 C64 68 80 56 78 40 C74 26 56 28 50 50 Z" />
        <path d="M50 72 C40 62 30 44 38 28 C46 18 56 32 50 50 Z" />
        <path d="M50 72 C60 62 70 44 62 28 C54 18 44 32 50 50 Z" />
        <path d="M50 60 C44 55 40 46 44 38 C48 32 56 38 50 60 Z" />
        <path d="M50 60 C56 55 60 46 56 38 C52 32 44 38 50 60 Z" />
        <circle cx="50" cy="50" r="6" fill={ICON_STROKE} stroke="none" />
        <line x1="50" y1="72" x2="50" y2="88" strokeWidth="3" />
        <path d="M50 82 C44 76 37 74 38 68" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

function TeddyIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <circle cx="34" cy="25" r="9" />
        <circle cx="66" cy="25" r="9" />
        <circle cx="34" cy="25" r="5" fill="rgba(255,255,255,0.08)" />
        <circle cx="66" cy="25" r="5" fill="rgba(255,255,255,0.08)" />
        <circle cx="50" cy="38" r="18" />
        <circle cx="43" cy="34" r="3" fill={ICON_STROKE} stroke="none" />
        <circle cx="57" cy="34" r="3" fill={ICON_STROKE} stroke="none" />
        <circle
          cx="44.2"
          cy="32.8"
          r="1"
          fill="rgba(255,255,255,0.7)"
          stroke="none"
        />
        <circle
          cx="58.2"
          cy="32.8"
          r="1"
          fill="rgba(255,255,255,0.7)"
          stroke="none"
        />
        <ellipse
          cx="50"
          cy="41"
          rx="4"
          ry="3"
          fill={ICON_STROKE}
          stroke="none"
        />
        <path d="M46 44 Q50 48 54 44" strokeWidth="2" fill="none" />
        <ellipse cx="50" cy="72" rx="18" ry="20" />
        <ellipse
          cx="50"
          cy="72"
          rx="10"
          ry="12"
          fill="rgba(255,255,255,0.08)"
        />
        <ellipse cx="28" cy="64" rx="7" ry="13" transform="rotate(-20 28 64)" />
        <ellipse cx="72" cy="64" rx="7" ry="13" transform="rotate(20 72 64)" />
        <ellipse cx="38" cy="86" rx="8" ry="6" />
        <ellipse cx="62" cy="86" rx="8" ry="6" />
      </g>
    </svg>
  );
}

function UrliIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <circle cx="50" cy="22" r="14" fill="none" strokeDasharray="4 3" />
        <circle cx="50" cy="26" r="10" />
        <path d="M36 55 C36 44 43 40 50 40 C57 40 64 44 64 55 L64 60 L36 60 Z" />
        <path d="M36 60 Q28 70 22 78 Q36 76 50 72 Q64 76 78 78 Q72 70 64 60" />
        <ellipse cx="50" cy="62" rx="14" ry="5" />
        <path d="M36 52 Q30 58 34 64" strokeWidth="2" />
        <path d="M64 52 Q70 58 66 64" strokeWidth="2" />
        <circle cx="50" cy="24" r="1.5" fill={ICON_STROKE} stroke="none" />
      </g>
    </svg>
  );
}

function OceanIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <path d="M50 15 C50 15 42 30 40 50 C38 65 36 72 20 85 C30 87 40 83 50 78 C60 83 70 87 80 85 C64 72 62 65 60 50 C58 30 50 15 50 15 Z" />
        <path
          d="M50 78 C44 82 32 88 20 85 C22 80 30 75 38 72 C42 74 46 76 50 78 Z"
          fill={ICON_STROKE}
        />
        <path
          d="M50 78 C56 82 68 88 80 85 C78 80 70 75 62 72 C58 74 54 76 50 78 Z"
          fill={ICON_STROKE}
        />
        <path d="M44 35 Q50 32 56 35" fill="none" strokeWidth="1.5" />
        <path d="M42 44 Q50 40 58 44" fill="none" strokeWidth="1.5" />
        <path d="M40 53 Q50 49 60 53" fill="none" strokeWidth="1.5" />
        <path d="M39 62 Q50 58 61 62" fill="none" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function ScandinavianIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <circle cx="50" cy="50" r="38" fill="none" />
        {[0, 90, 180, 270].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="24"
            rx="8"
            ry="14"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        {[45, 135, 225, 315].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="29"
            rx="5"
            ry="10"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="8" fill={ICON_STROKE} stroke="none" />
        <path d="M15 15 Q20 25 30 22 Q25 12 15 15 Z" />
        <path d="M85 15 Q80 25 70 22 Q75 12 85 15 Z" />
        <path d="M15 85 Q20 75 30 78 Q25 88 15 85 Z" />
        <path d="M85 85 Q80 75 70 78 Q75 88 85 85 Z" />
      </g>
    </svg>
  );
}

function EvilEyeIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5">
        <path d="M10 50 Q50 10 90 50 Q50 90 10 50 Z" fill={ICON_FILL} />
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="rgba(255,255,255,0.2)"
          stroke={ICON_STROKE}
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="14"
          fill="rgba(100,160,255,0.35)"
          stroke={ICON_STROKE}
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="7" fill={ICON_STROKE} stroke="none" />
        <circle
          cx="54"
          cy="45"
          r="3.5"
          fill="rgba(255,255,255,0.75)"
          stroke="none"
        />
        <circle
          cx="45"
          cy="52"
          r="1.5"
          fill="rgba(255,255,255,0.5)"
          stroke="none"
        />
        <path d="M30 32 Q50 18 70 32" fill="none" strokeWidth="2" />
        <path d="M30 68 Q50 82 70 68" fill="none" strokeWidth="2" />
      </g>
    </svg>
  );
}

function ZodiacIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2" fill="none">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="28" />
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + 28 * Math.cos(angle);
          const y1 = 50 + 28 * Math.sin(angle);
          const x2 = 50 + 40 * Math.cos(angle);
          const y2 = 50 + 40 * Math.sin(angle);
          return (
            <line
              key={`divider-${i * 30}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="1.5"
            />
          );
        })}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180;
          const x = 50 + 34 * Math.cos(angle);
          const y = 50 + 34 * Math.sin(angle);
          return (
            <circle
              key={`dot-${i * 30}`}
              cx={x}
              cy={y}
              r="2.5"
              fill={ICON_STROKE}
            />
          );
        })}
        <polygon
          points="50,30 54,44 68,44 57,53 61,67 50,58 39,67 43,53 32,44 46,44"
          fill={ICON_FILL}
          stroke={ICON_STROKE}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function CrystalIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <polygon points="50,12 76,32 76,68 50,88 24,68 24,32" />
        <line x1="50" y1="12" x2="50" y2="88" strokeWidth="1.5" />
        <line x1="24" y1="32" x2="76" y2="32" strokeWidth="1.5" />
        <line x1="24" y1="68" x2="76" y2="68" strokeWidth="1.5" />
        <line x1="50" y1="12" x2="24" y2="50" strokeWidth="1.5" />
        <line x1="50" y1="12" x2="76" y2="50" strokeWidth="1.5" />
        <line x1="50" y1="88" x2="24" y2="50" strokeWidth="1.5" />
        <line x1="50" y1="88" x2="76" y2="50" strokeWidth="1.5" />
        <polygon
          points="50,12 76,32 50,50"
          fill="rgba(255,255,255,0.18)"
          stroke="none"
        />
        <polygon
          points="24,68 50,88 50,50"
          fill="rgba(255,255,255,0.1)"
          stroke="none"
        />
        <line x1="50" y1="7" x2="50" y2="3" strokeWidth="2" />
        <line x1="55" y1="9" x2="58" y2="6" strokeWidth="2" />
        <line x1="45" y1="9" x2="42" y2="6" strokeWidth="2" />
      </g>
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <g stroke={ICON_STROKE} strokeWidth="2.5" fill={ICON_FILL}>
        <path d="M32 14 L68 14 L62 48 Q60 60 50 63 Q40 60 38 48 Z" />
        <path
          d="M35 28 Q50 22 65 28 L62 48 Q60 58 50 61 Q40 58 38 48 Z"
          fill="rgba(255,255,255,0.18)"
          stroke="none"
        />
        <rect x="47" y="63" width="6" height="22" rx="2" />
        <ellipse cx="50" cy="87" rx="18" ry="5" />
        <line
          x1="34"
          y1="14"
          x2="66"
          y2="14"
          strokeWidth="3"
          stroke="rgba(255,255,255,0.6)"
        />
        <circle
          cx="46"
          cy="40"
          r="2"
          fill="rgba(255,255,255,0.4)"
          stroke="none"
        />
        <circle
          cx="52"
          cy="32"
          r="1.5"
          fill="rgba(255,255,255,0.3)"
          stroke="none"
        />
        <circle
          cx="58"
          cy="42"
          r="1.8"
          fill="rgba(255,255,255,0.3)"
          stroke="none"
        />
      </g>
    </svg>
  );
}

interface CollectionConfig {
  id: string;
  label: string;
  bgColor: string;
  icon: ReactNode;
}

export const COLLECTIONS: CollectionConfig[] = [
  { id: "daisy", label: "DAISY", bgColor: "#8F90FF", icon: <DaisyIcon /> },
  {
    id: "sunflower",
    label: "SUNFLOWER",
    bgColor: "#F2C12C",
    icon: <SunflowerIcon />,
  },
  { id: "tulip", label: "TULIP", bgColor: "#FF6F8F", icon: <TulipIcon /> },
  { id: "lotus", label: "LOTUS", bgColor: "#F6B6C6", icon: <LotusIcon /> },
  { id: "rose", label: "ROSE", bgColor: "#E0433C", icon: <RoseIcon /> },
  { id: "teddy", label: "TEDDY", bgColor: "#7A4B2E", icon: <TeddyIcon /> },
  { id: "urli", label: "URLI", bgColor: "#2F8B45", icon: <UrliIcon /> },
  { id: "ocean", label: "OCEAN", bgColor: "#23B7C7", icon: <OceanIcon /> },
  {
    id: "scandinavian",
    label: "SCANDINAVIAN",
    bgColor: "#7B3B2A",
    icon: <ScandinavianIcon />,
  },
  {
    id: "evil-eye",
    label: "EVIL EYE",
    bgColor: "#2439C9",
    icon: <EvilEyeIcon />,
  },
  { id: "zodiac", label: "ZODIAC", bgColor: "#7A3ED1", icon: <ZodiacIcon /> },
  {
    id: "crystals",
    label: "CRYSTALS",
    bgColor: "#5B2EB4",
    icon: <CrystalIcon />,
  },
  { id: "food", label: "FOOD", bgColor: "#6A4A2F", icon: <FoodIcon /> },
];

interface CollectionButtonProps {
  collection: CollectionConfig;
  index: number;
}

export function CollectionButton({ collection, index }: CollectionButtonProps) {
  const navigate = useNavigate();
  const isScandinavian = collection.id === "scandinavian";

  return (
    <button
      type="button"
      onClick={() =>
        navigate({ to: "/collection/$id", params: { id: collection.id } })
      }
      className="collection-btn-hover relative flex items-center justify-center overflow-hidden cursor-pointer border"
      style={{
        backgroundColor: collection.bgColor,
        borderColor: "rgba(212,177,95,0.5)",
        borderRadius: "8px",
        aspectRatio: "1 / 1",
        width: "100%",
      }}
      data-ocid={`collections.item.${index + 1}`}
    >
      {/* SVG icon fills the button area, behind text (z-0) */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0"
        style={{ padding: "10%" }}
      >
        <div style={{ width: "85%", height: "85%" }}>{collection.icon}</div>
      </div>

      {/* Gold label centered, on top of icon */}
      <span
        className="relative z-10 font-playfair font-bold uppercase tracking-widest text-center leading-none px-1"
        style={{
          color: "#D4B15F",
          fontSize: isScandinavian
            ? "clamp(0.6rem, 2vw, 1rem)"
            : "clamp(1rem, 3.5vw, 2rem)",
          textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.8)",
        }}
      >
        {collection.label}
      </span>
    </button>
  );
}
