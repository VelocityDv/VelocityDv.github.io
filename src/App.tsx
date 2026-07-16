import { useState } from "react";
import { Nav } from "./components/Nav";
import { PipelinePreview } from "./components/PipelinePreview";
import { DashboardPreview } from "./components/DashboardPreview";
import { ProcessMiningPreview } from "./components/ProcessMiningPreview";
import { BookDemoModal } from "./components/BookDemoModal";
import { ArrowRight, Play } from "lucide-react";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  // flips to false when public/demo/quai_demo_2026.mp4 doesn't exist yet
  const [hasVideo, setHasVideo] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav onBookDemo={() => setDemoOpen(true)} />
      {demoOpen && <BookDemoModal onClose={() => setDemoOpen(false)} />}

      {/* Hero / Pitch & Demo */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-primary font-medium mb-8 bg-card"
            style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}
          >
            Introducing Quai
          </div>

          <h1
            className="text-foreground mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--primary)"
            }}
          >
            Data software that actually makes sense.
          </h1>

          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto" style={{ fontSize: "1.15rem", lineHeight: 1.65 }}>
            Quai combines visual pipelines, process mining, and shareable dashboards into a single tool. Build your analysis visually, uncover how your business actually runs, and export insights that anyone can use — no coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              style={{ fontWeight: 500, fontSize: "1.1rem" }}
            >
              Book a demo <ArrowRight size={18} />
            </button>
          </div>

          {/* Demo Video — drop quai_demo_2026.mp4 into public/demo/ to activate */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl mx-auto aspect-video group">
            {/* Minimal UI framing for the video player */}
            <div className="absolute top-0 left-0 right-0 h-12 z-10 bg-background/80 border-b border-border flex items-center px-4 gap-2 backdrop-blur">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>
              <div className="ml-4 text-xs font-mono text-muted-foreground">quai_demo_2026.mp4</div>
            </div>

            {hasVideo ? (
              <video
                src="demo/quai_demo_2026.mp4"
                controls
                className="w-full h-full pt-12 bg-card"
                onError={() => setHasVideo(false)}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/90 text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="ml-1" size={32} fill="currentColor" />
                  </div>
                </div>
                {/* The underlying preview visual */}
                <div className="opacity-40 blur-sm pointer-events-none w-full h-full pt-12">
                  <PipelinePreview />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* The Pitch Continuation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2
              className="text-foreground mb-6"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "var(--primary)" }}
            >
              Why we built Quai
            </h2>
            <p className="text-muted-foreground text-lg mb-8" style={{ lineHeight: 1.7 }}>
              For too long, deep data analysis has been locked behind complex programming languages and disjointed enterprise tools. You shouldn't need a data engineering degree to connect datasets, map your processes, or share interactive insights with your team. We built Quai to give you the building blocks to do it all yourself, in one interconnected platform.
            </p>
        </div>
      </section>

      {/* Interconnected Workflows */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-3 py-1 rounded text-sm border border-accent text-accent bg-accent/10 mb-4 font-mono">
              The Ecosystem
            </div>
            <h2
              className="text-foreground mb-6"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, color: "var(--primary)" }}
            >
              Three workflows. One interconnected engine.
            </h2>
            <p className="text-muted-foreground text-lg" style={{ lineHeight: 1.7 }}>
              Data analysis isn't a single step. It's a pipeline. That's why Quai consists of three distinct modules that pass data seamlessly from one to the next: build your logic, discover the reality of your processes, and distribute the results.
            </p>
          </div>

          <div className="flex flex-col gap-24">

            {/* Flow 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="font-serif text-2xl">1</span>
                </div>
                <h3 className="text-2xl text-primary font-medium mb-4">The Pipeline Builder</h3>
                <p className="text-muted-foreground mb-6" style={{ lineHeight: 1.6 }}>
                  Start here. Drag and drop building blocks to connect sources, clean data, and apply transformations. Think of it as the engine room — this flow structures your raw data so it's ready for deep analysis or dashboarding.
                </p>
                <div className="p-4 bg-background border border-border rounded-lg text-sm text-muted-foreground font-mono">
                  Output: Cleaned datasets, ready for mapping or visualization.
                </div>
              </div>
              <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                <PipelinePreview />
              </div>
            </div>

            {/* Connecting visual */}
            <div className="hidden lg:flex justify-center -my-12 relative z-10">
              <div className="h-24 w-px bg-border flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-accent">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>
            </div>

            {/* Flow 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-background border border-border rounded-xl p-4 shadow-sm">
                <ProcessMiningPreview />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <span className="font-serif text-2xl">2</span>
                </div>
                <h3 className="text-2xl text-primary font-medium mb-4">Process Mining</h3>
                <p className="text-muted-foreground mb-6" style={{ lineHeight: 1.6 }}>
                  Feed the output from your pipeline directly into our process mining engine. It automatically maps out how your business processes actually run based on event logs, revealing hidden bottlenecks and deviations that static data can't show.
                </p>
                <div className="p-4 bg-background border border-border rounded-lg text-sm text-muted-foreground font-mono">
                  Output: Visual process maps and efficiency metrics.
                </div>
              </div>
            </div>

            {/* Connecting visual */}
            <div className="hidden lg:flex justify-center -my-12 relative z-10">
              <div className="h-24 w-px bg-border flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-accent">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>
            </div>

            {/* Flow 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="font-serif text-2xl">3</span>
                </div>
                <h3 className="text-2xl text-primary font-medium mb-4">Dashboard Export</h3>
                <p className="text-muted-foreground mb-6" style={{ lineHeight: 1.6 }}>
                  Finally, take your processed datasets and process maps, and compile them into an interactive dashboard. Export it as a self-contained, read-only file that any stakeholder can open, filter, and explore—without needing a Quai license.
                </p>
                <div className="p-4 bg-background border border-border rounded-lg text-sm text-muted-foreground font-mono">
                  Output: Portable, interactive insights for the whole team.
                </div>
              </div>
              <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                <DashboardPreview />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
          >
            Ready to connect the dots?
          </h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Stop switching between data prep tools, process analyzers, and dashboard builders.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            style={{ fontWeight: 500, fontSize: "1.1rem" }}
          >
            Book a demo <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
              </svg>
            </div>
            <span className="text-muted-foreground text-sm font-medium">Quai · © 2026</span>
          </div>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Product</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
