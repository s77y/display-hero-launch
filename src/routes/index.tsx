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

const INITIAL_CLAIM: Claim = { claimant: claimants[0], amount: "48.50", id: 0 };

function randomAmount() {
  const chance = Math.random();
  const [min, max] = chance < 0.45 ? [15, 50] : chance < 0.8 ? [50, 100] : [100, 200];
  return (min + Math.random() * (max - min)).toFixed(2);
}

function nextClaim(previous: Claim): Claim {
  const choices = claimants.filter((claimant) => claimant !== previous.claimant);
  return {
    claimant: choices[Math.floor(Math.random() * choices.length)],
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
    <main className="min-h-screen bg-background pb-36 text-foreground">
      <div className="mx-auto w-full max-w-xl overflow-hidden">
        <div className="px-5 pt-5 sm:px-7 sm:pt-7">
          <div className="aspect-video overflow-hidden rounded-[28px] bg-card">
            <img
              src={heroAsset.url}
              alt="Revolut promotional artwork"
              width={1920}
              height={1080}
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="mt-9 text-center text-[34px] font-bold leading-[1.08] sm:text-[40px]">
            Get £750 with Revolut
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-center text-base leading-6 text-muted-foreground">
            Complete simple tasks &amp; get rewarded instantly
          </p>

          <div className="mt-7 min-h-12 rounded-2xl bg-card px-4 py-3 text-center text-sm leading-6">
            <div key={claim.id} className="claim-enter flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <p>
                <span className="font-semibold">{claim.claimant}</span>
                <span className="text-muted-foreground"> just received </span>
                <span className="font-semibold">£{claim.amount}</span>
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold leading-7">How to earn your reward</h2>
          <ol className="mt-4 space-y-7 rounded-[28px] bg-card px-5 py-7 sm:px-6">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-4 sm:gap-5">
                <s.icon className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[17px] font-medium leading-6">{s.title}</p>
                  <p className="mt-1 text-[15px] leading-[1.45] text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-card px-4 py-4">
              <Zap className="h-5 w-5 shrink-0" strokeWidth={1.8} />
              <span className="text-sm font-medium">Instant payout</span>
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-card px-4 py-4">
              <ShieldCheck className="h-5 w-5 shrink-0" strokeWidth={1.8} />
              <span className="text-sm font-medium">Protected</span>
            </div>
          </div>

          <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
            Not affiliated with TikTok or Revolut.
          </p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur sm:px-7">
        <Button asChild className="mx-auto flex h-14 w-full max-w-xl rounded-full text-[17px] font-semibold shadow-none active:scale-[0.98]">
          <a href={GET_STARTED_URL}>Get Started</a>
        </Button>
      </div>
    </main>
  );
}
