import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as RefreshCcw, c as MapPin, d as ArrowLeft, i as Scale, l as Globe, o as Phone, r as Ship, s as Menu, t as X, u as Clock } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BK9EcpxM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors transition-transform duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95", {
	variants: {
		variant: {
			default: "bg-fg text-bg hover:bg-fg/90",
			outline: "border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent",
			ghost: "text-fg hover:text-accent",
			gold: "bg-accent text-accent-fg hover:bg-accent/90"
		},
		size: {
			default: "h-11 px-6 text-sm",
			lg: "h-12 px-8 text-sm tracking-wide",
			sm: "h-9 px-4 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/80", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed inset-4 z-50 m-auto h-fit max-h-dvh w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface shadow-soft focus:outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute end-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-md text-fg/80 transition-colors hover:text-accent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "بستن"
			})]
		})]
	})] });
}
var BRAND = {
	nameFa: "اتو زارع",
	nameEn: "AUTO ZARE",
	nameEnCompact: "AutoZARE",
	city: "اصفهان",
	hoursLabel: "۹ صبح تا ۱۴  ·  ۱۷ تا ۲۳",
	hoursMorning: "۰۹:۰۰ — ۱۴:۰۰",
	hoursEvening: "۱۷:۰۰ — ۲۳:۰۰",
	hoursTz: "Asia/Tehran"
};
var PHONES = [{
	display: "۰۹۱۳ ۷۹۷ ۲۶۲۹",
	tel: "+989137972629",
	raw: "09137972629"
}, {
	display: "۰۹۰۱ ۷۷۹ ۲۰۰۱",
	tel: "+989017792001",
	raw: "09017792001"
}];
var WHATSAPP = {
	e164: "989137972629",
	href: "https://wa.me/989137972629"
};
var CARS = [
	{
		id: "land-cruiser-300",
		nameFa: "تویوتا لندکروزر ۳۰۰",
		nameEn: "Toyota Land Cruiser 300",
		year: "۲۰۲۴",
		origin: "امارات",
		tag: "وارداتی",
		image: "/images/car-landcruiser.jpg",
		specs: [
			"۳.۵ توئین‌توربو",
			"گیربکس اتوماتیک",
			"چهار چرخ محرک"
		],
		summary: "شاسی‌بلند فول‌سایز با حضور قدرتمند و آرامش در هر مسیر. مناسب خانواده و سفرهای طولانی."
	},
	{
		id: "mercedes-e-coupe",
		nameFa: "مرسدس‌بنز E کوپه",
		nameEn: "Mercedes-Benz E-Class Coupe",
		year: "۲۰۱۹",
		origin: "امارات",
		tag: "لوکس",
		image: "/images/car-mercedes.jpg",
		specs: [
			"موتور ۲ لیتر توربو",
			"کوپه دو در",
			"رینگ مشکی"
		],
		summary: "کوپه‌ای سینمایی با خطوط آلمانی. انتخابی برای کسانی که رانندگی را جدی می‌گیرند."
	},
	{
		id: "palisade",
		nameFa: "هیوندای پالیسید",
		nameEn: "Hyundai Palisade",
		year: "۲۰۲۳",
		origin: "کویت",
		tag: "خانوادگی",
		image: "/images/car-palisade.jpg",
		specs: [
			"۷ نفره",
			"کابین چرم",
			"ایمنی کامل"
		],
		summary: "فضای داخلی گسترده، سواری نرم و امکانات کامل برای خانواده. واردات با اسناد شفاف."
	},
	{
		id: "tucson",
		nameFa: "هیوندای توسان",
		nameEn: "Hyundai Tucson",
		year: "۲۰۲۴",
		origin: "عمان",
		tag: "شهری",
		image: "/images/car-tucson.jpg",
		specs: [
			"طراحی نسل جدید",
			"مصرف اقتصادی",
			"آپشن کامل"
		],
		summary: "کراس‌اوور شهری با طراحی تند و مصرف منطقی. گزینه‌ای هوشمند برای استفاده روزانه."
	}
];
var TRUST = [
	"واردات مستقیم از امارات و کویت",
	"ترخیص تخصصی گمرکی",
	"ترانزیت به مناطق آزاد",
	"مشاوره کاملاً رایگان"
];
var ADVANTAGES = [
	{
		title: "واردات و ترخیص تخصصی",
		body: "از ثبت سفارش تا پلاک؛ خودروهای سبک و سنگین با مسیر قانونی و زمان‌بندی مشخص."
	},
	{
		title: "ترانزیت به مناطق آزاد",
		body: "مسیر شفاف برای کیش، قشم و سایر مناطق آزاد — بدون پیچیدگی‌های پنهان."
	},
	{
		title: "مشاوره رایگان خرید از خارج",
		body: "همراهی در انتخاب از بازار امارات، کویت، عمان و چین، مطابق بودجه و سلیقه شما."
	},
	{
		title: "فروش و تعویض مطمئن",
		body: "کارشناسی دقیق، قیمت منصفانه و معامله شفاف — خودروی فعلی‌تان را هم می‌پذیریم."
	}
];
var STEPS = [
	{
		n: "۰۱",
		title: "مشاوره",
		body: "نیاز، بودجه و کاربری را می‌شنویم. پیشنهاد دقیق می‌دهیم — کاملاً رایگان."
	},
	{
		n: "۰۲",
		title: "انتخاب و تأمین",
		body: "خودرو را در مبدأ پیدا می‌کنیم، بررسی می‌کنیم و مسیر واردات را می‌چینیم."
	},
	{
		n: "۰۳",
		title: "ترخیص و تحویل",
		body: "اسناد، گمرک و تحویل در نمایشگاه. کلید را با خیال راحت دریافت می‌کنید."
	}
];
var TESTIMONIALS = [
	{
		name: "احسان محمدی",
		role: "لندکروزر ۳۰۰",
		quote: "ترخیص بدون حاشیه بود. از همان تماس اول حس کردم با یک مجموعه حساب‌شده طرف هستم، نه یک واسطه."
	},
	{
		name: "سارا رضایی",
		role: "خرید از دبی",
		quote: "برای خرید از امارات مردد بودم. مشاوره رایگان‌شان دقیق بود و همان خودرویی که می‌خواستم، سالم رسید."
	},
	{
		name: "رضا کریمی",
		role: "تعویض شاسی‌بلند",
		quote: "ماشین قبلی را با یک شاسی‌بلند وارداتی عوض کردم. کارشناسی منصفانه بود و معامله در یک جلسه جمع شد."
	}
];
var INQUIRY_TYPES = [
	"مشاوره خرید",
	"واردات و ترخیص",
	"تعویض خودرو",
	"استعلام موجودی"
];
function isShowroomOpen(now = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: BRAND.hoursTz,
		hour: "numeric",
		minute: "numeric",
		hour12: false
	}).formatToParts(now);
	const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
	const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
	const t = hour * 60 + minute;
	return t >= 540 && t < 840 || t >= 1020 && t < 1380;
}
function CarDialog({ car, onClose, onInquire }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(car),
		onOpenChange: (next) => !next && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[90dvh] overflow-y-auto p-0",
			children: car ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: car.image,
					alt: car.nameFa,
					className: "size-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-kicker text-accent",
						children: car.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-2 text-2xl font-medium text-fg",
						children: car.nameFa
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mt-1 text-sm text-subtle",
						dir: "ltr",
						children: [
							car.nameEn,
							" — ",
							car.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: car.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [car.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-sm border border-border px-2 py-1 text-2xs text-muted",
							children: spec
						}, spec)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-sm border border-border px-2 py-1 text-2xs text-muted",
							children: ["مبدأ: ", car.origin]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "قیمت: تماس بگیرید"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							onClick: () => {
								onInquire(car);
								onClose();
							},
							children: "درخواست این خودرو"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP.href,
								target: "_blank",
								rel: "noreferrer",
								children: "واتساپ"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONES[0].tel}`,
						className: "mt-4 block text-center text-sm text-subtle hover:text-accent",
						dir: "ltr",
						children: PHONES[0].display
					})
				]
			})] }) : null
		})
	});
}
function Reveal({ children, className, delayMs = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setShown(true);
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "reveal-in", className),
		style: { transitionDelay: shown ? `${delayMs}ms` : "0ms" },
		children
	});
}
function GoldRule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rotate-45 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
		]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-bg-elevated px-4 text-sm text-fg outline-none transition-colors duration-(--motion-fast) placeholder:text-subtle focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-2 block text-xs font-medium text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-md border border-border bg-bg-elevated px-4 py-3 text-sm text-fg outline-none transition-colors duration-(--motion-fast) placeholder:text-subtle focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30", className),
		...props
	});
}
function toEnglishDigits(value) {
	return value.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}
function normalizePhone(value) {
	let digits = toEnglishDigits(value).replace(/[^\d]/g, "");
	if (digits.startsWith("98") && digits.length === 12) digits = `0${digits.slice(2)}`;
	if (digits.startsWith("9") && digits.length === 10) digits = `0${digits}`;
	return digits;
}
function Contact({ prefill }) {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)(INQUIRY_TYPES[0]);
	const [message, setMessage] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (prefill.carName) setMessage(`درخواست بررسی خودرو: ${prefill.carName}`);
		if (prefill.type) setType(prefill.type);
	}, [prefill]);
	function onSubmit(e) {
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
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("autozare-inquiries") ?? "[]");
			localStorage.setItem("autozare-inquiries", JSON.stringify([entry, ...prev].slice(0, 20)));
		} catch {}
		setSent(true);
		setName("");
		setPhone("");
		setMessage("");
		toast.success("درخواست شما ثبت شد. به‌زودی تماس می‌گیریم.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-bg-elevated px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs tracking-kicker text-accent",
					dir: "ltr",
					children: "۰۵ — CONSULT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-display font-medium text-fg",
					children: "مشاوره کاملاً رایگان"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-muted",
					children: "فرم را پر کنید یا مستقیم تماس بگیرید. کارشناسان اتو زارع در ساعات کاری پاسخگو هستند — بدون تعهد و بدون هزینه مشاوره."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-10 space-y-6",
					children: [
						PHONES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${p.tel}`,
							className: "group inline-flex items-center gap-3 text-fg transition-colors hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								dir: "ltr",
								children: p.display
							})]
						}) }, p.tel)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								BRAND.hoursMorning,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-subtle",
									children: "·"
								}),
								BRAND.hoursEvening
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["نمایشگاه حضوری، ", BRAND.city] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-10",
					variant: "gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP.href,
						target: "_blank",
						rel: "noreferrer",
						children: "گفتگو در واتساپ"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delayMs: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit,
					className: "rounded-3xl border border-border bg-bg p-6 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "نام"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								autoComplete: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "نام و نام خانوادگی"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "شماره تماس"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								name: "phone",
								inputMode: "tel",
								autoComplete: "tel",
								dir: "ltr",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "0913•••••••"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "type",
								children: "نوع درخواست"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "type",
								value: type,
								onChange: (e) => setType(e.target.value),
								className: cn("h-11 w-full rounded-md border border-border bg-bg-elevated px-4 text-sm text-fg outline-none transition-colors duration-(--motion-fast) focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"),
								children: INQUIRY_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item
								}, item))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "پیام"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								value: message,
								onChange: (e) => setMessage(e.target.value),
								placeholder: "خودروی مورد نظر یا توضیح کوتاه"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full",
								children: sent ? "ارسال شد — درخواست جدید" : "ارسال درخواست"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-2xs text-subtle",
								children: "با ارسال فرم، کارشناسان در ساعات کاری با شما تماس می‌گیرند."
							})
						]
					})
				})
			})]
		})
	});
}
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "",
			width: 40,
			height: 40,
			className: "size-10 object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-medium tracking-brand text-fg",
				dir: "ltr",
				children: BRAND.nameEn
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-2xs tracking-kicker text-accent",
				children: BRAND.nameFa
			}) : null]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border px-6 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
				children: "واردات، ترخیص، ترانزیت مناطق آزاد، فروش و تعویض خودرو."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-kicker text-accent",
						children: "ساعات کاری"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: BRAND.hoursMorning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: BRAND.hoursEvening
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-kicker text-accent",
					children: "تماس"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2",
					children: [PHONES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${p.tel}`,
						className: "text-sm text-muted transition-colors hover:text-fg",
						dir: "ltr",
						children: p.display
					}) }, p.tel)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-sm text-muted",
						children: ["نمایشگاه حضوری، ", BRAND.city]
					})]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-2xs text-subtle md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				BRAND.nameFa
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				dir: "ltr",
				className: "font-display tracking-brand",
				children: BRAND.nameEn
			})]
		})]
	});
}
var LINKS = [
	{
		href: "#cars",
		label: "خودروها"
	},
	{
		href: "#why",
		label: "خدمات"
	},
	{
		href: "#process",
		label: "فرآیند"
	},
	{
		href: "#contact",
		label: "تماس"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-colors duration-(--motion-fast) ease-(--ease-out)", scrolled || open ? "border-b border-border bg-bg/92" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "اصلی",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted transition-colors hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONES[0].tel}`,
						className: "inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent",
						dir: "ltr",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), PHONES[0].display]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "مشاوره رایگان"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "بستن منو" : "باز کردن منو",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border bg-bg px-6 py-8 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-2",
				"aria-label": "موبایل",
				children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "flex h-12 items-center text-lg text-fg",
					children: link.label
				}, link.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						children: "مشاوره رایگان"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONES[0].tel}`,
					className: "inline-flex h-11 items-center justify-center gap-2 text-sm text-muted",
					dir: "ltr",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), PHONES[0].display]
				})]
			})]
		}) : null]
	});
}
function Hero() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(isShowroomOpen());
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduceMotion(mq.matches);
		const onChange = () => setReduceMotion(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate min-h-dvh overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [
				reduceMotion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "",
					className: "size-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "size-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/images/hero.jpg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/videos/hero.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-bg/50 to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-6 pb-24 pt-32 md:pb-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 font-display text-sm tracking-kicker text-accent",
					dir: "ltr",
					children: BRAND.nameEn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mb-8 max-w-xs" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "max-w-3xl text-hero font-medium leading-tight tracking-display text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block md:inline",
							children: "واردات مستقیم"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted md:inline",
							children: " | "
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block md:inline",
							children: "ترخیص تخصصی"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted md:inline",
							children: " | "
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block md:inline",
							children: "رانندگی لوکس"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg",
					children: "نمایشگاه اتو زارع — واردات و ترخیص خودروهای سبک و سنگین، ترانزیت به مناطق آزاد و مشاوره خرید از امارات، کویت، عمان و چین."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cars",
							children: "مشاهده خودروها"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "مشاوره رایگان"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						BRAND.hoursMorning,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-subtle",
							children: "·"
						}),
						BRAND.hoursEvening
					] }), open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: open ? "size-1.5 rounded-full bg-accent" : "size-1.5 rounded-full bg-subtle" }), open ? "اکنون باز است" : "خارج از ساعات کاری"]
					}) : null]
				})
			]
		})]
	});
}
var ICONS = [
	Ship,
	Globe,
	Scale,
	RefreshCcw
];
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4",
			children: TRUST.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("flex min-h-20 items-center justify-center px-4 text-center text-sm text-muted", i > 0 && "md:border-s md:border-border"),
				children: item
			}, item))
		})
	});
}
function FeaturedCars({ onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cars",
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "۰۱ — FEATURED",
				title: "خودروهای ویژه",
				subtitle: "منتخب نمایشگاه؛ کارشناسی‌شده، با اسناد شفاف و امکان بازدید حضوری."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: CARS.map((car, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-3xl border border-border bg-bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-video overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: car.image,
								alt: car.nameFa,
								className: "size-full object-cover transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute start-4 top-4 rounded-sm border border-line bg-bg/70 px-2 py-1 text-2xs tracking-kicker text-accent",
								children: car.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-medium text-fg",
										children: car.nameFa
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-subtle",
										dir: "ltr",
										children: car.nameEn
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: car.year
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: car.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: car.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-sm border border-border px-2 py-1 text-2xs text-muted",
										children: spec
									}, spec))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-subtle",
										children: ["مبدأ: ", car.origin]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										className: "gap-1 px-0 text-accent hover:text-fg",
										onClick: () => onSelect(car),
										children: ["جزئیات", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })]
									})]
								})
							]
						})]
					})
				}, car.id))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "border-y border-border bg-bg-elevated px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "۰۲ — WHY AUTO ZARE",
				title: "چرا اتو زارع؟",
				subtitle: "یک مسیر مشخص، از مشاوره تا پلاک — بدون شلوغی و وعده‌های مبهم."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: ADVANTAGES.map((item, i) => {
					const Icon = ICONS[i] ?? Ship;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delayMs: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-3xl border border-border bg-bg p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-accent",
									strokeWidth: 1.5
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-lg font-medium text-fg",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.body
								})
							]
						})
					}, item.title);
				})
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "۰۳ — PROCESS",
				title: "فرآیند خرید، ساده و شفاف",
				subtitle: "سه مرحله. بدون پیچیدگی اضافه."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3 md:gap-6",
				children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl font-medium text-accent/80",
							dir: "ltr",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-xl font-medium text-fg",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: step.body
						})
					] })
				}, step.n))
			})]
		})
	});
}
function ShowroomBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "showroom",
		className: "relative isolate min-h-96 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/showroom.jpg",
				alt: `نمای شبانه نمایشگاه ${BRAND.nameFa}`,
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-96 max-w-6xl flex-col justify-end px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-kicker text-accent",
						children: ["SHOWROOM — ", BRAND.city]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-xl text-display font-medium text-fg",
						children: "نمایشگاهی که باید از نزدیک دید"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-lg text-muted",
						children: [
							"خودروها زیر نور نمایشگاه، آماده بازدید. ساعات کاری: ",
							BRAND.hoursLabel,
							"."
						]
					})
				] })
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "۰۴ — CLIENTS",
				title: "نظر کسانی که با ما خریده‌اند"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: TESTIMONIALS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "flex h-full flex-col rounded-3xl border border-border bg-bg-elevated p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mb-6 max-w-16" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex-1 text-sm leading-relaxed text-fg/90",
								children: [
									"«",
									item.quote,
									"»"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-subtle",
									children: item.role
								})]
							})
						]
					})
				}, item.name))
			})]
		})
	});
}
function SectionIntro({ kicker, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mb-14 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-xs tracking-kicker text-accent",
				dir: "ltr",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-display font-medium text-fg",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: subtitle
			}) : null
		]
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: WHATSAPP.href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "گفتگو در واتساپ",
		className: "fixed bottom-6 end-6 z-30 inline-flex size-14 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-soft transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-6",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 2.1 17.6L1 23l5.6-1.1A11 11 0 0 0 20.5 3.5m-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.3.7.7-3.2-.2-.3A9.1 9.1 0 1 1 12 20.5m5.2-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.2-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 5.5 5.5 0 0 0 3.4.8 2.9 2.9 0 0 0 1.9-1.3 2.4 2.9 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3" })
		})
	});
}
function HomePage() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [prefill, setPrefill] = (0, import_react.useState)({});
	function inquire(car) {
		setPrefill({
			carName: car.nameFa,
			type: "استعلام موجودی"
		});
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#cars",
				className: "sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg",
				children: "پرش به محتوا"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCars, { onSelect: setSelected }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowroomBand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { prefill })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarDialog, {
				car: selected,
				onClose: () => setSelected(null),
				onInquire: inquire
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				dir: "rtl"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
