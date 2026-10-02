import { Logo } from "@/components/landing/logo";
import { BRAND, PHONES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            واردات، ترخیص، ترانزیت مناطق آزاد، فروش و تعویض خودرو.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-kicker text-accent">ساعات کاری</p>
            <p className="mt-3 text-sm text-muted">{BRAND.hoursMorning}</p>
            <p className="mt-1 text-sm text-muted">{BRAND.hoursEvening}</p>
          </div>
          <div>
            <p className="text-xs tracking-kicker text-accent">تماس</p>
            <ul className="mt-3 space-y-2">
              {PHONES.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="text-sm text-muted transition-colors hover:text-fg"
                    dir="ltr"
                  >
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="text-sm text-muted">نمایشگاه حضوری، {BRAND.city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-2xs text-subtle md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {BRAND.nameFa}</p>
        <p dir="ltr" className="font-display tracking-brand">
          {BRAND.nameEn}
        </p>
      </div>
    </footer>
  );
}
