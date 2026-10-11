# Restyle the lander in the reference app's dark theme

Goal: make the lander feel like a native screen from the reference banking app — pure black, soft charcoal cards, white pill buttons, clean line icons — while keeping your blank 1920x1080 image space and the "Get Started" link.

## Look and feel
- **Colours:** pure black page, charcoal rounded cards (#1C1C1E style), white text, soft grey secondary text, white pill buttons with black text. No colour accents except small green "live" dots.
- **Font:** Inter-style sleek sans (the reference uses this look), semi-bold large headings, regular grey subtext.
- **Icons:** thin, rounded line icons in white, sitting directly on the card (no grey box behind), with grey chevrons where relevant.
- **Shapes:** very rounded cards (about 28px corners), round circular icon buttons, full-width pill CTA.

## New page layout (top to bottom)
1. **Top bar:** round dark back-style button on the left, "All rewards" text link on the right (both decorative).
2. **Hero:** your blank 1920x1080 image space, fading into black at the bottom like the card photo in the reference.
3. **Countdown line:** "Ends in 3 days" small text, then big bold "$750 Apple Cash" headline and grey subline "Complete simple tasks & get rewarded instantly".
4. **Live claim ticker:** small charcoal pill with green dot — "Sarah from Texas just claimed $750" — rotating names (social proof, from your saved conversion notes).
5. **Two round quick-action icons** (like "Report fraud / Lost device"): "Fast payout" and "Secure" — trust anchors.
6. **"How it works" section:** heading in white, then one grouped charcoal card holding the 3 steps (email, 2–3 offers, Apple Pay reward), each with a line icon, title and grey subtext — matching the referral steps card.
7. **Trust row:** grouped card with "Rated Excellent", "Secure & encrypted", "Get help" rows with chevrons.
8. **Sticky bottom CTA:** white full-width "Get Started" pill pinned to the bottom of the screen (like "Invite friends"), always visible on mobile, linking to the blank page.

## Technical details
- Update colour tokens in `src/styles.css` to the dark palette (background, card, foreground, muted-foreground, primary = white, primary-foreground = black); add a hero fade gradient token.
- Swap Geist for Inter in `__root.tsx` font link.
- Rewrite `src/routes/index.tsx` with the sections above using lucide icons (Link2, Smartphone, CreditCard, Zap, ShieldCheck, Star, Lock, LifeBuoy, ChevronRight, ArrowLeft); keep `GET_STARTED_URL` and `HERO_IMAGE_URL` constants; add bottom padding so content isn't hidden behind the sticky button.
- Style the blank `/start` page to match the dark theme.
