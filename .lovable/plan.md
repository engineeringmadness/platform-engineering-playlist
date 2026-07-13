## Goal
Replace the current white background + blue (#38b6ff) accent with a dark theme and a cyan accent throughout the app.

## Proposed palette
- App background: near-black `#0b1220` (deep slate)
- Surface / cards: `#111a2e` with subtle border `#1f2a44`
- Primary text: `#e6f7ff`
- Muted text: `#9aa7bd`
- Accent (cyan): `#22d3ee` (with a slightly brighter `#67e8f9` for hover/glow)

## Changes

1. **`src/pages/Index.tsx`**
   - Page background: `#0b1220` instead of `#ffffff`
   - Heading color: cyan `#22d3ee` instead of `#38b6ff`
   - Description paragraph: light muted `#9aa7bd`

2. **`src/components/VideoCard.tsx`**
   - Card background: `#111a2e`, border `#1f2a44`, title text light, description muted
   - Tick button: unwatched = dark muted; watched = cyan-tinted background with cyan check

3. **`src/components/ProgressBar.tsx`**
   - Track: `#1f2a44`
   - Fill: cyan `#22d3ee`
   - Labels: light muted text

4. **`src/components/Footer.tsx`**
   - Transparent/dark footer background, muted light text, keep Lovable link but in cyan to match the accent

## Out of scope
- No changes to video data, progress-tracking logic, confetti, or layout structure (still two videos per row).
- Not refactoring hardcoded colors into design tokens in `index.css` as part of this pass — keeping the change minimal and matching the existing inline-hex pattern already used in the app.