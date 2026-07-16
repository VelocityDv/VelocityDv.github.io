import { useState } from "react";
import { X, Copy, Check, Mail } from "lucide-react";

const EMAIL = "edenzhangakl@gmail.com";

export function BookDemoModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6" onClick={onClose}>
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
          <Mail size={22} />
        </div>

        <h3 className="mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.15, color: "var(--primary)" }}>
          Book a demo
        </h3>
        <p className="text-muted-foreground mb-6" style={{ lineHeight: 1.6 }}>
          We'd love to show you Quai in action. Email us and we'll set up a time that works for you.
        </p>

        <div className="flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-lg mb-6">
          <span className="text-foreground truncate" style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>{EMAIL}</span>
          <button onClick={copy} className="text-muted-foreground hover:text-foreground transition-colors shrink-0" title="Copy email" aria-label="Copy email">
            {copied ? <Check size={16} style={{ color: "var(--accent)" }} /> : <Copy size={16} />}
          </button>
        </div>

        <a
          href={`mailto:${EMAIL}?subject=Quai%20demo%20request`}
          className="inline-flex w-full justify-center items-center gap-2 px-8 py-3.5 rounded bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          style={{ fontWeight: 500 }}
        >
          Email us <Mail size={16} />
        </a>
      </div>
    </div>
  );
}
