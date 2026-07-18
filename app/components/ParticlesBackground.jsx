"use client";

import { useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image";

// SVG لشكل السباركل (4 أطراف) مع توهج بسيط، متحول لـ Data URI
const sparkleSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path
    d="M50 5 C50 35, 50 35, 95 50 C50 65, 50 65, 50 95 C50 65, 50 65, 5 50 C50 35, 50 35, 50 5 Z"
    fill="#ffffff"
    filter="url(#glow)"
  />
</svg>
`;

const sparkleDataUri = `data:image/svg+xml;base64,${
  typeof window !== "undefined" ? btoa(sparkleSvg) : ""
}`;

const options = {
  fullScreen: false,
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 1.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: { min: 0.2, max: 1 },
      animation: {
        enable: true,
        speed: 1.5,
        sync: false,
        startValue: "random",
      },
    },
    shape: {
      type: "image",
      options: {
        image: {
          src: sparkleDataUri,
          width: 100,
          height: 100,
        },
      },
    },
    size: {
      value: { min: 3, max: 12 },
      animation: {
        enable: true,
        speed: 3,
        sync: false,
        startValue: "random",
      },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      await loadSlim(tsParticles);
      await loadImageShape(tsParticles);
      await tsParticles.load({ id: "tsparticles", options });
    })();

    return () => {
      tsParticles.destroy("tsparticles");
    };
  }, []);

  return (
    <div
      id="tsparticles"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
