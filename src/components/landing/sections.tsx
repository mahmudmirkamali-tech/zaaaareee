import {
  ArrowLeft,
  Globe,
  RefreshCcw,
  Scale,
  Ship,
} from "lucide-react";
import { GoldRule, Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  ADVANTAGES,
  BRAND,
  CARS,
  STEPS,
  TESTIMONIALS,
  TRUST,
  type Car,
} from "@/lib/site";

const ICONS = [Ship, Globe, Scale, RefreshCcw] as const;

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {TRUST.map((item, i) => (
          <p
            key={item}
            className={cn(
              "flex min-h-20 items-center justify-center px-4 text-center text-sm text-muted",
              i > 0 && "md:border-s md:border-border",
            )}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function FeaturedCars({ onSelect }: { onSelect: (car: Car) => void }) {
  return (
    <section id="cars" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          kicker="۰۱ — FEATURED"
          title="خودروهای ویژه"
          subtitle="منتخب نمایشگاه؛ کارشناسی‌شده، با اسناد شفاف و امکان بازدید حضوری."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {CARS.map((car, i) => (
            <Reveal key={car.id} delayMs={i * 80}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-bg-elevated">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.nameFa}
                    className="size-full object-cover transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-105"
                  />
                  <span className="absolute start-4 top-4 rounded-sm border border-line bg-bg/70 px-2 py-1 text-2xs tracking-kicker text-accent">
                    {car.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-fg">{car.nameFa}</h3>
                      <p className="mt-1 text-sm text-subtle" dir="ltr">
                        {car.nameEn}
                      </p>
                    </div>
                    <p className="text-sm text-muted">{car.year}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{car.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {car.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-sm border border-border px-2 py-1 text-2xs text-muted"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-subtle">مبدأ: {car.origin}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 px-0 text-accent hover:text-fg"
                      onClick={() => onSelect(car)}
                    >
                      جزئیات
                      <ArrowLeft className="size-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="border-y border-border bg-bg-elevated px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          kicker="۰۲ — WHY AUTO ZARE"
          title="چرا اتو زارع؟"
          subtitle="یک مسیر مشخص، از مشاوره تا پلاک — بدون شلوغی و وعده‌های مبهم."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {ADVANTAGES.map((item, i) => {
            const Icon = ICONS[i] ?? Ship;
            return (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="h-full rounded-3xl border border-border bg-bg p-7">
                  <Icon className="size-5 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 text-lg font-medium text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          kicker="۰۳ — PROCESS"
          title="فرآیند خرید، ساده و شفاف"
          subtitle="سه مرحله. بدون پیچیدگی اضافه."
        />
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <article>
                <p
                  className="font-display text-5xl font-medium text-accent/80"
                  dir="ltr"
                >
                  {step.n}
                </p>
                <h3 className="mt-6 text-xl font-medium text-fg">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowroomBand() {
  return (
    <section id="showroom" className="relative isolate min-h-96 overflow-hidden">
      <img
        src="/images/showroom.jpg"
        alt={`نمای شبانه نمایشگاه ${BRAND.nameFa}`}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
      <div className="relative mx-auto flex min-h-96 max-w-6xl flex-col justify-end px-6 py-20">
        <Reveal>
          <p className="text-xs tracking-kicker text-accent">SHOWROOM — {BRAND.city}</p>
          <h2 className="mt-4 max-w-xl text-display font-medium text-fg">
            نمایشگاهی که باید از نزدیک دید
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            خودروها زیر نور نمایشگاه، آماده بازدید. ساعات کاری: {BRAND.hoursLabel}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          kicker="۰۴ — CLIENTS"
          title="نظر کسانی که با ما خریده‌اند"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delayMs={i * 70}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-border bg-bg-elevated p-7">
                <GoldRule className="mb-6 max-w-16" />
                <p className="flex-1 text-sm leading-relaxed text-fg/90">
                  «{item.quote}»
                </p>
                <footer className="mt-8">
                  <p className="text-sm font-medium text-fg">{item.name}</p>
                  <p className="mt-1 text-xs text-subtle">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-4 text-xs tracking-kicker text-accent" dir="ltr">
        {kicker}
      </p>
      <h2 className="text-display font-medium text-fg">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
