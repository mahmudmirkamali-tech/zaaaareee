import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { PHONES } from "@/lib/site";

const LINKS = [
  { href: "#cars", label: "خودروها" },
  { href: "#why", label: "خدمات" },
  { href: "#process", label: "فرآیند" },
  { href: "#contact", label: "تماس" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-(--motion-fast) ease-(--ease-out)",
        scrolled || open
          ? "border-b border-border bg-bg/92"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
        <Logo compact />
        <nav className="hidden items-center gap-8 md:flex" aria-label="اصلی">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${PHONES[0].tel}`}
            className="inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
            dir="ltr"
          >
            <Phone className="size-4 text-accent" />
            {PHONES[0].display}
          </a>
          <Button asChild size="sm" variant="outline">
            <a href="#contact">مشاوره رایگان</a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="موبایل">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-lg text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                مشاوره رایگان
              </a>
            </Button>
            <a
              href={`tel:${PHONES[0].tel}`}
              className="inline-flex h-11 items-center justify-center gap-2 text-sm text-muted"
              dir="ltr"
            >
              <Phone className="size-4 text-accent" />
              {PHONES[0].display}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
