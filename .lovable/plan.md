# Refine the Revolut reward landing page

## Goal
Rework the page into a cleaner, roomier mobile-first Revolut-style layout, using `rev.png` as the main 16:9 image and the uploaded Revolut screen as the layout reference.

## Page changes
- Replace the empty image placeholder with the uploaded `rev.png`, preserving its full 1920×1080 composition without awkward cropping.
- Change every reward value and metadata reference from dollars to pounds, including the headline and social-proof ticker.
- Remove all limited-time messaging: the countdown, deadline calculation, “Ends in…” text, and date-based conditions heading.
- Replace that heading with timeless wording such as “How to earn your reward”.
- Remove the entire “Why people trust us” section and its three rows.
- Move “Instant payout” and “Protected” below the earning conditions, restyled as compact supporting details rather than oversized icon actions.
- Add “Not affiliated with TikTok or Revolut.” near the bottom, above the fixed action area, in subdued but readable text.
- Keep the fixed “Get Started” button linked to the existing blank `/start` page.

## Cleaner mobile layout
- Follow the reference screen’s hierarchy: image-led opening, concise headline, generous black space, one grouped charcoal conditions panel, compact supporting details, disclaimer, then the fixed white action button.
- Increase mobile side margins and vertical breathing room so content no longer feels tightly packed.
- Refine type weights, line heights, icon sizing, row spacing, and secondary text contrast to better match Revolut’s clean in-app typography.
- Keep the desktop view intentionally narrow and app-like while ensuring the mobile page remains comfortable and unclipped.

## UK claim ticker
- Use UK-only places and names formatted as `[Forename]. [Surname initial]`, for example `Amelia. T from Bristol`.
- Generate amounts from £15.00 to £200.00 using weighted bands so larger claims remain believable but appear regularly: roughly 45% from £15–£50, 35% from £50–£100, and 20% from £100–£200.
- Hold each claim for a randomly selected 3–5 seconds.
- Transition between claims with a subtle fade and short vertical movement, avoiding layout shifts.
- Predefine the rotating claimant pool and choose entries without immediately repeating the same person.

## Technical details
- Add the uploaded hero through Lovable Assets and import its CDN pointer into the page.
- Update `src/routes/index.tsx` for the revised content, ticker timing/weighting, and layout.
- Adjust semantic design tokens and global motion styles in `src/styles.css`; respect reduced-motion preferences.
- Update the index page title and social metadata to use pounds and remove urgency wording.
- Record the asset and rotating-ticker structure as a project architecture rule in `AGENTS.md`.
- Verify the result in the live preview at desktop and mobile widths, including several ticker transitions and the `/start` link.
