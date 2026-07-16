const steps = [
  { id: "A", label: "Order", sub: "Created", x: 40, y: 80, count: 14821 },
  { id: "B", label: "Payment", sub: "Auth", x: 190, y: 30, count: 14612 },
  { id: "C", label: "Fraud", sub: "Check", x: 190, y: 130, count: 14821 },
  { id: "D", label: "Fulfill", sub: "ment", x: 340, y: 80, count: 14388 },
  { id: "E", label: "Shipped", sub: "", x: 490, y: 80, count: 13944 },
];

const flows = [
  { fx: 40 + 52, fy: 80 + 16, tx: 190, ty: 30 + 16, pct: "78%", color: "#3b82f6" },
  { fx: 40 + 52, fy: 80 + 16, tx: 190, ty: 130 + 16, pct: "100%", color: "#22d3ee" },
  { fx: 190 + 52, fy: 30 + 16, tx: 340, ty: 80 + 16, pct: "94%", color: "#3b82f6" },
  { fx: 190 + 52, fy: 130 + 16, tx: 340, ty: 80 + 16, pct: "97%", color: "#22d3ee" },
  { fx: 340 + 52, fy: 80 + 16, tx: 490, ty: 80 + 16, pct: "96%", color: "#34d399" },
];

export function ProcessMiningPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Order-to-Ship Process Map
          </p>
          <p className="text-muted-foreground text-xs mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
            14,821 cases · discovered from event log
          </p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full border border-border text-muted-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}>
            happy path 94.1%
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full border text-accent" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", borderColor: "rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.08)" }}>
            3 deviations
          </span>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <svg viewBox="0 0 590 200" width="100%" style={{ minWidth: 400, display: "block" }}>
          {flows.map((f, i) => {
            const mx = (f.fx + f.tx) / 2;
            return (
              <g key={i}>
                <path
                  d={`M${f.fx},${f.fy} C${mx},${f.fy} ${mx},${f.ty} ${f.tx},${f.ty}`}
                  stroke={f.color}
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.45"
                />
                <text x={(f.fx + f.tx) / 2} y={(f.fy + f.ty) / 2 - 4} textAnchor="middle" fill={f.color} fontSize="8" fontFamily="var(--font-mono)" opacity="0.8">
                  {f.pct}
                </text>
              </g>
            );
          })}

          {steps.map((s) => (
            <g key={s.id}>
              <rect x={s.x} y={s.y} width={52} height={32} rx="4" fill="rgba(13,18,32,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text x={s.x + 26} y={s.y + 11} textAnchor="middle" fill="#e8ecf4" fontSize="7" fontFamily="var(--font-sans)" fontWeight="500">{s.label}</text>
              <text x={s.x + 26} y={s.y + 20} textAnchor="middle" fill="#e8ecf4" fontSize="7" fontFamily="var(--font-sans)" fontWeight="500">{s.sub}</text>
              <text x={s.x + 26} y={s.y + 29} textAnchor="middle" fill="#6b7a99" fontSize="5.5" fontFamily="var(--font-mono)">{s.count.toLocaleString()}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3">
        {[
          { label: "Median duration", value: "7.9 hrs" },
          { label: "Rework rate", value: "5.9%" },
          { label: "Bottleneck", value: "Fulfillment" },
        ].map((m) => (
          <div key={m.label}>
            <p className="text-muted-foreground" style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem" }}>{m.label}</p>
            <p className="text-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 500 }}>{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
