import Continer from "./layout/Container";
import { ReactNode } from "react";

interface Feature {
  fig: string;
  illustration: ReactNode;
  title: string;
  description: string;
}

/* Shared style so SVG transforms scale/translate from their visual center
   instead of the default top-left origin. */
const fillBox: React.CSSProperties = {
  transformBox: "fill-box",
  transformOrigin: "center",
};

/* ---------- Isometric line-art illustrations (animate on parent hover) ---------- */

function StackedLayersIllustration() {
  const slabHoverClasses = [
    "group-hover:-translate-y-0.5",
    "group-hover:-translate-y-1",
    "group-hover:-translate-y-1.5",
    "group-hover:-translate-y-2",
    "group-hover:-translate-y-2.5",
    "group-hover:-translate-y-3",
    "group-hover:-translate-y-3.5",
  ];
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <g
        className="transition-transform duration-500 ease-out group-hover:-translate-y-3"
        style={fillBox}
      >
        <path
          d="M160 30 L280 96 L160 162 L40 96 Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <ellipse
          cx="160"
          cy="96"
          rx="52"
          ry="16"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M118 90 Q160 108 202 90"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
        <path
          d="M126 100 Q160 114 194 100"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      <line
        x1="40"
        y1="96"
        x2="40"
        y2="118"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <line
        x1="280"
        y1="96"
        x2="280"
        y2="118"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = 118 + i * 15;
        return (
          <path
            key={i}
            d={`M40 ${y} L160 ${y + 33} L280 ${y} L280 ${y + 6} L160 ${y + 39} L40 ${y + 6} Z`}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.85 - i * 0.08}
            className={`transition-transform duration-500 ease-out ${slabHoverClasses[i]}`}
            style={{ ...fillBox, transitionDelay: `${i * 35}ms` }}
          />
        );
      })}
    </svg>
  );
}

function CubeClusterIllustration() {
  const cube = (
    cx: number,
    cy: number,
    s: number,
    opacity: number,
    hoverClass: string,
    delay: number,
  ) => {
    const top = `M${cx} ${cy - s} L${cx + s} ${cy - s / 2} L${cx} ${cy} L${cx - s} ${cy - s / 2} Z`;
    const left = `M${cx - s} ${cy - s / 2} L${cx} ${cy} L${cx} ${cy + s} L${cx - s} ${cy + s / 2} Z`;
    const right = `M${cx + s} ${cy - s / 2} L${cx} ${cy} L${cx} ${cy + s} L${cx + s} ${cy + s / 2} Z`;
    return (
      <g
        stroke="currentColor"
        strokeWidth="1"
        opacity={opacity}
        className={`transition-transform duration-500 ease-out ${hoverClass}`}
        style={{ ...fillBox, transitionDelay: `${delay}ms` }}
      >
        <path d={top} />
        <path d={left} />
        <path d={right} />
        <circle cx={cx} cy={cy - s} r="2" fill="currentColor" opacity="0.6" />
      </g>
    );
  };
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      {cube(160, 90, 42, 0.9, "group-hover:-translate-y-2.5", 0)}
      {cube(
        112,
        150,
        42,
        0.7,
        "group-hover:-translate-x-2.5 group-hover:translate-y-1",
        60,
      )}
      {cube(
        208,
        150,
        42,
        0.7,
        "group-hover:translate-x-2.5 group-hover:translate-y-1",
        90,
      )}
      {cube(160, 195, 42, 0.55, "group-hover:translate-y-2.5", 120)}
    </svg>
  );
}

function SpeedPanelsIllustration() {
  const bigPanels = [
    { dx: -30, h: 190, o: 0.95, hover: "group-hover:-translate-y-2" },
    { dx: -12, h: 170, o: 0.8, hover: "group-hover:-translate-y-3" },
    { dx: 6, h: 150, o: 0.65, hover: "group-hover:-translate-y-4" },
  ];
  const bars = Array.from({ length: 14 }).map((_, i) => ({
    dx: 22 + i * 8,
    h: 70 - i * 3,
    o: 0.6 - i * 0.02,
  }));
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <g transform="translate(150 230)">
        {bigPanels.map((p, i) => (
          <path
            key={i}
            d={`M${p.dx} 0 L${p.dx} ${-p.h} L${p.dx + 30} ${-p.h - 15} L${p.dx + 30} -15 Z`}
            stroke="currentColor"
            strokeWidth="1"
            opacity={p.o}
            className={`transition-transform duration-500 ease-out ${p.hover}`}
            style={{ ...fillBox, transitionDelay: `${i * 40}ms` }}
          />
        ))}
        {bars.map((b, i) => (
          <path
            key={i}
            d={`M${b.dx} 0 L${b.dx} ${-b.h} L${b.dx + 6} ${-b.h - 3} L${b.dx + 6} -3 Z`}
            stroke="currentColor"
            strokeWidth="1"
            opacity={Math.max(b.o, 0.15)}
            className="origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-125"
            style={{ transitionDelay: `${i * 25}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}

function ScreenWireframeIllustration() {
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <path
        d="M160 60 L260 112 L160 164 L60 112 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M60 112 L60 132 L160 184 L160 164 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M260 112 L260 132 L160 184 L160 164 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M110 100 L130 90"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M140 108 L190 108"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        className="origin-left transition-transform duration-500 ease-out group-hover:scale-x-125"
      />
      <path
        d="M130 122 L175 122"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        className="origin-left transition-transform duration-500 ease-out delay-100 group-hover:scale-x-125"
      />
      <rect
        x="132"
        y="70"
        width="16"
        height="10"
        transform="skewX(-20)"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
        className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
        style={fillBox}
      />
      <g
        className="transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-3"
        style={fillBox}
      >
        <circle cx="210" cy="95" r="3" fill="currentColor" opacity="0.7" />
        <path
          d="M210 95 L228 82"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

function CloudNetworkIllustration() {
  const nodes = [
    { x: 160, y: 70, delay: 0 },
    { x: 220, y: 110, delay: 40 },
    { x: 100, y: 110, delay: 80 },
    { x: 160, y: 150, delay: 120 },
    { x: 230, y: 170, delay: 160 },
    { x: 90, y: 170, delay: 200 },
  ];
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <ellipse
        cx="160"
        cy="120"
        rx="100"
        ry="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
        className="origin-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={fillBox}
      />
      <ellipse
        cx="160"
        cy="120"
        rx="70"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        className="origin-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={fillBox}
      />
      <line
        x1="160"
        y1="70"
        x2="220"
        y2="110"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <line
        x1="160"
        y1="70"
        x2="100"
        y2="110"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <line
        x1="220"
        y1="110"
        x2="160"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <line
        x1="100"
        y1="110"
        x2="160"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <line
        x1="160"
        y1="150"
        x2="230"
        y2="170"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-40 transition-opacity duration-500 group-hover:opacity-90"
      />
      <line
        x1="160"
        y1="150"
        x2="90"
        y2="170"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-40 transition-opacity duration-500 group-hover:opacity-90"
      />
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="4"
          stroke="currentColor"
          strokeWidth="1"
          fill="black"
          opacity="0.9"
          className="origin-center transition-transform duration-500 ease-out group-hover:scale-150"
          style={{ ...fillBox, transitionDelay: `${n.delay}ms` }}
        />
      ))}
    </svg>
  );
}

function MobileDeviceIllustration() {
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <g
        className="transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:-translate-y-1"
        style={fillBox}
      >
        <path
          d="M140 50 L200 78 L200 220 L140 192 Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M200 78 L216 70 L216 212 L200 220 Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M140 50 L156 42 L216 70 L200 78 Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="150"
          y1="80"
          x2="190"
          y2="96"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          className="origin-left transition-transform duration-500 ease-out group-hover:scale-x-110"
        />
        <line
          x1="150"
          y1="98"
          x2="190"
          y2="114"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          className="origin-left transition-transform duration-500 ease-out delay-75 group-hover:scale-x-110"
        />
        <line
          x1="150"
          y1="116"
          x2="180"
          y2="130"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          className="origin-left transition-transform duration-500 ease-out delay-150 group-hover:scale-x-110"
        />
        <rect
          x="148"
          y="150"
          width="34"
          height="18"
          transform="skewY(11)"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
          style={fillBox}
        />
      </g>
    </svg>
  );
}

function NeuralCoreIllustration() {
  const spokes: [number, number, number][] = [
    [160, 100, 0],
    [200, 122, 40],
    [200, 158, 80],
    [160, 180, 120],
    [120, 158, 160],
    [120, 122, 200],
  ];
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      className="h-56 w-full max-w-[280px] text-white/25 transition-colors duration-500 group-hover:text-accent/60"
    >
      <path
        d="M160 60 L240 105 L240 175 L160 220 L80 175 L80 105 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
        className="transition-transform duration-700 ease-out group-hover:rotate-6"
        style={fillBox}
      />
      <g
        className="transition-transform duration-700 ease-out group-hover:-rotate-6"
        style={fillBox}
      >
        <path
          d="M160 100 L200 122 L200 158 L160 180 L120 158 L120 122 Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="160"
          cy="140"
          r="6"
          fill="currentColor"
          opacity="0.7"
          className="origin-center transition-transform duration-500 ease-out group-hover:scale-125"
          style={fillBox}
        />
        {spokes.map(([x, y, delay], i) => (
          <g key={i}>
            <line
              x1="160"
              y1="140"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              style={{ transitionDelay: `${delay}ms` }}
            />
            <circle
              cx={x}
              cy={y}
              r="3"
              fill="currentColor"
              opacity="0.6"
              className="origin-center transition-transform duration-500 ease-out group-hover:scale-150"
              style={{ ...fillBox, transitionDelay: `${delay}ms` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Data: our actual services ---------- */

const features: Feature[] = [
  {
    fig: "FIG 0.1",
    illustration: <StackedLayersIllustration />,
    title: "Software Development",
    description:
      "Custom software built with scalable architecture and clean code.",
  },
  {
    fig: "FIG 0.2",
    illustration: <ScreenWireframeIllustration />,
    title: "UI/UX Design",
    description:
      "Human-centered design that combines beauty, clarity, and conversion.",
  },
  {
    fig: "FIG 0.3",
    illustration: <CloudNetworkIllustration />,
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and reliable cloud infrastructure that grows with you.",
  },
  {
    fig: "FIG 0.4",
    illustration: <CubeClusterIllustration />,
    title: "SaaS Products",
    description:
      "Market-ready SaaS platforms built to solve real business needs.",
  },
  {
    fig: "FIG 0.5",
    illustration: <MobileDeviceIllustration />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that deliver smooth performance and native feel.",
  },
  {
    fig: "FIG 0.6",
    illustration: <NeuralCoreIllustration />,
    title: "AI Integration",
    description:
      "Intelligent systems and automation that enhance decision-making.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-background bg-noise py-24">
      <Continer className="relative z-10">
        <div className="grid grid-cols-1 border-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const col = i % 3;
            const isLastRow = i >= 3;
            return (
              <div
                key={feature.fig}
                className={[
                  "group flex cursor-default flex-col border-t border-border py-12 first:border-t-0",
                  "sm:px-8 lg:px-10",
                  col === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l",
                  col === 2 ? "lg:pr-0" : "",
                  !isLastRow ? "lg:border-t-0" : "lg:border-t",
                  i === 1 || i === 3 ? "sm:border-l-0" : "",
                ].join(" ")}
              >
                <span className="font-mono text-xs tracking-[0.15em] text-foreground-secondary/60 transition-colors duration-500 group-hover:text-accent">
                  {feature.fig}
                </span>

                <div className="mt-4 flex items-center justify-center">
                  {feature.illustration}
                </div>

                <div className="mt-10">
                  <h3 className="font-heading text-base font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-sans mt-3 max-w-xs text-sm leading-relaxed text-foreground-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Continer>
    </section>
  );
}
