# Delivery Review: Evergreen Quote

> Five slides OR one page. Target: 5 minutes spoken, then 3 minutes of questions.

## Slide 1: Delivery goal & did we hit it?

- **Goal:** Assemble, type-check, and ship the Evergreen Quote React application with live premium estimation, data-feed-loaded recent quotes, and a green CI build merged to main by end of Day 4.
- Hit? ☑ Yes  ☐ Partially  ☐ No
- The application assembles, passes `npm run type-check`, builds cleanly, and CI is green on the merge commit. A customer can estimate a quote and save it without an account.

## Slide 2: What shipped

- Screenshot of the running Evergreen Quote React app on `main`.
- Link to the merged PR.
- Link to the green CI run (type-check + production build).
- Key behaviors: live premium estimate, data-feed recent quotes with loading/error states, Save this quote button adds to the list instantly.

## Slide 3: Two key decisions

- **Decision 1:** Declined ZIP-code field this week. Why it mattered: the TypeScript contract made the true cost visible — it was a new feature, not a box. Protecting scope protected the delivery goal.
- **Decision 2:** NO-GO on merge while `main` was red (Wednesday hotfix). Why it mattered: merging onto a broken base would have made our CI evidence untrustworthy at this review. Held until `main` was green and rate was sponsor-confirmed.
- (Both documented in `decision-memo.md` and `go-no-go.md`.)

## Slide 4: Risks & injects

- **Top risk tracked (R1):** Rate values producing implausible premiums — triggered on Wednesday when the $3,120 quote came in via support and the hotfix introduced a type error in `premium.ts`. Risk register called the trigger correctly.
- **Inject #1 (Tuesday):** Marketing requested a ZIP-code field by Thursday. Re-prioritized: logged as declined on the task board, decision memo written, sponsor notified EOD. Core P0 items unaffected.
- **Inject #2/#3 (Wednesday):** CI red on `main` + $3,120 support report. Identified the CI failure in plain English, drafted the incidents message routing to the hotfix author, made an explicit NO-GO call on the merge. Held until conditions cleared.

## Slide 5: What I'd do differently next round

- Write the risk register on Day 1, before any injects land — R4 (hotfix breaks main before merge) was predictable and I added it after the fact.
- Set a explicit "scope freeze" checkpoint at Day 2 EOD with the sponsor so mid-week requests have a documented path rather than arriving as ad hoc asks.

## Q&A prep: likely questions

- *"Why didn't you just add the ZIP field? It's one input box."* — Because the TypeScript contract shows it isn't. A correct implementation requires a new type field, a regional pricing function, and a form change to a provided component. That's a feature, not a configuration.
- *"The dev server worked all week — why does a red type-check on main matter?"* — Because the dev server transpiles without enforcing contracts. A red type-check means a value with the wrong shape reached the rate function; the $3,120 quote is what that looks like at runtime. The CI step exists precisely to catch this before it reaches a customer.
