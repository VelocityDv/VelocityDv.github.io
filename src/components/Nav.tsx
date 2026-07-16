import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav({ onBookDemo }: { onBookDemo: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.02em" }} className="text-foreground">
            Quai
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Product", "Contact"].map((item) => (
            <a key={item} href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}>
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={onBookDemo} className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500 }}>
            Book a demo
          </button>
        </div>

        <button className="md:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {["Product", "Contact"].map((item) => (
            <a key={item} href="#" className="text-muted-foreground text-sm">{item}</a>
          ))}
          <button onClick={() => { setOpen(false); onBookDemo(); }} className="w-full py-2 rounded bg-primary text-primary-foreground text-sm font-medium">
            Book a demo
          </button>
        </div>
      )}
    </nav>
  );
}
