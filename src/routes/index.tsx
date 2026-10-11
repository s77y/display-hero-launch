import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CircleCheck, CreditCard, ImagePlus, Mail, Smartphone } from "lucide-react";

// Change this to your own link whenever you're ready.
export const GET_STARTED_URL = "/start";

// Set this to your image URL (1920x1080) to replace the blank space.
const HERO_IMAGE_URL = "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$750 Apple Cash — Get Rewarded Instantly" },
      { name: "description", content: "Complete simple tasks & get rewarded instantly." },
      { property: "og:title", content: "$750 Apple Cash" },
      { property: "og:description", content: "Complete simple tasks & get rewarded instantly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: Mail, title: "Enter your email address", text: "For notifications and rewards" },
  { icon: Smartphone, title: "Complete 2–3 simple offers", text: "The more you do, the more you earn" },
  { icon: CreditCard, title: "Receive your Apple Pay reward", text: "Sent directly to your account" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-4 pt-8 pb-12 sm:px-5 sm:py-10">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-center text-[28px] font-extrabold tracking-tight text-foreground sm:text-4xl">
          $750 Apple Cash
        </h1>
        <p className="mt-2 text-center text-[15px] text-muted-foreground">
          Complete simple tasks &amp; get rewarded instantly
        </p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
          {HERO_IMAGE_URL ? (
            <img src={HERO_IMAGE_URL} alt="Reward card" width={1920} height={1080} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-2xl text-muted-foreground">
              <ImagePlus className="h-7 w-7" strokeWidth={1.5} />
              <span className="text-xs font-medium">Your image · 1920 × 1080</span>
            </div>
          )}
        </div>

        <a
          href={GET_STARTED_URL}
          className="mt-6 flex h-14 sm:h-16 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </a>

        <div className="mt-8 flex items-center gap-2.5">
          <CircleCheck className="h-7 w-7 text-foreground" strokeWidth={1.5} />
          <h2 className="text-xl font-bold tracking-tight text-foreground">How It Works</h2>
        </div>

        <ol className="mt-4 space-y-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-[var(--shadow-soft)]">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <s.icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] sm:text-base font-semibold leading-snug text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
