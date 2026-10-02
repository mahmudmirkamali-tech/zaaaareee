import { useState } from "react";
import { Toaster } from "sonner";
import { CarDialog } from "@/components/landing/car-dialog";
import { Contact, type ContactPrefill } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import {
  FeaturedCars,
  Process,
  ShowroomBand,
  Testimonials,
  TrustBar,
  WhyUs,
} from "@/components/landing/sections";
import { WhatsappFab } from "@/components/landing/whatsapp-fab";
import type { Car } from "@/lib/site";

export function HomePage() {
  const [selected, setSelected] = useState<Car | null>(null);
  const [prefill, setPrefill] = useState<ContactPrefill>({});

  function inquire(car: Car) {
    setPrefill({ carName: car.nameFa, type: "استعلام موجودی" });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#cars"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        پرش به محتوا
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedCars onSelect={setSelected} />
        <WhyUs />
        <Process />
        <ShowroomBand />
        <Testimonials />
        <Contact prefill={prefill} />
      </main>
      <Footer />
      <WhatsappFab />
      <CarDialog car={selected} onClose={() => setSelected(null)} onInquire={inquire} />
      <Toaster theme="dark" position="top-center" dir="rtl" />
    </div>
  );
}
