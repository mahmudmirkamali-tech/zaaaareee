import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GoldRule } from "@/components/landing/reveal";
import { BRAND, isShowroomOpen } from "@/lib/site";

export function Hero() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setOpen(isShowroomOpen());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-dvh overflow-hidden">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            src="/images/hero.jpg"
            alt=""
            className="size-full object-cover"
          />
        ) : (
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-l from-bg/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:pb-28">
        <p
          className="mb-5 font-display text-sm tracking-kicker text-accent"
          dir="ltr"
        >
          {BRAND.nameEn}
        </p>
        <GoldRule className="mb-8 max-w-xs" />
        <h1 className="max-w-3xl text-hero font-medium leading-tight tracking-display text-fg">
          <span className="block md:inline">واردات مستقیم</span>
          <span className="hidden text-muted md:inline"> | </span>
          <span className="block md:inline">ترخیص تخصصی</span>
          <span className="hidden text-muted md:inline"> | </span>
          <span className="block md:inline">رانندگی لوکس</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          نمایشگاه اتو زارع — واردات و ترخیص خودروهای سبک و سنگین، ترانزیت به
          مناطق آزاد و مشاوره خرید از امارات، کویت، عمان و چین.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <a href="#cars">مشاهده خودروها</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">مشاوره رایگان</a>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span>
            {BRAND.hoursMorning}
            <span className="mx-2 text-subtle">·</span>
            {BRAND.hoursEvening}
          </span>
          {open !== null ? (
            <span className="inline-flex items-center gap-2 text-fg">
              <span
                className={open ? "size-1.5 rounded-full bg-accent" : "size-1.5 rounded-full bg-subtle"}
              />
              {open ? "اکنون باز است" : "خارج از ساعات کاری"}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
