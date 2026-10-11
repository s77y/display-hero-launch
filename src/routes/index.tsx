import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  CreditCard,
  ImagePlus,
  LifeBuoy,
  Lock,
  Mail,
  ShieldCheck,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";

// Change this to your own link whenever you're ready.
export const GET_STARTED_URL = "/start";

// Set this to your image URL (1920x1080) to replace the blank space.
const HERO_IMAGE_URL = "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get $750 with Revolut — Rewards" },
      { name: "description", content: "Complete simple tasks & get $750 paid to your Revolut account." },
      { property: "og:title", content: "Get $750 with Revolut" },
      { property: "og:description", content: "Complete simple tasks & get rewarded instantly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: Mail, title: "Sign up with your email", text: "For notifications and rewards" },
  { icon: Smartphone, title: "Complete 2–3 simple offers", text: "The more you do, the more you earn" },
  { icon: CreditCard, title: "Receive your reward", text: "Paid to your Revolut account, add it to Apple or Google Pay" },
];

const trust = [
  { icon: Star, title: "Rated Excellent", text: "By thousands of users" },
  { icon: Lock, title: "Secure & encrypted", text: "Your details stay private" },
  { icon: LifeBuoy, title: "Get help", text: "" },
];

const claims = [
  "Sarah from Texas", "James from London", "Maria from Madrid", "Daniel from Ohio",
  "Emma from Dublin", "Luca from Milan", "Chloe from Manchester",
];

function deadline() {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function Index() {
  const [i, setI] = useState(0);
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(deadline());
    const t = setInterval(() => setI((n) => (n + 1) % claims.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-32 text-foreground">
      <div className="mx-auto w-full max-w-lg">
        {/* Hero */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-glow)" }} />
          <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <span className="text-[15px] font-medium">All rewards</span>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            {HERO_IMAGE_URL ? (
              <img src={HERO_IMAGE_URL} alt="Revolut card reward" width={1920} height={1080} className="h-full w-full object-cover" />
            ) : (
              <div className="mx-4 mt-16 mb-2 flex h-[calc(100%-4.5rem)] flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-border text-muted-foreground">
                <ImagePlus className="h-7 w-7" strokeWidth={1.5} />
                <span className="text-xs font-medium">Your image · 1920 × 1080</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0" style={{ background: "var(--hero-fade)" }} />
          </div>
        </div>

        <div className="px-4">
          <p className="mt-2 text-center text-[15px] font-medium">Ends in 3 days</p>
          <h1 className="mt-1 text-center text-[32px] font-bold leading-tight tracking-tight sm:text-4xl">
            Get $750 with Revolut
          </h1>
          <p className="mt-2 text-center text-[15px] text-muted-foreground">
            Complete simple tasks &amp; get rewarded instantly
          </p>

          {/* Live ticker */}
          <div className="mt-5 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span key={i} className="animate-in fade-in duration-500">
                <span className="font-semibold">{claims[i]}</span>
                <span className="text-muted-foreground"> just received $750</span>
              </span>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-7 grid grid-cols-2">
            {[{ icon: Zap, label: "Instant payout" }, { icon: ShieldCheck, label: "Protected" }].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-raised">
                  <a.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="text-[15px] font-medium">{a.label}</span>
              </div>
            ))}
          </div>

          {/* Steps */}
          <h2 className="mt-9 text-lg font-medium">You have until {date || "soon"} to</h2>
          <ol className="mt-3 space-y-6 rounded-[28px] bg-card p-5">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-4">
                <s.icon className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.75} />
                <div className="min-w-0">
                  <p className="text-[16px] font-medium leading-snug">{s.title}</p>
                  <p className="mt-0.5 text-[15px] leading-snug text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Trust */}
          <h2 className="mt-8 text-lg font-medium">Why people trust us</h2>
          <ul className="mt-3 rounded-[28px] bg-card px-5 py-2">
            {trust.map((t) => (
              <li key={t.title} className="flex items-center gap-4 py-4">
                <t.icon className="h-6 w-6 shrink-0" strokeWidth={1.75} />
                <div className="min-w-0 flex-1">
                  <p className="text-[16px] font-medium">{t.title}</p>
                  {t.text && <p className="text-[15px] text-muted-foreground">{t.text}</p>}
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-background via-background/90 to-transparent px-4 pb-6 pt-8">
        <a
          href={GET_STARTED_URL}
          className="mx-auto flex h-14 w-full max-w-lg items-center justify-center rounded-full bg-primary text-[17px] font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
