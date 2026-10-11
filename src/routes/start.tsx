import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Get Started" },
      { name: "description", content: "Get started with your reward." },
      { property: "og:title", content: "Get Started" },
      { property: "og:description", content: "Get started with your reward." },
    ],
  }),
  component: () => <main className="min-h-screen bg-background" />,
});
