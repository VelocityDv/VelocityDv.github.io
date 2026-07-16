import { useState } from "react";
import { Database, Filter, GitMerge, BarChart2, Download } from "lucide-react";

const NODE_W = 112;
const NODE_Y = 68;
const GAP = 35;

const nodePositions = [5, 5 + NODE_W + GAP, 5 + (NODE_W + GAP) * 2, 5 + (NODE_W + GAP) * 3, 5 + (NODE_W + GAP) * 4];

const nodes = [
  { id: "source", x: nodePositions[0], y: NODE_Y, label: "Orders DB",    icon: Database,  color: "#1C3D34", sub: "orders_2024" },
  { id: "filter", x: nodePositions[1], y: NODE_Y, label: "Filter",        icon: Filter,    color: "#C4863C", sub: "status = 'complete'" },
  { id: "join",   x: nodePositions[2], y: NODE_Y, label: "Join Products", icon: GitMerge,  color: "#8A9A94", sub: "product catalog" },
  { id: "agg",    x: nodePositions[3], y: NODE_Y, label: "Sum Revenue",   icon: BarChart2, color: "#1C3D34", sub: "GROUP BY month" },
  { id: "output", x: nodePositions[4], y: NODE_Y, label: "Dashboard",     icon: Download,  color: "#C4863C", sub: "Revenue Overview" },
];

const NODE_CENTER_Y = NODE_Y + 27;

const edges = nodePositions.slice(0, -1).map((x, i) => ({
  fx: x + NODE_W,
  fy: NODE_CENTER_Y,
  tx: nodePositions[i + 1],
  ty: NODE_CENTER_Y,
}));

export function PipelinePreview() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Revenue Pipeline
          </p>
          <p className="text-muted-foreground text-xs mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
            Last run: 2 min ago · 142,884 rows
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors text-xs" style={{ fontFamily: "var(--font-sans)" }}>
          <Download size={12} />
          Export
        </button>
      </div>

      <div className="relative h-52 w-full overflow-x-auto">
        <div className="relative" style={{ minWidth: 730, height: 200 }}>
          <svg className="absolute inset-0" style={{ width: 730, height: 200 }}>
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="rgba(138,154,148,0.8)" />
              </marker>
            </defs>
            {edges.map((e, i) => (
              <line
                key={i}
                x1={e.fx + 3}
                y1={e.fy}
                x2={e.tx - 5}
                y2={e.ty}
                stroke="rgba(138,154,148,0.7)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />
            ))}
          </svg>

          {nodes.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            return (
              <div
                key={n.id}
                className="absolute cursor-pointer transition-all duration-200"
                style={{ left: n.x, top: n.y, width: NODE_W, transform: isActive ? "scale(1.05)" : "scale(1)" }}
                onClick={() => setActive(isActive ? null : n.id)}
              >
                <div
                  className="rounded-lg border p-3 transition-all duration-200"
                  style={{
                    borderColor: isActive ? n.color : `${n.color}55`,
                    background: isActive ? `${n.color}22` : `${n.color}0e`,
                    boxShadow: isActive ? `0 0 12px ${n.color}30` : "none",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={12} style={{ color: n.color }} />
                    <span className="text-foreground truncate" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500 }}>
                      {n.label}
                    </span>
                  </div>
                  <p className="text-muted-foreground truncate" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}>
                    {n.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
