"use client";

import { useCallback, useEffect, useRef } from "react";
import Container from "../layout/Container";
import TextReveal from "../ui/TextReveal";

const VIDEOS = [
  "https://res.cloudinary.com/oilun9qx/video/upload/v1788382950/Pharam2output.mp4",
  "https://res.cloudinary.com/oilun9qx/video/upload/so_1.6,eo_37.7/v1788382950/takya2output.mp4",
  "https://res.cloudinary.com/oilun9qx/video/upload/so_0.8,eo_43.3/v1788382950/kings2output.mp4",
  "https://res.cloudinary.com/oilun9qx/video/upload/so_1.6,eo_39.8/v1788382944/tabarak2output.mp4",
  "https://res.cloudinary.com/oilun9qx/video/upload/so_0.7/v1788382922/bake2output.mp4",
];

/* -------------------------------------------------------------------------- */
/*                              Video Card                                    */
/* -------------------------------------------------------------------------- */

function VideoCard({
  src,
  id,
  registerVideo,
}: {
  src: string;
  id: string;
  registerVideo: (id: string, el: HTMLVideoElement | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      registerVideo(id, video);
    }
    return () => {
      registerVideo(id, null);
    };
  }, [id, registerVideo]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        will-change-transform
      "
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                              Projects                                      */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const videoRegistry = useRef<Map<string, HTMLVideoElement>>(new Map());
  const isSectionActiveRef = useRef(false);

  const playAllVideos = useCallback(() => {
    videoRegistry.current.forEach((video) => {
      if (video && video.paused) {
        video.play().catch(() => {
          // Ignore autoplay restriction or interruption errors
        });
      }
    });
  }, []);

  const pauseAllVideos = useCallback(() => {
    videoRegistry.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  }, []);

  const registerVideo = useCallback(
    (id: string, el: HTMLVideoElement | null) => {
      if (el) {
        videoRegistry.current.set(id, el);
        if (isSectionActiveRef.current && !document.hidden && el.paused) {
          el.play().catch(() => {});
        }
      } else {
        videoRegistry.current.delete(id);
      }
    },
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Observe Section visibility in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionActiveRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!document.hidden) {
            playAllVideos();
          }
        } else {
          pauseAllVideos();
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0,
      },
    );

    observer.observe(section);

    // Handle tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAllVideos();
      } else if (isSectionActiveRef.current) {
        playAllVideos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      pauseAllVideos();
    };
  }, [playAllVideos, pauseAllVideos]);

  const setRowSpeed = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    speed: number,
  ) => {
    if (!containerRef.current) return;

    if (typeof containerRef.current.getAnimations === "function") {
      const animations = containerRef.current.getAnimations({
        subtree: true,
      });

      animations.forEach((anim) => {
        anim.playbackRate = speed;
      });
    }
  };

  const renderVideoItem = (src: string, key: string) => (
    <div
      key={key}
      className="
        group
        relative
        h-[200px]
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-[16px]

        sm:h-[360px]
        sm:w-[580px]

        lg:h-[460px]
        lg:w-[740px]

        contain-paint
      "
    >
      <VideoCard src={src} id={key} registerVideo={registerVideo} />

      {/* لا يوجد hover على اللمس -> على < lg العرض بلون كامل بدون تعتيم/رمادي. */}
      {/* على lg فقط: معتم ورمادي، ويصفو عند الـ hover. */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          transition-all
          duration-500
          lg:bg-black/50
          lg:backdrop-grayscale
          lg:group-hover:bg-transparent
          lg:group-hover:backdrop-grayscale-0
        "
      />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
        py-20
        md:py-28
        lg:py-32
      "
    >
      <Container className="relative z-10">
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <div className="max-w-2xl">
            <TextReveal
              as="h2"
              className="
                font-heading
                font-sans
                text-4xl
                leading-[1.29]
                tracking-[-0.0375em]
                text-white
                sm:text-5xl
              "
            >
              {"Selected Works"}
            </TextReveal>

            <TextReveal
              as="p"
              delay={300}
              className="
                mt-5
                font-sans
                text-sm
                leading-relaxed
                text-[#737373]
                sm:text-base
                xl:text-lg
              "
            >
              A showcase of our recent digital experiences. We partner with
              forward-thinking brands to build products that matter.
            </TextReveal>
          </div>
        </div>
      </Container>

      <div className="relative flex w-full flex-col gap-4 overflow-hidden sm:gap-8">
        <style>{`
          @keyframes marquee-right {
            from {
              transform: translate3d(
                calc(-100% - var(--marquee-gap)),
                0,
                0
              );
            }

            to {
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes marquee-left {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(
                calc(-100% - var(--marquee-gap)),
                0,
                0
              );
            }
          }

          .marquee-wrapper {
            --marquee-gap: 1rem;

            display: flex;
            width: max-content;
            user-select: none;
            gap: var(--marquee-gap);

            contain: layout;
          }

          @media (min-width: 640px) {
            .marquee-wrapper {
              --marquee-gap: 2rem;
            }
          }

          .animate-marquee-right,
          .animate-marquee-left {
            display: flex;
            flex-shrink: 0;
            gap: var(--marquee-gap);

            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .animate-marquee-right {
            animation: marquee-right 20s linear infinite;
          }

          .animate-marquee-left {
            animation: marquee-left 20s linear infinite;
          }

          /*
           * Respect users who prefer reduced motion.
           */
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee-right,
            .animate-marquee-left {
              animation-play-state: paused;
            }
          }
        `}</style>

        {/* ---------------------------------------------------------------- */}
        {/* Top Row                                                          */}
        {/* ---------------------------------------------------------------- */}

        <div
          ref={row1Ref}
          className="marquee-wrapper"
          onMouseEnter={() => setRowSpeed(row1Ref, 0.35)}
          onMouseLeave={() => setRowSpeed(row1Ref, 1)}
        >
          <div className="animate-marquee-right">
            {VIDEOS.map((src, idx) => renderVideoItem(src, `row1-a-${idx}`))}
          </div>

          <div className="animate-marquee-right" aria-hidden="true">
            {VIDEOS.map((src, idx) => renderVideoItem(src, `row1-b-${idx}`))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Bottom Row                                                       */}
        {/* ---------------------------------------------------------------- */}

        <div
          ref={row2Ref}
          className="marquee-wrapper"
          onMouseEnter={() => setRowSpeed(row2Ref, 0.35)}
          onMouseLeave={() => setRowSpeed(row2Ref, 1)}
        >
          <div className="animate-marquee-left">
            {VIDEOS.map((src, idx) => renderVideoItem(src, `row2-a-${idx}`))}
          </div>

          <div className="animate-marquee-left" aria-hidden="true">
            {VIDEOS.map((src, idx) => renderVideoItem(src, `row2-b-${idx}`))}
          </div>
        </div>
      </div>
    </section>
  );
}
