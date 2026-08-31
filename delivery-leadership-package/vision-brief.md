# Evergreen Quote: Vision Brief

## Product
**Name:** Evergreen Insurance Quote (Phase 2 React rebuild)
**Delivery week:** 2
**Delivery Lead:** Shadd Schutte
**Engineering team (represented by):** https://github.com/Shadd1972/Capstone-2.git
**GitHub Project board:** https://github.com/Shadd1972/Capstone-2/projects

## Who is the customer?
Our primary customer is a first-time or relatively inexperienced insurance shopper who needs to quickly understand what coverage may cost before making a commitment. This could include a young adult purchasing auto insurance for the first time, a new renter, or a new homeowner who needs coverage soon and is comparing options across multiple insurance providers. They expect a simple, responsive experience that lets them explore different coverage choices and immediately understand how those choices affect their estimated premium without creating an account or waiting for someone to contact them.

## What pain does Evergreen Quote remove?
Insurance shoppers often want to explore several possibilities before deciding what coverage makes sense for them. Having to enter information, submit it, wait for a result, and repeat the process makes comparison slower and more frustrating than it needs to be. The Phase 2 Evergreen Quote experience removes that friction by updating the estimated premium as the customer changes their information, showing recent quote examples for additional context, and allowing a quote to be saved for comparison. The customer can experiment with coverage choices and immediately see the impact without repeatedly restarting or resubmitting the quote process.

## What does "good" look like at end of the week?
-  A customer can enter and change quote information and see the estimated premium update immediately for the supported auto, home, and life coverage options.
-  Recent quotes successfully load from the data feed, with the application providing visible loading, success, and error states instead of displaying a blank area.
-  A customer can save the current quote and see it immediately added to the recent-quotes list.
-  Type-checking and the production build complete successfully, and GitHub Actions reports a successful CI run.
-  The completed application is reviewed through a pull request, merged into main, and can be demonstrated end-to-end from the production-ready build.

## What are we explicitly NOT doing this week?

- We are not adding additional coverage products, regional or ZIP-code-based pricing, or other new quoting options beyond the defined scope.
- We are not building or integrating a production insurance rating engine; the provided rate model and sponsor-approved rates remain the basis for quote estimates.
- We are not adding customer accounts, authentication, email capture, or persistent storage of saved quotes.
- We are not redesigning or independently refactoring the provided application components beyond the assembly and configuration work defined for the capstone.
- We are not upgrading or replacing the provided React, TypeScript, Vite, or other project tooling during the delivery week.

## How will we know if it worked?
We will know the delivery succeeded when a stakeholder can use the completed application from start to finish without explanation or workarounds: change quote information and see the estimate respond immediately, view recent quotes loaded from the data feed, and save a new quote into the list. The application should also handle loading and data-feed failures with a visible message rather than leaving the customer with a blank experience. From a delivery perspective, success means the TypeScript checks and production build pass, CI is green, and the completed work has been reviewed and merged into main through the expected pull-request process.

