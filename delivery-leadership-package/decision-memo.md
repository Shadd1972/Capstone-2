# Decision Memo: ZIP-Code Field — In Scope or Out This Week

**Date:** Tuesday, Day 2
**Author:** Shadd Schutte
**Decision area:** Day 2 scope change request (Inject #1)

## Context

At ~14:00 Tuesday, the project sponsor relayed a request from Marketing to add
a ZIP-code field to the quote form by Thursday for a planned regional-pricing
A/B test. The current delivery goal is: assembled, typed, data-loading, merged
with a green build. The ZIP field is not in the original scope and was
explicitly called out as out of scope in the vision brief.

## Options considered

1. **Option A: Add the ZIP field this week.**
   The form is a provided component — we cannot modify it without stepping
   outside the "assemble, don't author" constraint. Adding a ZIP field requires
   (a) a new `zipCode` field in the `Quote` type, (b) a regional-pricing
   function that does not yet exist in code, and (c) a form change.
   The TypeScript contract makes the cost knowable: every downstream component
   that reads a `Quote` would need updating, and the pricing function would be
   entirely new, unreviewed work. On a Thursday deadline this displaces the
   data-feed and context refactor — the P0 items — and puts the green build
   at risk. Pro: Marketing gets what they asked for. Con: we miss the stated
   delivery goal and ship untested scope.

2. **Option B: Decline this week; log it as a scoped issue for next cycle.**
   Hold scope. The delivery goal stays intact. Marketing's A/B test gets a
   proper implementation with a real pricing function rather than a placeholder.
   The TypeScript contract is the reason the cost is knowable now: we can
   tell Marketing exactly what a correct implementation requires before they
   plan around it. Pro: delivery goal protected, no regressions. Con: Marketing
   cannot start the A/B test this week.

3. **Option C: Add a ZIP field as a UI-only placeholder (no pricing logic).**
   Captures the field visually but does nothing with the value. This would
   mislead Marketing into believing pricing is wired when it is not, and it
   still requires a form change to a provided component. Rejected: the
   deception cost outweighs any scheduling benefit.

## Recommendation

**Option B — decline the ZIP field this week.** Log a scoped issue on the
project board for the next cycle, gated on Marketing delivering a working
pricing table in code.

## Why

The TypeScript type contract makes the cost knowable: a correct ZIP-code
implementation touches the `Quote` interface, the `calculatePremium` function,
and every component that reads a quote. That is not a "just add the box"
change; it is a new feature. Shipping it half-done this week would give
Marketing a false signal about readiness and risk a broken build on the merge
commit — the one artifact the sponsor asked us to protect.

## What would change my mind

If Marketing can deliver a typed regional-pricing function that passes
`npm run type-check` by 09:00 Wednesday, and the sponsor confirms the delivery
goal deadline shifts to Friday, I would revisit. Otherwise the issue goes on
the board for next cycle.
