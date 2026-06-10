export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CompassIcon />
            <span className="font-semibold text-lg tracking-tight text-slate-900">
              Axis <span className="text-brand-600">Compass</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Get started free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-glow pt-40 pb-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-brand-100">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            Now in public beta
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Navigate complexity with{" "}
            <span className="gradient-text">strategic clarity</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Axis Compass transforms scattered data, stakeholder input, and market signals
            into a single source of directional truth — so your team always knows where
            you're headed and why.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-indigo-200"
            >
              Start for free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl text-base border border-slate-200 transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">No credit card required · 14-day free trial</p>
        </div>

        {/* Hero mockup */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 bg-white overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 flex-1 bg-white rounded border border-slate-200 text-xs text-slate-400 px-3 py-1 max-w-xs">
                app.axiscompass.io/dashboard
              </span>
            </div>
            <div className="p-8 grid grid-cols-3 gap-4 min-h-64">
              <DashboardCard title="Strategic Alignment" value="94%" trend="+6%" color="brand" />
              <DashboardCard title="Initiatives on Track" value="12/15" trend="80%" color="green" />
              <DashboardCard title="Risk Exposure" value="Low" trend="↓ 3 items" color="amber" />
              <div className="col-span-2 rounded-xl bg-slate-50 border border-slate-100 p-4">
                <p className="text-xs font-semibold text-slate-500 mb-3">Priority Roadmap — Q3 2026</p>
                <div className="space-y-2">
                  {[
                    { label: "Market Expansion — EMEA", pct: 75, color: "bg-brand-500" },
                    { label: "Platform v2 Launch", pct: 55, color: "bg-indigo-400" },
                    { label: "Enterprise Sales Motion", pct: 40, color: "bg-violet-400" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>{item.label}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                <p className="text-xs font-semibold text-slate-500 mb-3">Recent Signals</p>
                <div className="space-y-2">
                  {[
                    { dot: "bg-green-400", text: "NPS up 8 pts" },
                    { dot: "bg-amber-400", text: "CAC increased 12%" },
                    { dot: "bg-brand-500", text: "New competitor entered" },
                  ].map((s) => (
                    <div key={s.text} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} />
                      {s.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-y border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by strategy teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-50 grayscale">
            {["Meridian Group", "Vantage Labs", "Helix Capital", "NorthStar Co", "Stratum AI"].map((name) => (
              <span key={name} className="text-sm font-bold text-slate-500">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything your strategy needs</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              One platform to capture signals, align stakeholders, and track what matters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<SignalIcon />}
              title="Signal aggregation"
              description="Pull in market data, customer feedback, competitor moves, and internal KPIs into one unified feed. No more dashboard hopping."
            />
            <FeatureCard
              icon={<AlignIcon />}
              title="Stakeholder alignment"
              description="Run structured decision workshops, capture dissent, and build a shared record of what was decided and why."
            />
            <FeatureCard
              icon={<RoadmapIcon />}
              title="Adaptive roadmapping"
              description="Your roadmap updates as conditions change. Compass surfaces conflicts and drift before they become missed quarters."
            />
            <FeatureCard
              icon={<InsightIcon />}
              title="AI-powered insights"
              description="Natural language summaries of your strategic posture, risk exposure, and opportunity landscape — generated on demand."
            />
            <FeatureCard
              icon={<IntegrateIcon />}
              title="Native integrations"
              description="Jira, Notion, Salesforce, Slack and 40+ other tools. Compass sits on top of your stack, not inside it."
            />
            <FeatureCard
              icon={<AuditIcon />}
              title="Decision audit trail"
              description="Every fork in the road is logged with context, owners, and outcomes. Onboard new leaders in hours, not months."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-28 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Up and running in minutes</h2>
            <p className="text-lg text-slate-500">Three steps to strategic clarity.</p>
          </div>
          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Connect your sources",
                desc: "Link your existing tools in one click. Compass pulls data, not opinions — so your team can focus on decisions.",
              },
              {
                step: "02",
                title: "Define your priorities",
                desc: "Set your strategic objectives and weight them. Compass automatically scores incoming signals against what matters most to you.",
              },
              {
                step: "03",
                title: "Navigate with confidence",
                desc: "Get a live directional view of your business. Share boards with your leadership team, board, or investors.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
                  {step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-500">Start free. Scale when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              tier="Starter"
              price="Free"
              period=""
              description="For solo strategists and early-stage teams."
              features={["3 strategic objectives", "5 connected sources", "30-day signal history", "Community support"]}
              cta="Get started"
              highlight={false}
            />
            <PricingCard
              tier="Growth"
              price="$49"
              period="/mo"
              description="For teams who need depth and collaboration."
              features={["Unlimited objectives", "25 connected sources", "Full signal history", "Stakeholder alignment tools", "Priority support"]}
              cta="Start free trial"
              highlight={true}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              period=""
              description="For organisations with complex requirements."
              features={["Everything in Growth", "SSO & SCIM", "Custom integrations", "Dedicated CSM", "SLA & audit logs"]}
              cta="Contact sales"
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-brand-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your strategy deserves a better compass
          </h2>
          <p className="text-indigo-300 text-lg mb-10 leading-relaxed">
            Join hundreds of teams who stopped guessing and started navigating.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl text-base hover:bg-brand-50 transition-colors"
          >
            Start free — no card needed
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CompassIcon />
            <span className="font-semibold text-slate-700">
              Axis <span className="text-brand-600">Compass</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">© 2026 Axis Consulting. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── Small components ──────────────────────────────────────────────────────────

function CompassIcon() {
  return (
    <svg className="w-7 h-7 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="12,2 15,12 12,22 9,12" fill="currentColor" opacity="0.2" />
      <polyline points="12,2 15,12 12,22" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12,2 9,12 12,22" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
    </svg>
  );
}

function DashboardCard({
  title, value, trend, color,
}: {
  title: string; value: string; trend: string; color: "brand" | "green" | "amber";
}) {
  const colors = {
    brand: "text-brand-600 bg-brand-50",
    green: "text-green-600 bg-green-50",
    amber: "text-amber-600 bg-amber-50",
  };
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
      <p className="text-xs font-semibold text-slate-500 mb-2">{title}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <span className={`mt-1 inline-block text-xs font-medium px-2 py-0.5 rounded-full ${colors[color]}`}>
        {trend}
      </span>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-100 hover:border-brand-100 hover:shadow-md hover:shadow-indigo-50 transition-all">
      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({
  tier, price, period, description, features, cta, highlight,
}: {
  tier: string; price: string; period: string; description: string;
  features: string[]; cta: string; highlight: boolean;
}) {
  return (
    <div className={`rounded-2xl p-8 flex flex-col ${highlight ? "bg-brand-600 text-white shadow-xl shadow-indigo-200 scale-105" : "border border-slate-200 text-slate-900"}`}>
      <p className={`text-sm font-semibold mb-1 ${highlight ? "text-indigo-200" : "text-slate-500"}`}>{tier}</p>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className={`text-sm ${highlight ? "text-indigo-200" : "text-slate-400"}`}>{period}</span>
      </div>
      <p className={`text-sm mb-6 ${highlight ? "text-indigo-200" : "text-slate-500"}`}>{description}</p>
      <ul className="space-y-2 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className={`flex items-center gap-2 text-sm ${highlight ? "text-white" : "text-slate-600"}`}>
            <svg className={`w-4 h-4 shrink-0 ${highlight ? "text-indigo-200" : "text-brand-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`text-center font-semibold py-3 rounded-xl text-sm transition-colors ${highlight ? "bg-white text-brand-700 hover:bg-brand-50" : "bg-brand-600 text-white hover:bg-brand-700"}`}
      >
        {cta}
      </a>
    </div>
  );
}

// ── Icon components ───────────────────────────────────────────────────────────

function SignalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function AlignIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function RoadmapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}
function InsightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function IntegrateIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function AuditIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
