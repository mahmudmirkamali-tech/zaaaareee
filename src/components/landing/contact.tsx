import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";
import {
  BRAND,
  INQUIRY_TYPES,
  PHONES,
  WHATSAPP,
} from "@/lib/site";

function toEnglishDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

function normalizePhone(value: string) {
  let digits = toEnglishDigits(value).replace(/[^\d]/g, "");
  if (digits.startsWith("98") && digits.length === 12) digits = `0${digits.slice(2)}`;
  if (digits.startsWith("9") && digits.length === 10) digits = `0${digits}`;
  return digits;
}

export type ContactPrefill = {
  carName?: string;
  type?: string;
};

export function Contact({ prefill }: { prefill: ContactPrefill }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<string>(INQUIRY_TYPES[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (prefill.carName) {
      setMessage(`درخواست بررسی خودرو: ${prefill.carName}`);
    }
    if (prefill.type) setType(prefill.type);
  }, [prefill]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedPhone = normalizePhone(phone);
    if (name.trim().length < 2) {
      toast.error("لطفاً نام را وارد کنید.");
      return;
    }
    if (!/^09\d{9}$/.test(trimmedPhone)) {
      toast.error("شماره موبایل را به‌صورت ۰۹xxxxxxxxx وارد کنید.");
      return;
    }
    const entry = {
      name: name.trim(),
      phone: trimmedPhone,
      type,
      message: message.trim(),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("autozare-inquiries") ?? "[]") as unknown[];
      localStorage.setItem("autozare-inquiries", JSON.stringify([entry, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(true);
    setName("");
    setPhone("");
    setMessage("");
    toast.success("درخواست شما ثبت شد. به‌زودی تماس می‌گیریم.");
  }

  return (
    <section id="contact" className="border-t border-border bg-bg-elevated px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs tracking-kicker text-accent" dir="ltr">
            ۰۵ — CONSULT
          </p>
          <h2 className="text-display font-medium text-fg">مشاوره کاملاً رایگان</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            فرم را پر کنید یا مستقیم تماس بگیرید. کارشناسان اتو زارع در ساعات کاری
            پاسخگو هستند — بدون تعهد و بدون هزینه مشاوره.
          </p>
          <ul className="mt-10 space-y-6">
            {PHONES.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="group inline-flex items-center gap-3 text-fg transition-colors hover:text-accent"
                >
                  <Phone className="size-4 text-accent" />
                  <span className="text-lg" dir="ltr">
                    {p.display}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3 text-muted">
              <Clock className="mt-0.5 size-4 text-accent" />
              <span>
                {BRAND.hoursMorning}
                <span className="mx-2 text-subtle">·</span>
                {BRAND.hoursEvening}
              </span>
            </li>
            <li className="flex items-start gap-3 text-muted">
              <MapPin className="mt-0.5 size-4 text-accent" />
              <span>نمایشگاه حضوری، {BRAND.city}</span>
            </li>
          </ul>
          <Button asChild className="mt-10" variant="gold">
            <a href={WHATSAPP.href} target="_blank" rel="noreferrer">
              گفتگو در واتساپ
            </a>
          </Button>
        </Reveal>

        <Reveal delayMs={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-bg p-6 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <Label htmlFor="name">نام</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div>
                <Label htmlFor="phone">شماره تماس</Label>
                <Input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0913•••••••"
                />
              </div>
              <div>
                <Label htmlFor="type">نوع درخواست</Label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-md border border-border bg-bg-elevated px-4 text-sm text-fg outline-none transition-colors duration-(--motion-fast) focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30",
                  )}
                >
                  {INQUIRY_TYPES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="message">پیام</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="خودروی مورد نظر یا توضیح کوتاه"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {sent ? "ارسال شد — درخواست جدید" : "ارسال درخواست"}
              </Button>
              <p className="text-center text-2xs text-subtle">
                با ارسال فرم، کارشناسان در ساعات کاری با شما تماس می‌گیرند.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
