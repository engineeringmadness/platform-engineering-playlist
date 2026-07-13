## Goal
Show each video card with distinct fields: title, presenter name, presenter designation, and event — parsed from today's single `description` string.

## Changes

### 1. `src/types/video.ts`
Extend `Video` with structured fields (keep `description` optional for backwards compat, or drop it since only this app uses it):

```ts
export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  presenter: string;      // e.g. "Gregor Hohpe"
  designation: string;    // e.g. "Principal Evangelist @ AWS"
  event?: string;         // e.g. "PlatformCon 2024" (optional — some entries have none)
}
```

### 2. `src/data/platformEngineeringVideos.ts`
Split each existing description into the new fields. Inferred mapping:

| # | Presenter | Designation | Event |
|---|---|---|---|
| 1 | Emma Dahl Jeppesen & Dan Grøndahl | Platform Advocate @ Velux | The DevOps Conference |
| 2 | Gregor Hohpe | Principal Evangelist @ AWS | PlatformCon 2022 |
| 3 | Gregor Hohpe | Principal Evangelist @ AWS | PlatformCon 2024 |
| 4 | Greg Foster | CTO @ Graphite | — |
| 5 | Punit Lad | Lead Consultant @ Thoughtworks | PlatformCon 2024 |
| 6 | Beyang Liu | CTO @ Sourcegraph | GitKon 2022 |
| 7 | Camille Fournier | CTO & Author | PlatformCon 2025 |
| 8 | Sarah Duncan & Ahmed Bebars | Staff Software Engineer @ The New York Times | PlatformCon 2025 |

### 3. `src/components/VideoCard.tsx`
Replace the single description line with a small metadata block below the title:

- Presenter name — bold, light text
- Designation — muted text, smaller
- Event — cyan accent pill/badge (only when present)

Keep the existing dark theme (`#111a2e` card, `#22d3ee` accent) and the watched check button unchanged.

## Out of scope
No layout, theme, progress, or persistence changes.