import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { PHONES, WHATSAPP, type Car } from "@/lib/site";

export function CarDialog({
  car,
  onClose,
  onInquire,
}: {
  car: Car | null;
  onClose: () => void;
  onInquire: (car: Car) => void;
}) {
  return (
    <Dialog open={Boolean(car)} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto p-0">
        {car ? (
          <>
            <div className="relative aspect-video overflow-hidden">
              <img src={car.image} alt={car.nameFa} className="size-full object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs tracking-kicker text-accent">{car.tag}</p>
              <DialogTitle className="mt-2 text-2xl font-medium text-fg">
                {car.nameFa}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-subtle" dir="ltr">
                {car.nameEn} — {car.year}
              </DialogDescription>
              <p className="mt-5 text-sm leading-relaxed text-muted">{car.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {car.specs.map((spec) => (
                  <li
                    key={spec}
                    className="rounded-sm border border-border px-2 py-1 text-2xs text-muted"
                  >
                    {spec}
                  </li>
                ))}
                <li className="rounded-sm border border-border px-2 py-1 text-2xs text-muted">
                  مبدأ: {car.origin}
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">قیمت: تماس بگیرید</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="flex-1"
                  onClick={() => {
                    onInquire(car);
                    onClose();
                  }}
                >
                  درخواست این خودرو
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={WHATSAPP.href} target="_blank" rel="noreferrer">
                    واتساپ
                  </a>
                </Button>
              </div>
              <a
                href={`tel:${PHONES[0].tel}`}
                className="mt-4 block text-center text-sm text-subtle hover:text-accent"
                dir="ltr"
              >
                {PHONES[0].display}
              </a>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
