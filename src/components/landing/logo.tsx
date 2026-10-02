import { cn } from "@/lib/cn";
import { BRAND } from "@/lib/site";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)}>
      <img
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        className="size-10 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-lg font-medium tracking-brand text-fg"
          dir="ltr"
        >
          {BRAND.nameEn}
        </span>
        {!compact ? (
          <span className="mt-1 text-2xs tracking-kicker text-accent">
            {BRAND.nameFa}
          </span>
        ) : null}
      </span>
    </a>
  );
}
