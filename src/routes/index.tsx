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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const scheduleClaim = () => {
      timer = setTimeout(() => {
        setClaim((current) => nextClaim(current));
        scheduleClaim();
      }, 3000 + Math.random() * 2000);
    };

    scheduleClaim();
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-28 text-foreground">
      <div className="mx-auto w-full max-w-md">
        <div className="px-4 pt-4">
          <div className="aspect-video overflow-hidden rounded-2xl bg-card">
            <img
              src={heroAsset.url}
              alt="Revolut promotional artwork"
              width={1920}
              height={1080}
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="mt-6 text-center text-[28px] font-semibold leading-[1.15] tracking-[-0.03em]">
            Get £750 with Revolut
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-center text-[15px] leading-[1.4] tracking-[-0.01em] text-muted-foreground">
            Complete simple tasks &amp; get rewarded instantly
          </p>

          <div className="mt-5 flex h-11 items-center justify-center overflow-hidden rounded-full bg-card px-4 text-[13px]">
            <div key={claim.id} className="claim-enter flex min-w-0 items-center justify-center gap-2">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              <p className="truncate tracking-[-0.01em]">
                <span className="font-medium">{claim.claimant}</span>
                <span className="text-muted-foreground"> just received </span>
                <span className="font-semibold">£{claim.amount}</span>
              </p>
            </div>
          </div>

          <h2 className="mb-2 mt-8 px-1 text-[17px] font-semibold tracking-[-0.02em]">How to earn your reward</h2>
          <ol className="divide-y divide-border overflow-hidden rounded-2xl bg-card">
            {steps.map((s) => (
              <li key={s.title} className="flex items-center gap-3.5 px-4 py-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary">
                  <s.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium leading-5 tracking-[-0.015em]">{s.title}</p>
                  <p className="mt-0.5 text-[13px] leading-[1.35] tracking-[-0.005em] text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-card px-4 py-3.5">
              <Zap className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
              <span className="text-[13px] font-medium tracking-[-0.01em]">Instant payout</span>
            </div>
            <div className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-card px-4 py-3.5">
              <ShieldCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
              <span className="text-[13px] font-medium tracking-[-0.01em]">Protected</span>
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] leading-4 text-muted-foreground">
            Not affiliated with TikTok or Revolut.
          </p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-background from-70% to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-6">
        <Button asChild className="mx-auto flex h-12 w-full max-w-md rounded-full text-[16px] font-semibold tracking-[-0.01em] shadow-none active:scale-[0.98]">
          <a href={GET_STARTED_URL}>Get Started</a>
        </Button>
      </div>
    </main>
  );
}
