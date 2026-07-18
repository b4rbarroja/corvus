import Continer from "./layout/Container";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-background bg-noise">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <Continer className="relative z-10">
        <div className="relative w-full">
          <div className="flex flex-col w-full max-w-3xl relative z-10">
            <section className="flex items-center gap-3">
              <p className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shrink-0"></p>
              <p className="font-mono text-xs md:text-sm text-white/70">
                Software engineering studio
              </p>
            </section>

            <section className="mt-6 md:mt-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading leading-[1.1] tracking-tight text-white">
                We build
                <br /> digital systems
                <br /> that drive
                <br /> <span className="text-blue-500">real impact</span>
              </h1>
              <p className="font-sans mt-5 md:mt-6 w-full max-w-[550px] text-base lg:text-lg text-foreground-secondary leading-relaxed">
                From idea to scale, we design and build software, web and mobile
                applications, and cloud solutions that help business grow.
              </p>
            </section>

            <section className="mt-8 md:mt-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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

            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 md:pt-16">
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5">
                <p className="pb-2 font-mono text-2xl md:text-3xl text-white">
                  50+
                </p>
                <p className="font-sans text-sm">Projects Delivered</p>
              </div>
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5">
                <p className="pb-2 font-mono text-2xl md:text-3xl text-white">
                  30+
                </p>
                <p className="font-sans text-sm">Happy Clients</p>
              </div>
              <div className="text-foreground-secondary md:border-r md:border-white/10 md:pr-5">
                <p className="pb-2 font-mono text-2xl md:text-3xl text-white">
                  6+
                </p>
                <p className="font-sans text-sm">Industries Served</p>
              </div>
              <div className="text-foreground-secondary">
                <p className="pb-2 font-mono text-2xl md:text-3xl text-white">
                  10+
                </p>
                <p className="font-sans text-sm">Countries Reached</p>
              </div>
            </section>
          </div>

          <div className="absolute right-[-30%] md:-right-[10%] lg:-right-[15%] top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
            <Image
              src="/rcorvus.png"
              alt="Corvus Element"
              width={1200}
              height={1200}
              className="mb-[200px] mr-[100px] w-[500px] md:w-[800px] lg:w-[1100px] "
              priority
            />
          </div>
        </div>
      </Continer>
    </section>
  );
}
