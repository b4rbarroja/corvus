import Continer from "./layout/Container";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative flex-1 flex items-start min-h-[600px] sm:min-h-[700px] lg:min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 lg:py-0 overflow-hidden bg-background bg-noise">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <Continer className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Text column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 xl:col-span-6 relative z-10">
            <section className="flex items-center gap-3">
              <p className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shrink-0"></p>
              <p className="font-mono text-xs md:text-sm tracking-wider text-white/70">
                Software engineering studio
              </p>
            </section>

            <section className="mt-6 md:mt-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading leading-[1.1] tracking-tight text-white">
                We build
                <br /> digital systems
                <br /> that drive
                <br /> <span className="text-blue-500">real impact</span>
              </h1>
              <p className="font-sans mt-5 md:mt-6 w-full max-w-[500px] mx-auto lg:mx-0 text-sm md:text-base xl:text-lg text-foreground-secondary leading-relaxed">
                From idea to scale, we design and build software, web and mobile
                applications, and cloud solutions that help business grow.
              </p>
            </section>

            <section className="mt-8 md:mt-10 w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 border border-border bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:border-border-strong hover:shadow-[0_0_30px_rgba(0,0,0,0.45)]"
                >
                  Create a Project
                </Link>
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/50"
                >
                  Explore work
                </Link>
              </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 md:pt-16 w-full">
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5 md:text-left">
                <p className="pb-2 font-mono text-xl md:text-2xl xl:text-3xl text-white">
                  50+
                </p>
                <p className="font-sans text-xs md:text-sm">
                  Projects Delivered
                </p>
              </div>
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5 md:text-left">
                <p className="pb-2 font-mono text-xl md:text-2xl xl:text-3xl text-white">
                  30+
                </p>
                <p className="font-sans text-xs md:text-sm">Happy Clients</p>
              </div>
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5 md:text-left">
                <p className="pb-2 font-mono text-xl md:text-2xl xl:text-3xl text-white">
                  6+
                </p>
                <p className="font-sans text-xs md:text-sm">
                  Industries Served
                </p>
              </div>
              <div className="text-foreground-secondary md:text-left">
                <p className="pb-2 font-mono text-xl md:text-2xl xl:text-3xl text-white">
                  10+
                </p>
                <p className="font-sans text-xs md:text-sm">
                  Countries Reached
                </p>
              </div>
            </section>
          </div>

          {/* Image column — large, bleeding, decorative */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55%] xl:w-[60%] 2xl:w-[65%] pointer-events-none select-none">
            <div className="relative w-full h-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]"></div>
          </div>
        </div>
      </Continer>
    </section>
  );
}
