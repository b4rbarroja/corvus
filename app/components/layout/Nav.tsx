import Link from "next/link";
import Continer from "./Container";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="relative z-20 bg-transparent font-sans text-foreground-secondary">
      <Continer>
        <nav>
          <div className="flex justify-between items-center py-4 md:pt-[30px] md:pb-0">
            <div>
              <Link href="/">
                <Image
                  src="/corvus.png"
                  height={140}
                  width={140}
                  className="md:h-[180px] md:w-[180px]"
                  alt="corvus logo"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-center gap-6">
              <Link
                href="#"
                className="hover:text-foreground active:text-accent transition-all duration-250"
              >
                Services
              </Link>
              <Link
                href="#"
                className="hover:text-foreground active:text-accent transition-all duration-250"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="hover:text-foreground active:text-accent transition-all duration-250"
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="hover:text-foreground active:text-accent transition-all duration-250"
              >
                Team Work
              </Link>
              <Link
                href="#"
                className="hover:text-foreground active:text-accent transition-all duration-250"
              >
                Contact
              </Link>
            </div>

            <div>
              <Link
                href="#"
                className="group inline-flex items-center gap-3 border border-white/20 bg-transparent px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-white transition-all duration-300 hover:border-white/50"
              >
                Create a Project
              </Link>
            </div>
          </div>
        </nav>
      </Continer>
    </header>
  );
}
