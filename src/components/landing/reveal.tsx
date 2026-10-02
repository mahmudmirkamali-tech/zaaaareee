import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShown(true);
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: shown ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="size-1.5 rotate-45 bg-accent" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
