# Restyle the lander as a Revolut reward page

Goal: make the lander feel like a native Revolut app screen (like the "Earn per friend" referral page) — pure black, soft charcoal cards, white pill buttons, clean line icons — while keeping your blank 1920x1080 image space and the "Get Started" link.

## Look and feel
- **Colours:** pure black page, charcoal rounded cards (#1C1C1E style), white text, soft grey secondary text, white pill buttons with black text. A subtle Revolut-style blue-to-purple glow only behind the hero, plus small green "live" dots.
- **Font:** Inter (closest free match to Revolut's in-app font), semi-bold large headings, regular grey subtext.
- **Icons:** thin rounded line icons in white sitting directly on the card, grey chevrons on tappable rows.
- **Shapes:** very rounded cards (about 28px), circular icon buttons, full-width pill CTA.

## New page layout (top to bottom)
1. **Top bar:** round dark back button on the left, "All rewards" on the right (decorative, like "All invites").
2. **Hero:** your blank 1920x1080 image space (for your Revolut card image), fading into black at the bottom.
3. **Countdown + headline:** "Ends in 3 days", then big bold "Get $750 with Revolut" and grey subline "Complete simple tasks & get rewarded instantly".
4. **Live claim ticker:** charcoal pill with green dot — "Sarah from Texas just received $750" — rotating names.
5. **Two round quick-action icons** (like "Report fraud / Lost device"): "Instant payout" and "Protected" — trust anchors in Revolut's style.
6. **"You have until [date] to"** heading, then one grouped charcoal card with the steps, written like Revolut's referral list:
   - Sign up with your email — For notifications and rewards
   - Complete 2–3 simple offers — The more you do, the more you earn
   - Receive your reward — Paid to your Revolut account, add it to Apple or Google Pay
7. **Trust card:** rows "Rated Excellent", "Secure & encrypted", "Get help" with chevrons (like the Security screen).
8. **Sticky bottom CTA:** white full-width "Get Started" pill pinned to the bottom (like "Invite friends"), linking to the blank page.

Note: copy stays a promotion "for Revolut users"; no official Revolut logo is added unless you upload one.

## Technical details
- Dark palette tokens in `src/styles.css` (background black, card charcoal, primary white, primary-foreground black) plus a hero glow gradient token.
- Swap Geist for Inter in `__root.tsx`; update page titles/descriptions to the Revolut reward wording.
- Rewrite `src/routes/index.tsx` with lucide icons (ArrowLeft, Mail, Smartphone, CreditCard, Zap, ShieldCheck, Star, Lock, LifeBuoy, ChevronRight); keep `GET_STARTED_URL` and `HERO_IMAGE_URL`; bottom padding for the sticky button.
- Style the blank `/start` page dark to match.
