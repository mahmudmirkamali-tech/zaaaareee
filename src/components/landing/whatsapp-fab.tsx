import { WHATSAPP } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP.href}
      target="_blank"
      rel="noreferrer"
      aria-label="گفتگو در واتساپ"
      className="fixed bottom-6 end-6 z-30 inline-flex size-14 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-soft transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.6L1 23l5.6-1.1A11 11 0 0 0 20.5 3.5m-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.3.7.7-3.2-.2-.3A9.1 9.1 0 1 1 12 20.5m5.2-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.2-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 5.5 5.5 0 0 0 3.4.8 2.9 2.9 0 0 0 1.9-1.3 2.4 2.9 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3" />
      </svg>
    </a>
  );
}
