import Continer from "./layout/Container";
import { ReactNode } from "react";
import {
  Boxes,
  LayoutTemplate,
  Cloud,
  Cog,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface Service {
  index: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    index: "01",
    icon: <Boxes className="h-9 w-9" strokeWidth={1} />,
    title: "Software Development",
    description:
      "Custom software built with scalable architecture and clean code.",
  },
  {
    index: "02",
    icon: <LayoutTemplate className="h-9 w-9" strokeWidth={1} />,
    title: "UI/UX Design",
    description:
      "Human-centered design that combines beauty, clarity, and conversion.",
  },
  {
    index: "03",
    icon: <Cloud className="h-9 w-9" strokeWidth={1} />,
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and reliable cloud infrastructure that grows with you.",
  },
  {
    index: "04",
    icon: <Cog className="h-9 w-9" strokeWidth={1} />,
    title: "SaaS Products",
    description:
      "Market-ready SaaS platforms built to solve real business needs.",
  },
  {
    index: "05",
    icon: <Smartphone className="h-9 w-9" strokeWidth={1} />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that deliver smooth performance and native feel.",
  },
  {
    index: "06",
    icon: <ShieldCheck className="h-9 w-9" strokeWidth={1} />,
    title: "AI Integration",
    description:
      "Intelligent systems and automation that enhance decision-making.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-background bg-noise py-12 md:py-16">
      <Continer className="relative z-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              SERVICES
            </div>
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
              Our services,
              <br />
              engineered for <span className="text-accent">impact.</span>
            </h2>
            <p className="font-sans mt-5 max-w-md text-sm leading-relaxed text-foreground-secondary sm:text-base xl:text-lg">
              We design, build, and scale digital systems that solve real
              problems and drive measurable results.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
            <p className="font-sans max-w-xs text-sm leading-relaxed text-foreground-secondary">
              End-to-end software engineering services tailored to your goals
              and built for the future.
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.index}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-background-secondary md:p-8"
            >
              <div>
                <span className="text-xs font-medium tracking-widest text-accent">
                  {service.index}
                </span>
                <div className="mt-6 text-foreground">{service.icon}</div>
                <h3 className="font-heading mt-6 text-lg font-medium text-foreground md:text-xl">
                  {service.title}
                </h3>
                <p className="font-sans mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-secondary transition-all group-hover:translate-x-1 group-hover:border-border-strong group-hover:text-foreground">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="relative mt-5 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center md:p-8">
          <div className="relative">
            <h4 className="font-heading text-xl font-medium text-foreground">
              Have a challenge in mind?
            </h4>
            <p className="mt-1 text-sm text-foreground-secondary">
              Let&apos;s build something powerful together.
            </p>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Continer>
    </section>
  );
}
