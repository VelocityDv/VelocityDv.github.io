import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, ReferenceLine } from "recharts";

const revenueData = [
  { month: "Jan", value: 412000 },
  { month: "Feb", value: 389000 },
  { month: "Mar", value: 521000 },
  { month: "Apr", value: 608000 },
  { month: "May", value: 574000 },
  { month: "Jun", value: 712000 },
  { month: "Jul", value: 689000 },
  { month: "Aug", value: 834000, projected: true },
];

const processData = [
  { step: "Order",     duration: 0.2 },
  { step: "Payment",   duration: 1.4 },
  { step: "Fulfill",   duration: 3.1 },
  { step: "Shipping",  duration: 2.8 },
  { step: "Delivered", duration: 0.5 },
];

const kpis = [
  { label: "Total Revenue",    value: "$4.74M", delta: "+18.2%", up: true },
  { label: "Avg. Cycle Time",  value: "7.9 hrs", delta: "-12%",  up: true },
  { label: "Process Variants", value: "24",      delta: "+3",    up: false },
  { label: "Conformance",      value: "91.4%",   delta: "+2.1%", up: true },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded border border-border bg-card px-3 py-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
        <p className="text-muted-foreground">{label}</p>
        <p style={{ color: "var(--accent)" }}>${(payload[0].value / 1000).toFixed(0)}k</p>
      </div>
    );
  }
  return null;
};

export function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-foreground text-xs font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            Revenue &amp; Process Overview
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs" style={{ fontFamily: "var(--font-mono)" }}>view-only</span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded border border-border text-muted-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}>
            exported
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-lg border p-3"
              style={{
                background: "rgba(28, 61, 52, 0.06)",
                borderColor: "rgba(28, 61, 52, 0.18)",
              }}
            >
              <p className="text-muted-foreground mb-1" style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem" }}>{k.label}</p>
              <p className="text-foreground" style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{k.value}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: k.up ? "#2d7a5a" : "#c4863c" }}>{k.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 min-w-0">
            <p className="text-muted-foreground mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}>Monthly Revenue</p>
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart data={revenueData} margin={{ top: 4, right: 18, left: -20, bottom: 0 }} accessibilityLayer={false}>
                <defs>
                  <linearGradient id="quaiRevGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#1C3D34" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#1C3D34" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#8A9A94", fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#8A9A94", fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v / 1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine x="Aug" stroke="#C4863C" strokeDasharray="3 3" strokeWidth={1.5} label={{ value: "current", position: "top", fontSize: 9, fill: "#C4863C", fontFamily: "var(--font-mono)" }} />
                <Area type="monotone" dataKey="value" stroke="#1C3D34" strokeWidth={1.5} fill="url(#quaiRevGrad)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="md:col-span-2 min-w-0">
            <p className="text-muted-foreground mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}>Avg. Step Duration (hrs)</p>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={processData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }} accessibilityLayer={false}>
                <XAxis type="number" tick={{ fontSize: 9, fill: "#8A9A94", fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} />
                <YAxis dataKey="step" type="category" tick={{ fontSize: 9, fill: "#8A9A94", fontFamily: "var(--font-mono)" }} axisLine={false} tickLine={false} width={65} />
                <Tooltip cursor={{ fill: "rgba(28,61,52,0.04)" }} />
                <Bar dataKey="duration" fill="#C4863C" radius={[0, 3, 3, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
