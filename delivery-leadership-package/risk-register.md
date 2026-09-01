# Risk Register

| # | Risk | Owner | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | Base rate values produce unexpectedly high monthly premiums visible to customers | Sponsor (Priya) | H | H | Confirm rates with sponsor before go-live; validate outputs manually against expected ranges before merge | Any calculated premium appears implausible in testing (e.g., >$500/mo for standard coverage) |
| R2 | Scope creep displaces P0 delivery items (e.g., ZIP field, UI changes) | Delivery Lead | M | H | Hold scope explicitly in vision brief; route all new requests through decision memo before accepting; confirm with sponsor | A mid-week request arrives that would touch the provided component files or the `Quote` type contract |
| R3 | Flagged dev-time dependency (moderate severity) causes CI or build failure before platform team's upgrade window | Platform Team | L | M | Platform team confirms flag is dev-time only, not in customer bundle; ship on current toolchain; re-evaluate if severity increases | Platform team changes severity rating to High, or the dependency failure begins affecting `npm run build` |
| R4 | CI run on `main` goes red from a hotfix or unrelated commit before our PR merge | Engineering | M | H | Always confirm `main` is green before merging; make go/no-go call explicit; do not merge onto a broken base | `main` CI status turns red at any point before the merge commit |
| R5 | Data feed (`public/quotes.json`) unavailable or malformed at runtime causes blank recent-quotes panel | Delivery Lead | L | M | `RecentQuotes` context version handles error state explicitly with a visible message; test the error path locally before PR | Manual smoke test shows a blank panel instead of the error message when the feed is unreachable |

## How I'll use this register

I will re-read this register at the start of each day and after any inject lands.
It is committed in `delivery-leadership-package/` so the sponsor and any
reviewer can see it. Triggers are written as observable conditions — if I see
one, I escalate the same day rather than waiting for the next check-in.
