# Stakeholder Status Update: Evergreen Quote

**To:** Priya Ramanathan, Project Sponsor
**From:** Shadd Schutte
**Date:** Tuesday EOD

## What shipped today

- All three provided components (QuoteForm, PremiumDisplay, RecentQuotes) assembled into App.tsx and rendering correctly.
- Product title wired through `.env` and confirmed in the browser tab.
- Sponsor rate decision applied to `premium.ts`; estimate updates live on every keystroke.
- QA-flagged type error resolved; coverage-type labels display correctly.

## What slipped (and why)

- Data feed and hooks/context refactor are staged for Day 3 morning as planned; no slip yet.
- ZIP-code field request (see below): **not starting this week.** Adding a ZIP field requires a new typed field in the Quote contract, a regional-pricing function we do not have, and a UI change to the provided form — minimum half a day of unreviewed scope on a Thursday deadline with no pricing table available to us in code. If we say yes, the type-check step and the data-feed work both get displaced, and the core delivery goal (assembled, typed, data-loading, green build, merged) is at risk. The right entry point is a scoped issue on the board for next cycle when the pricing table is ready on both sides.

## What's next (tomorrow)

- Replace `RecentQuotes` with the data-loading version; copy `public/quotes.json`.
- Drop in `useQuoteEstimate` hook and `QuotesContext` provider; wire into App.tsx.
- Enable CI workflow (`.github/workflows/ci.yml`).
- Confirm green build and open PR from `delivery/lead` → `main`.

## What I need from you

1. **ZIP-code field:** Confirmation by 11:00 Wednesday that scope is held this week so Marketing's expectation is managed from your side, not mine.
2. **Flagged dependency:** The platform team's note says the flag is in a dev-time dependency — not in the customer-facing bundle. My recommendation is **ship on the current toolchain this week** and let the platform team take the upgrade in their normal window next week. If your risk posture requires holding, I need to know by 09:00 Wednesday before I cut the final PR. Please confirm one way or the other.


---

# Stakeholder Status Update: Evergreen Quote — Wednesday Inject

**To:** #incidents channel + Priya Ramanathan, Project Sponsor
**From:** Shadd Schutte
**Date:** Wednesday ~14:30

## What I observed

Two things landed at roughly the same time. First, CI on `main` has been red
since Run #23 ("Hotfix: adjust home rate per sponsor note") roughly 40 minutes
ago. The failure is in the type-check step: `src/premium.ts(10,3): error
TS2322: Type 'string' is not assignable to type 'number'` — the hotfix assigned
a string where the contract requires a number. Second, support received a
customer report of a $3,120/month quote for $180,000 of home coverage; the
correct output at the provided rates should be roughly $312/mo.

The two may be related — a string rate value would not crash the app but could
produce wildly wrong arithmetic — but I cannot confirm that from the type error
alone.

## Question for the hotfix author

Can the engineer who pushed Run #23 confirm whether the $3,120 support case is
hitting the hotfix commit, or whether that is a separate pre-existing issue?
That distinction determines whether one fix resolves both problems or whether we
have two independent issues to track.

## Who owns the next step

The engineer who authored the hotfix owns the type-error correction on `main`.
The sponsor (Priya) owns confirming that the corrected home rate value is
intentional before we treat `main` as shippable.

## My branch status and go/no-go call

My `delivery/lead` branch is green. I am calling **NO-GO on merging today**:
I will not merge onto a broken `main` because the merge commit's CI status is
what we present at the delivery review. The moment `main` is green and the rate
is sponsor-confirmed, I will cut the merge same day.

Keep the data-feed work parked where it is — it's done and green on my branch.
I'll move the check-in if we need the time.
