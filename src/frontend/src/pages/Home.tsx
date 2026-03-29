import { COLLECTIONS, CollectionButton } from "@/components/CollectionButton";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { motion } from "motion/react";

function RealisticFlame({
  cx,
  baseWidth,
  height,
  strokeWidth = 1.5,
}: {
  cx: number;
  baseWidth: number;
  height: number;
  strokeWidth?: number;
}) {
  const bw = baseWidth;
  const h = height;
  const x = cx;
  return (
    <g>
      <ellipse
        cx={x}
        cy={-h * 0.55}
        rx={bw * 0.9}
        ry={h * 0.6}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.6}
        fill="none"
        opacity={0.25}
      />
      <path
        d={`M ${x} 0 C ${x + bw * 1.1} ${-h * 0.25} ${x + bw * 0.85} ${-h * 0.8} ${x} ${-h} C ${x - bw * 0.85} ${-h * 0.8} ${x - bw * 1.1} ${-h * 0.25} ${x} 0 Z`}
        stroke="#D4AF37"
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.9}
      />
      <path
        d={`M ${x} ${-h * 0.05} C ${x + bw * 0.7} ${-h * 0.3} ${x + bw * 0.55} ${-h * 0.82} ${x} ${-h * 0.95} C ${x - bw * 0.55} ${-h * 0.82} ${x - bw * 0.7} ${-h * 0.3} ${x} ${-h * 0.05} Z`}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.85}
        fill="none"
        opacity={0.7}
      />
      <path
        d={`M ${x} ${-h * 0.1} C ${x + bw * 0.35} ${-h * 0.38} ${x + bw * 0.28} ${-h * 0.78} ${x} ${-h * 0.88} C ${x - bw * 0.28} ${-h * 0.78} ${x - bw * 0.35} ${-h * 0.38} ${x} ${-h * 0.1} Z`}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.7}
        fill="none"
        opacity={0.55}
      />
      <ellipse
        cx={x}
        cy={-h * 0.82}
        rx={bw * 0.18}
        ry={h * 0.12}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.6}
        fill="none"
        opacity={0.9}
      />
      <path
        d={`M ${x} 0 C ${x - bw * 0.55} ${-h * 0.18} ${x - bw * 0.7} ${-h * 0.45} ${x - bw * 0.3} ${-h * 0.6}`}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.5}
        fill="none"
        opacity={0.4}
      />
      <path
        d={`M ${x} 0 C ${x + bw * 0.55} ${-h * 0.18} ${x + bw * 0.7} ${-h * 0.45} ${x + bw * 0.3} ${-h * 0.6}`}
        stroke="#D4AF37"
        strokeWidth={strokeWidth * 0.5}
        fill="none"
        opacity={0.4}
      />
    </g>
  );
}

// Helper: renders "Luxx" + superscript "o" tightly
function LuxxoText({
  suffix,
  style,
}: { suffix: string; style?: React.CSSProperties }) {
  return (
    <span style={style}>
      Luxx
      <sup
        style={{
          fontSize: "0.65em",
          verticalAlign: "0.1em",
          marginLeft: "0.05em",
          letterSpacing: 0,
        }}
      >
        o
      </sup>{" "}
      {suffix}
    </span>
  );
}

const CONCRETE_PAGES = [
  "/assets/uploads/screenshot_2026-03-28_203853-019d3518-b007-7461-92c9-babc44b4aa66-5.png",
  "/assets/uploads/screenshot_2026-03-28_203922-019d355d-09a0-70d8-a556-0fcb43ffe4b5-1.png",
  "/assets/uploads/screenshot_2026-03-28_203835-019d355d-0a0d-749e-9fa3-ff127b52a835-2.png",
  "/assets/uploads/screenshot_2026-03-28_203908-019d355d-0a0d-762a-bfe7-ca1c9f56aa47-3.png",
];

export function Home() {
  return (
    <div className="min-h-screen vignette-bg">
      <Navigation />

      {/* ── Hero / Brand Intro ── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, oklch(0.15 0.02 50 / 30%) 0%, transparent 60%), oklch(0.09 0.004 280)",
        }}
        data-ocid="hero.section"
      >
        <div
          className="absolute right-0 top-0 w-2/3 h-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, oklch(0.77 0.12 85 / 20%) 0%, transparent 65%)",
          }}
        />

        {/* 1. Tall slim apothecary glass jar — top-left — FLORAL pattern */}
        <svg
          role="img"
          aria-label="Tall apothecary candle jar"
          width="150"
          height="200"
          viewBox="0 0 150 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "6%",
            left: "2%",
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="floral1"
              x="0"
              y="0"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="9"
                cy="9"
                r="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="9"
                cy="3"
                rx="1.2"
                ry="2.8"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="9"
                cy="15"
                rx="1.2"
                ry="2.8"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="3"
                cy="9"
                rx="2.8"
                ry="1.2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="15"
                cy="9"
                rx="2.8"
                ry="1.2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="4"
                cy="4"
                rx="2.8"
                ry="1.2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
                transform="rotate(45 4 4)"
              />
              <ellipse
                cx="14"
                cy="14"
                rx="2.8"
                ry="1.2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
                transform="rotate(45 14 14)"
              />
            </pattern>
            <clipPath id="bodyClip1">
              <path d="M 63 40 L 63 52 Q 44 56 44 66 L 44 172 Q 44 182 54 184 L 96 184 Q 106 182 106 172 L 106 66 Q 106 56 87 52 L 87 40 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 27)">
            <RealisticFlame
              cx={75}
              baseWidth={7}
              height={22}
              strokeWidth={1.2}
            />
          </g>
          <line
            x1="75"
            y1="27"
            x2="75"
            y2="34"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
          <rect
            x="62"
            y="33"
            width="26"
            height="8"
            rx="4"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 63 40 L 63 52 Q 44 56 44 66 L 44 172 Q 44 182 54 184 L 96 184 Q 106 182 106 172 L 106 66 Q 106 56 87 52 L 87 40 Z"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="75"
            cy="40"
            rx="12"
            ry="3"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse
            cx="75"
            cy="48"
            rx="12"
            ry="2.5"
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="42"
            y="38"
            width="68"
            height="148"
            fill="url(#floral1)"
            clipPath="url(#bodyClip1)"
          />
          <ellipse
            cx="75"
            cy="184"
            rx="31"
            ry="5"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <line
            x1="48"
            y1="70"
            x2="48"
            y2="170"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* 2. Short wide squat glass jar — bottom-left — DIAGONAL CROSSHATCH */}
        <svg
          role="img"
          aria-label="Short squat candle jar"
          width="180"
          height="130"
          viewBox="0 0 180 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "8%",
            left: "4%",
            zIndex: 0,
            opacity: 0.28,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="crosshatch2"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="10"
                x2="10"
                y2="0"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="-2"
                y1="2"
                x2="2"
                y2="-2"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="8"
                y1="12"
                x2="12"
                y2="8"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="0"
                y1="0"
                x2="10"
                y2="10"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="-2"
                y1="8"
                x2="2"
                y2="12"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="8"
                y1="-2"
                x2="12"
                y2="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
            </pattern>
            <clipPath id="bodyClip2">
              <path d="M 74 35 L 74 44 Q 40 48 40 58 L 40 106 Q 40 116 50 118 L 130 118 Q 140 116 140 106 L 140 58 Q 140 48 106 44 L 106 35 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 20)">
            <RealisticFlame
              cx={90}
              baseWidth={8}
              height={18}
              strokeWidth={1.2}
            />
          </g>
          <line
            x1="90"
            y1="20"
            x2="90"
            y2="28"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
          <rect
            x="72"
            y="27"
            width="36"
            height="8"
            rx="3"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 74 35 L 74 44 Q 40 48 40 58 L 40 106 Q 40 116 50 118 L 130 118 Q 140 116 140 106 L 140 58 Q 140 48 106 44 L 106 35 Z"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="90"
            cy="35"
            rx="16"
            ry="4"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse
            cx="90"
            cy="42"
            rx="16"
            ry="3"
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="38"
            y="33"
            width="106"
            height="88"
            fill="url(#crosshatch2)"
            clipPath="url(#bodyClip2)"
          />
          <ellipse
            cx="90"
            cy="118"
            rx="50"
            ry="7"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <line
            x1="44"
            y1="62"
            x2="44"
            y2="104"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* 3. Tea-light — center-left — SMALL DOTS */}
        <svg
          role="img"
          aria-label="Tea-light candle"
          width="80"
          height="55"
          viewBox="0 0 80 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "38%",
            left: "12%",
            zIndex: 0,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="dots3"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="4"
                cy="4"
                r="1.5"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
            </pattern>
            <clipPath id="bodyClip3">
              <path d="M 12 22 L 15 48 L 65 48 L 68 22 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 14)">
            <RealisticFlame
              cx={40}
              baseWidth={4.5}
              height={12}
              strokeWidth={1}
            />
          </g>
          <line
            x1="40"
            y1="14"
            x2="40"
            y2="19"
            stroke="#D4AF37"
            strokeWidth="1.3"
          />
          <ellipse
            cx="40"
            cy="22"
            rx="28"
            ry="5"
            stroke="#D4AF37"
            strokeWidth="1.4"
            fill="none"
          />
          <ellipse
            cx="40"
            cy="25"
            rx="25"
            ry="3"
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 12 22 L 15 48 L 65 48 L 68 22"
            stroke="#D4AF37"
            strokeWidth="1.4"
            fill="none"
          />
          <rect
            x="10"
            y="20"
            width="62"
            height="30"
            fill="url(#dots3)"
            clipPath="url(#bodyClip3)"
          />
          <ellipse
            cx="40"
            cy="48"
            rx="25"
            ry="4"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* 4. Medium glass jar — top-right — DIAMOND LATTICE */}
        <svg
          role="img"
          aria-label="Medium candle jar with decorative label"
          width="170"
          height="190"
          viewBox="0 0 170 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "4%",
            right: "22%",
            zIndex: 0,
            opacity: 0.22,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="diamond4"
              x="0"
              y="0"
              width="15"
              height="15"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="7.5"
                x2="7.5"
                y2="0"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="7.5"
                y1="0"
                x2="15"
                y2="7.5"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="15"
                y1="7.5"
                x2="7.5"
                y2="15"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
              <line
                x1="7.5"
                y1="15"
                x2="0"
                y2="7.5"
                stroke="#D4AF37"
                strokeWidth="0.7"
              />
            </pattern>
            <clipPath id="bodyClip4">
              <path d="M 70 42 L 70 54 Q 47 58 47 68 L 47 168 Q 47 178 57 180 L 113 180 Q 123 178 123 168 L 123 68 Q 123 58 100 54 L 100 42 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 22)">
            <RealisticFlame
              cx={85}
              baseWidth={8}
              height={20}
              strokeWidth={1.3}
            />
          </g>
          <line
            x1="85"
            y1="22"
            x2="85"
            y2="33"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
          <rect
            x="68"
            y="32"
            width="34"
            height="10"
            rx="4"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 70 42 L 70 54 Q 47 58 47 68 L 47 168 Q 47 178 57 180 L 113 180 Q 123 178 123 168 L 123 68 Q 123 58 100 54 L 100 42 Z"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="85"
            cy="42"
            rx="15"
            ry="3.5"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse
            cx="85"
            cy="50"
            rx="15"
            ry="2.5"
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="45"
            y="40"
            width="80"
            height="142"
            fill="url(#diamond4)"
            clipPath="url(#bodyClip4)"
          />
          <ellipse
            cx="85"
            cy="180"
            rx="38"
            ry="6"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
          />
          <line
            x1="51"
            y1="72"
            x2="51"
            y2="165"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* 5. Small floating glass jar — upper center — HORIZONTAL STRIPES */}
        <svg
          role="img"
          aria-label="Small floating candle jar"
          width="100"
          height="140"
          viewBox="0 0 100 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "8%",
            left: "42%",
            zIndex: 0,
            opacity: 0.18,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="stripes5"
              x="0"
              y="0"
              width="100"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="4"
                x2="100"
                y2="4"
                stroke="#D4AF37"
                strokeWidth="0.8"
              />
            </pattern>
            <clipPath id="bodyClip5">
              <path d="M 40 33 L 40 42 Q 26 45 26 52 L 26 120 Q 26 128 34 130 L 66 130 Q 74 128 74 120 L 74 52 Q 74 45 60 42 L 60 33 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 17)">
            <RealisticFlame
              cx={50}
              baseWidth={5}
              height={15}
              strokeWidth={1.1}
            />
          </g>
          <line
            x1="50"
            y1="17"
            x2="50"
            y2="26"
            stroke="#D4AF37"
            strokeWidth="1.3"
          />
          <rect
            x="38"
            y="25"
            width="24"
            height="8"
            rx="3"
            stroke="#D4AF37"
            strokeWidth="1.3"
            fill="none"
          />
          <path
            d="M 40 33 L 40 42 Q 26 45 26 52 L 26 120 Q 26 128 34 130 L 66 130 Q 74 128 74 120 L 74 52 Q 74 45 60 42 L 60 33 Z"
            stroke="#D4AF37"
            strokeWidth="1.3"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="33"
            rx="10"
            ry="2.5"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="39"
            rx="10"
            ry="2"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="24"
            y="31"
            width="54"
            height="101"
            fill="url(#stripes5)"
            clipPath="url(#bodyClip5)"
          />
          <ellipse
            cx="50"
            cy="130"
            rx="24"
            ry="4"
            stroke="#D4AF37"
            strokeWidth="1.1"
            fill="none"
          />
          <line
            x1="29"
            y1="56"
            x2="29"
            y2="116"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* 6. Big glass jar — LARGE FLORAL — bottom right */}
        <svg
          role="img"
          aria-label="Large candle jar"
          width="220"
          height="240"
          viewBox="0 0 220 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 0,
            opacity: 0.6,
          }}
        >
          <defs>
            <pattern
              id="bigFloral6"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="14"
                cy="14"
                r="4"
                stroke="#D4AF37"
                strokeWidth="0.8"
                fill="none"
              />
              <ellipse
                cx="14"
                cy="5"
                rx="2"
                ry="4.5"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="14"
                cy="23"
                rx="2"
                ry="4.5"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="5"
                cy="14"
                rx="4.5"
                ry="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="23"
                cy="14"
                rx="4.5"
                ry="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
              />
              <ellipse
                cx="6.5"
                cy="6.5"
                rx="4.5"
                ry="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
                transform="rotate(45 6.5 6.5)"
              />
              <ellipse
                cx="21.5"
                cy="21.5"
                rx="4.5"
                ry="2"
                stroke="#D4AF37"
                strokeWidth="0.7"
                fill="none"
                transform="rotate(45 21.5 21.5)"
              />
            </pattern>
            <clipPath id="bodyClip6">
              <path d="M 90 54 L 90 70 Q 58 75 58 86 L 58 210 Q 58 222 70 224 L 150 224 Q 162 222 162 210 L 162 86 Q 162 75 130 70 L 130 54 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 30)">
            <RealisticFlame
              cx={110}
              baseWidth={13}
              height={30}
              strokeWidth={1.8}
            />
          </g>
          <line
            x1="110"
            y1="30"
            x2="110"
            y2="44"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <rect
            x="88"
            y="43"
            width="44"
            height="12"
            rx="4"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 90 54 L 90 70 Q 58 75 58 86 L 58 210 Q 58 222 70 224 L 150 224 Q 162 222 162 210 L 162 86 Q 162 75 130 70 L 130 54 Z"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="110"
            cy="54"
            rx="20"
            ry="5"
            stroke="#D4AF37"
            strokeWidth="1.6"
            fill="none"
          />
          <ellipse
            cx="110"
            cy="64"
            rx="20"
            ry="4"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="56"
            y="52"
            width="108"
            height="174"
            fill="url(#bigFloral6)"
            clipPath="url(#bodyClip6)"
          />
          <ellipse
            cx="110"
            cy="224"
            rx="52"
            ry="8"
            stroke="#D4AF37"
            strokeWidth="1.8"
            fill="none"
          />
          <line
            x1="63"
            y1="92"
            x2="63"
            y2="207"
            stroke="#D4AF37"
            strokeWidth="0.7"
            opacity="0.4"
          />
        </svg>

        {/* 7. Small glass jar overlapping big jar — GRID OF CROSSES */}
        <svg
          role="img"
          aria-label="Small candle jar"
          width="150"
          height="168"
          viewBox="0 0 150 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: 0,
            right: 120,
            zIndex: 1,
            opacity: 0.65,
          }}
        >
          <defs>
            <pattern
              id="crosses7"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="6"
                y1="2"
                x2="6"
                y2="10"
                stroke="#D4AF37"
                strokeWidth="0.9"
              />
              <line
                x1="2"
                y1="6"
                x2="10"
                y2="6"
                stroke="#D4AF37"
                strokeWidth="0.9"
              />
            </pattern>
            <clipPath id="bodyClip7">
              <path d="M 61 42 L 61 54 Q 38 58 38 66 L 38 144 Q 38 154 48 156 L 102 156 Q 112 154 112 144 L 112 66 Q 112 58 89 54 L 89 42 Z" />
            </clipPath>
          </defs>
          <g transform="translate(0 25)">
            <RealisticFlame
              cx={75}
              baseWidth={10}
              height={22}
              strokeWidth={1.5}
            />
          </g>
          <line
            x1="75"
            y1="25"
            x2="75"
            y2="34"
            stroke="#D4AF37"
            strokeWidth="1.8"
          />
          <rect
            x="59"
            y="33"
            width="32"
            height="10"
            rx="3"
            stroke="#D4AF37"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 61 42 L 61 54 Q 38 58 38 66 L 38 144 Q 38 154 48 156 L 102 156 Q 112 154 112 144 L 112 66 Q 112 58 89 54 L 89 42 Z"
            stroke="#D4AF37"
            strokeWidth="1.8"
            fill="none"
          />
          <ellipse
            cx="75"
            cy="42"
            rx="14"
            ry="3.5"
            stroke="#D4AF37"
            strokeWidth="1.4"
            fill="none"
          />
          <ellipse
            cx="75"
            cy="50"
            rx="14"
            ry="2.5"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <rect
            x="36"
            y="40"
            width="80"
            height="118"
            fill="url(#crosses7)"
            clipPath="url(#bodyClip7)"
          />
          <ellipse
            cx="75"
            cy="156"
            rx="37"
            ry="6"
            stroke="#D4AF37"
            strokeWidth="1.6"
            fill="none"
          />
          <line
            x1="42"
            y1="70"
            x2="42"
            y2="140"
            stroke="#D4AF37"
            strokeWidth="0.6"
            opacity="0.4"
          />
        </svg>

        <div
          className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center pt-10 pb-16"
          style={{ position: "relative", zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1
              className="text-gold gold-glow"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(3rem, 10vw, 7rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "0.5rem",
                letterSpacing: "0.02em",
              }}
            >
              <LuxxoText suffix="Studios" />
            </h1>
            <p
              className="font-playfair italic text-2xl md:text-3xl mb-8"
              style={{ color: "oklch(0.77 0.12 85)" }}
            >
              Sculpting Scent And Stone
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-center px-8 md:px-12">
              At Luxxo Studios, we believe that lighting a candle is more than
              just a scent — it is a sacred ritual of transformation. Every
              piece in our collection is meticulously handcrafted, hand-poured
              with passion to ensure an unparalleled experience of elegance and
              soul. Committed to your well-being and the planet, we exclusively
              use 100% natural, vegan soy wax, offering a cleaner, toxin-free
              burn that lasts up to 50% longer than traditional candles.
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.77 0.12 85 / 40%) 50%, transparent 100%)",
          }}
        />
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── SECTION 1: LUXXO CANDLES ── */}
      {/* ═══════════════════════════════════════════ */}
      <section
        id="luxxo-candles"
        className="py-20"
        style={{
          background: "oklch(0.09 0.004 280)",
          borderTop: "1px solid oklch(0.77 0.12 85 / 30%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10"
          >
            <h2
              className="text-gold gold-glow"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "0.4rem",
              }}
            >
              <LuxxoText suffix="Candles" />
            </h2>
            <p
              className="font-playfair italic text-xl md:text-2xl mb-2"
              style={{ color: "oklch(0.77 0.12 85)" }}
            >
              Light up your world
            </p>
            <p
              className="text-sm uppercase tracking-widest mb-8"
              style={{ color: "oklch(0.65 0.08 85)" }}
            >
              Handcrafted Soy Wax Candles
            </p>
            <div className="mb-10">
              <img
                src="/assets/generated/orange-candle-jar.dim_600x600.png"
                alt="Aesthetic orange candle jar"
                style={{
                  width: "260px",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "1px solid oklch(0.77 0.12 85 / 30%)",
                  boxShadow: "0 0 40px oklch(0.77 0.12 85 / 15%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div id="collections" className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Curated for You
            </p>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-gold gold-glow">
              Shop by Collection
            </h3>
            <div
              className="mx-auto mt-5 h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.77 0.12 85 / 60%), transparent)",
              }}
            />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {COLLECTIONS.map((col, i) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <CollectionButton collection={col} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ── SECTION 2: LUXXO CONCRETE ── */}
      {/* ═══════════════════════════════════════════ */}
      <section
        id="luxxo-concrete"
        className="py-20"
        style={{
          background: "oklch(0.07 0.004 280)",
          borderTop: "2px solid oklch(0.77 0.12 85 / 40%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10"
          >
            <h2
              className="text-gold gold-glow"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "0.4rem",
              }}
            >
              <LuxxoText suffix="Concrete" />
            </h2>
            <p
              className="font-playfair italic text-xl md:text-2xl mb-6"
              style={{ color: "oklch(0.77 0.12 85)" }}
            >
              Hand-Poured, Heart-Centered
            </p>
          </motion.div>

          {/* First concrete screenshot */}
          <div className="w-full max-w-3xl mb-8">
            <img
              src="/assets/uploads/screenshot_2026-03-28_203807-019d3518-ae55-7709-97f3-b5da8d068dd9-1.png"
              alt="Luxxo Concrete products"
              style={{
                width: "100%",
                borderRadius: "12px",
                border: "1px solid oklch(0.77 0.12 85 / 30%)",
                boxShadow: "0 0 50px oklch(0.77 0.12 85 / 10%)",
              }}
            />
          </div>

          {/* All subsequent concrete catalog pages inline */}
          {CONCRETE_PAGES.map((src) => (
            <div key={src} className="w-full max-w-3xl mb-8">
              <img
                src={src}
                alt="Luxxo Concrete catalog page"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid oklch(0.77 0.12 85 / 20%)",
                  boxShadow: "0 0 30px oklch(0.77 0.12 85 / 8%)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Extra pages at bottom */}
      <div style={{ background: "oklch(0.09 0.004 280)" }}>
        {[
          "/assets/uploads/screenshot_2026-03-28_204009-019d3582-4e53-71ae-ba68-b7baafa35778-1.png",
          "/assets/uploads/screenshot_2026-03-28_203956-019d3582-4e65-7099-b4c1-6d7ab4a3b9d6-2.png",
          "/assets/uploads/screenshot_2026-03-28_204022-019d3582-4e74-72f6-bf7b-439a850265c3-3.png",
          "/assets/uploads/screenshot_2026-03-28_204035-019d3582-4ed5-7269-8eac-b0d472eb7e3e-4.png",
        ].map((src) => (
          <img
            key={src}
            src={src}
            alt="page"
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
