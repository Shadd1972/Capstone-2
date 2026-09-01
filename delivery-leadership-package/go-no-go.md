# Go / No-Go: Merge Decision

**Date / time:** Wednesday ~14:30
**Decision:** ☐ GO   ☑ NO-GO   ☐ GO WITH CONDITIONS

> **Update — revised call after CI investigation:**
> See "My call" section. Initial assessment recorded below for the record.

## CI evidence

- Latest run on `delivery/lead`: **GREEN** · (link: your branch run URL)
- Latest run on `main`: **RED** — Run #23 "Hotfix: adjust home rate per sponsor note"
- Workflow file: `.github/workflows/ci.yml`
- What the workflow actually checked:
  - ✅ Check out the code
  - ✅ Set up Node 22
  - ✅ Install dependencies from lock file
  - ✗ **Type-check failed** — `src/premium.ts(10,3): error TS2322: Type 'string' is not assignable to type 'number'`
  - ⏭ Production build: skipped (blocked by type-check failure)

## What the CI failure means in plain English

The hotfix commit on `main` assigned a string value (e.g., `"130"`) to a
`BASE_RATES` field that the TypeScript contract requires to be a number. The
compiler caught it and stopped the build. The type contract is working exactly
as designed — it surfaced a rate-entry error before it could reach production.

## Connection to the $3,120 quote

The $3,120/month figure for $180,000 of home coverage is consistent with a
rate value that is off by a factor of roughly 10× (correct output would be
~$312/mo at the provided rates). Whether the support ticket is hitting the
hotfix commit or a pre-existing rate entry needs to be confirmed by the
engineer who authored the hotfix — that is not a call I can make from the
type error alone.

## What "GO" would mean

- Merge `delivery/lead` → `main`, squash, delete branch.
- Tag the merge commit `phase-2`.
- **This is not viable today**: merging onto a broken `main` makes the merge
  commit's CI status undefined. The green build evidence we need to show at
  the review would be tainted.

## What "NO-GO" would mean

- Hold the merge until `main` CI is green (hotfix type error resolved and
  the corrected rate value is confirmed by the sponsor).
- Owner of that condition: the engineer who pushed the hotfix / platform team.
- Re-evaluate at: as soon as `main` run is green — could be same day if
  the fix is a one-line correction.

## My call

**NO-GO.** My branch is green; `main` is red. I will not merge onto a broken
base — the merged commit's CI status is what we present at the delivery review,
and it needs to be unambiguously green. The one thing that drives this call is
the red `main` run: a type error in `premium.ts` introduced by the hotfix means
the rate values on `main` are unvalidated. What would flip it: `main` goes green
AND the sponsor confirms the corrected home rate is intentional (to rule out
the $3,120 incident being a second issue rather than the same one).
