import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CreditCard,
  Mail,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

import heroAsset from "@/assets/rev.png.asset.json";
import { Button } from "@/components/ui/button";

// Change this to your own link whenever you're ready.
export const GET_STARTED_URL = "/start";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get £750 with Revolut — Rewards" },
      { name: "description", content: "Complete simple tasks and get rewarded to your Revolut account." },
      { property: "og:title", content: "Get £750 with Revolut" },
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


const claimants = [
  "Amelia. T from Bristol",
  "Oliver. H from London",
  "Freya. M from Manchester",
  "Noah. W from Leeds",
  "Isla. B from Edinburgh",
  "George. P from Cardiff",
  "Sophie. C from Birmingham",
  "Theo. R from Liverpool",
  "Maya. S from Glasgow",
  "Arthur. J from Newcastle",
];

type Claim = { claimant: string; amount: string; id: number };

const INITIAL_CLAIM: Claim = { claimant: "Amelia. T from Bristol", amount: "48.50", id: 0 };

function randomAmount() {
  const chance = Math.random();
  const [min, max] = chance < 0.45 ? [15, 50] : chance < 0.8 ? [50, 100] : [100, 200];
  return (min + Math.random() * (max - min)).toFixed(2);
}

function nextClaim(previous: Claim): Claim {
  const choices = claimants.filter((claimant) => claimant !== previous.claimant);
  const claimant = choices[Math.floor(Math.random() * choices.length)] ?? "Oliver. H from London";
  return {
    claimant,
    amount: randomAmount(),
    id: previous.id + 1,
  };
}

function Index() {
  const [claim, setClaim] = useState<Claim>(INITIAL_CLAIM);
  const [visible, setVisible] = useState(true);
  const [cacheBuster, setCacheBuster] = useState("");

  useEffect(() => {
    // Cache-buster forces TikTok's webview to request a fresh URL instead of
    // recycling a stale redirect.
    setCacheBuster(`${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`);

    // Preconnect / DNS-prefetch speeds up the first redirect hop when the CTA
    // points at an external offer URL.
    if (/^https?:\/\//.test(GET_STARTED_URL)) {
      const origin = new URL(GET_STARTED_URL).origin;
      for (const rel of ["preconnect", "dns-prefetch"]) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = origin;
        document.head.appendChild(link);
      }
    }
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      timer = setTimeout(() => {
        setVisible(false);
        timer = setTimeout(() => {
          setClaim((c) => nextClaim(c));
          setVisible(true);
          cycle();
        }, 950);
      }, 3000 + Math.random() * 2000);
    };
    cycle();
    return () => clearTimeout(timer);
  }, []);

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <main className="bg-app min-h-screen px-4 pb-8 pt-6 text-foreground sm:pt-10">
      <div className="rise-in glass relative mx-auto w-full max-w-md overflow-hidden rounded-[30px] border border-border bg-card" style={delay(60)}>
        <div className="px-5 pb-6 pt-5">
          <div
            className="frame-hairline rise-in relative overflow-hidden rounded-[22px] bg-secondary"
            style={delay(80)}
          >
            <img
              src={heroAsset.url}
              alt="Revolut promotional artwork"
              width={1920}
              height={1080}
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="rise-in mt-6 text-center" style={delay(120)}>
            <h1 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em]">
              Get £750 with Revolut
            </h1>
            <p className="mx-auto mt-2.5 max-w-[17rem] text-[15px] leading-[1.45] tracking-[-0.01em] text-muted-foreground">
              Complete simple tasks &amp; get rewarded instantly
            </p>
          </div>

          <div className="rise-in mt-5" style={delay(140)}>
            {/* Plain anchor (no JS navigation, no _blank) so TikTok's webview
                treats the tap as safe; the form below is a fallback path since
                webviews almost always let form submissions through. */}
            <form
              action={GET_STARTED_URL}
              method="get"
              className="mx-auto w-[92%]"
            >
              <input type="hidden" name="cb" value={cacheBuster} />
              <Button
                type="submit"
                className="btn-lift h-[52px] w-full rounded-full text-[16px] font-semibold tracking-[-0.01em]"
              >
                Get Started
              </Button>
            </form>
          </div>

          <div className="rise-in mt-4 flex justify-center" style={delay(170)}>
            <div
              className={`claim-fade flex max-w-full items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[12px] tracking-[-0.005em] ${
                visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-0.5 opacity-0 blur-[2px]"
              }`}
              aria-live="polite"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              <p className="truncate text-muted-foreground">
                <span className="text-foreground">{claim.claimant}</span> just received{" "}
                <span className="font-medium text-foreground tabular-nums">£{claim.amount}</span>
              </p>
            </div>
          </div>

          <div className="rise-in mt-5" style={delay(200)}>
            <div className="mb-2 flex items-baseline justify-between text-[12px] tracking-[-0.005em]">
              <span className="text-muted-foreground">Reward progress</span>
              <span className="font-medium tabular-nums">60%</span>
            </div>
            <div className="relative h-2 rounded-full bg-secondary">
              <div className="bar-fill relative h-full w-[60%] overflow-hidden rounded-full">
                <span className="bar-shimmer absolute inset-y-0 left-0 w-1/3" />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">Complete offers to earn!</p>
          </div>

          <section className="rise-in mt-8" style={delay(260)}>
            <h2 className="mb-1 px-1 text-[15px] font-semibold tracking-[-0.015em]">
              How does it work?
            </h2>
            <ol>
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex items-center gap-3.5 px-1 py-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand/30 to-brand-glow/20 ring-1 ring-border">
                    <s.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium leading-5 tracking-[-0.015em]">{s.title}</p>
                    <p className="mt-0.5 text-[13px] leading-[1.35] text-muted-foreground">{s.text}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                  )}
                </li>
              ))}
            </ol>
          </section>

          <div
            className="rise-in mt-5 flex items-center justify-center gap-6 border-t border-border pt-5 text-[13px] text-muted-foreground"
            style={delay(320)}
          >
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" strokeWidth={1.75} />
              Instant payout
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
              Protected
            </span>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-md text-center text-[11px] leading-4 text-muted-foreground/70">
        Not affiliated with TikTok or Revolut.
      </p>
    </main>
  );
}
