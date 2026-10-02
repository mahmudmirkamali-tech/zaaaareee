export const BRAND = {
  nameFa: "اتو زارع",
  nameEn: "AUTO ZARE",
  nameEnCompact: "AutoZARE",
  city: "اصفهان",
  hoursLabel: "۹ صبح تا ۱۴  ·  ۱۷ تا ۲۳",
  hoursMorning: "۰۹:۰۰ — ۱۴:۰۰",
  hoursEvening: "۱۷:۰۰ — ۲۳:۰۰",
  hoursTz: "Asia/Tehran",
} as const;

export const PHONES = [
  { display: "۰۹۱۳ ۷۹۷ ۲۶۲۹", tel: "+989137972629", raw: "09137972629" },
  { display: "۰۹۰۱ ۷۷۹ ۲۰۰۱", tel: "+989017792001", raw: "09017792001" },
] as const;

export const WHATSAPP = {
  e164: "989137972629",
  href: "https://wa.me/989137972629",
} as const;

export type Car = {
  id: string;
  nameFa: string;
  nameEn: string;
  year: string;
  origin: string;
  tag: string;
  image: string;
  specs: string[];
  summary: string;
};

export const CARS: Car[] = [
  {
    id: "land-cruiser-300",
    nameFa: "تویوتا لندکروزر ۳۰۰",
    nameEn: "Toyota Land Cruiser 300",
    year: "۲۰۲۴",
    origin: "امارات",
    tag: "وارداتی",
    image: "/images/car-landcruiser.jpg",
    specs: ["۳.۵ توئین‌توربو", "گیربکس اتوماتیک", "چهار چرخ محرک"],
    summary:
      "شاسی‌بلند فول‌سایز با حضور قدرتمند و آرامش در هر مسیر. مناسب خانواده و سفرهای طولانی.",
  },
  {
    id: "mercedes-e-coupe",
    nameFa: "مرسدس‌بنز E کوپه",
    nameEn: "Mercedes-Benz E-Class Coupe",
    year: "۲۰۱۹",
    origin: "امارات",
    tag: "لوکس",
    image: "/images/car-mercedes.jpg",
    specs: ["موتور ۲ لیتر توربو", "کوپه دو در", "رینگ مشکی"],
    summary:
      "کوپه‌ای سینمایی با خطوط آلمانی. انتخابی برای کسانی که رانندگی را جدی می‌گیرند.",
  },
  {
    id: "palisade",
    nameFa: "هیوندای پالیسید",
    nameEn: "Hyundai Palisade",
    year: "۲۰۲۳",
    origin: "کویت",
    tag: "خانوادگی",
    image: "/images/car-palisade.jpg",
    specs: ["۷ نفره", "کابین چرم", "ایمنی کامل"],
    summary:
      "فضای داخلی گسترده، سواری نرم و امکانات کامل برای خانواده. واردات با اسناد شفاف.",
  },
  {
    id: "tucson",
    nameFa: "هیوندای توسان",
    nameEn: "Hyundai Tucson",
    year: "۲۰۲۴",
    origin: "عمان",
    tag: "شهری",
    image: "/images/car-tucson.jpg",
    specs: ["طراحی نسل جدید", "مصرف اقتصادی", "آپشن کامل"],
    summary:
      "کراس‌اوور شهری با طراحی تند و مصرف منطقی. گزینه‌ای هوشمند برای استفاده روزانه.",
  },
];

export const TRUST = [
  "واردات مستقیم از امارات و کویت",
  "ترخیص تخصصی گمرکی",
  "ترانزیت به مناطق آزاد",
  "مشاوره کاملاً رایگان",
] as const;

export const ADVANTAGES = [
  {
    title: "واردات و ترخیص تخصصی",
    body: "از ثبت سفارش تا پلاک؛ خودروهای سبک و سنگین با مسیر قانونی و زمان‌بندی مشخص.",
  },
  {
    title: "ترانزیت به مناطق آزاد",
    body: "مسیر شفاف برای کیش، قشم و سایر مناطق آزاد — بدون پیچیدگی‌های پنهان.",
  },
  {
    title: "مشاوره رایگان خرید از خارج",
    body: "همراهی در انتخاب از بازار امارات، کویت، عمان و چین، مطابق بودجه و سلیقه شما.",
  },
  {
    title: "فروش و تعویض مطمئن",
    body: "کارشناسی دقیق، قیمت منصفانه و معامله شفاف — خودروی فعلی‌تان را هم می‌پذیریم.",
  },
] as const;

export const STEPS = [
  {
    n: "۰۱",
    title: "مشاوره",
    body: "نیاز، بودجه و کاربری را می‌شنویم. پیشنهاد دقیق می‌دهیم — کاملاً رایگان.",
  },
  {
    n: "۰۲",
    title: "انتخاب و تأمین",
    body: "خودرو را در مبدأ پیدا می‌کنیم، بررسی می‌کنیم و مسیر واردات را می‌چینیم.",
  },
  {
    n: "۰۳",
    title: "ترخیص و تحویل",
    body: "اسناد، گمرک و تحویل در نمایشگاه. کلید را با خیال راحت دریافت می‌کنید.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "احسان محمدی",
    role: "لندکروزر ۳۰۰",
    quote:
      "ترخیص بدون حاشیه بود. از همان تماس اول حس کردم با یک مجموعه حساب‌شده طرف هستم، نه یک واسطه.",
  },
  {
    name: "سارا رضایی",
    role: "خرید از دبی",
    quote:
      "برای خرید از امارات مردد بودم. مشاوره رایگان‌شان دقیق بود و همان خودرویی که می‌خواستم، سالم رسید.",
  },
  {
    name: "رضا کریمی",
    role: "تعویض شاسی‌بلند",
    quote:
      "ماشین قبلی را با یک شاسی‌بلند وارداتی عوض کردم. کارشناسی منصفانه بود و معامله در یک جلسه جمع شد.",
  },
] as const;

export const INQUIRY_TYPES = [
  "مشاوره خرید",
  "واردات و ترخیص",
  "تعویض خودرو",
  "استعلام موجودی",
] as const;

export function isShowroomOpen(now = new Date()): boolean {
  const hourFmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: BRAND.hoursTz,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const parts = hourFmt.formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const t = hour * 60 + minute;
  const morning = t >= 9 * 60 && t < 14 * 60;
  const evening = t >= 17 * 60 && t < 23 * 60;
  return morning || evening;
}
