## Admin Manual for Definitely Typed

Welcome! This is a resource for the person who is on call for DefinitelyTyped. The TypeScript team always has someone 
assigned to DefinitelyTyped duty, where they do a week on-call. You can see the [schedule here](http://aka.ms/DTRotation).

When on-call, your goal is to try keep on top of the many open PRs for DefinitelyTyped, they are categorized into 
different sections inside the [Projects board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/4) on this repo.

You should scan from left to right through the boards, and ideally try to start at the latest PR and work your way 
through to the newest.

There is a tool: [`focus-dt`](https://github.com/DefinitelyTyped/focus-dt) which can help with this.

### Looking at a PR

Some useful heuristics for looking at a PR:

##### New DefinitelyTyped Package

- Is the author also a maintainer of the library? If so, they could use [`--declaration` and `--allowJs`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#--declaration-and---allowjs) in TypeScript to generate their types.


##### Amending an existing DefinitelyTyped Package

An ideal PR to a DT package looks like:

- A link in the PR description to the API being added
- Only additions to the existing types
- Test code which covers the existing use case

Most of the PRs are like this, in which case then a review for that PR should be pretty quick. Look through the code 
changes, then see if there are comments asking for the merge to be delayed. If not, then you're good to merge. You 
can then leave a thanks comment and hit the merge button.

Constraints on merging:

- Will the PR break existing code? If so, check that there's a semver bump
- The PR has merge conflicts, you can try edit the PR using the GitHub UI if it's a trivial change, then come back tomorrow
- The PR has no tests, possibly the package on DT hasn't got tests set up. You can decide if that's a blocker or not depending on how likely the code is going to break existing code


### Useful Repos and Links

The process of handling PRs:

- [DT projects](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/4) - an automated board saying where open PRs live
- [dt-merge-bot](https://github.com/RyanCavanaugh/dt-mergebot/) - the bot which sets the labels on PRs, and update's project status
- [dt-merge-bot graphql](https://github.com/RyanCavanaugh/dt-mergebot/tree/use-graphql) - the WIP v2 of the bot to automate the labels/projects
- [focus-dt](https://github.com/DefinitelyTyped/focus-dt) - a tool which controls chrome to load up the next PR to review, so you can focus
- [dtslint](https://github.com/microsoft/dtslint) - the CLI tool used to validate PRs on DefinitelyTyped

The process of deploying changes:

- [types-publisher](https://github.com/microsoft/types-publisher) - when a PR is merged, types-publisher moves the contents to NPM/GitHub Package Repository
- [CI](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build) - the build pipelines on Azure which does most of the work

Recommendations we make:

- [dts-gen](https://github.com/Microsoft/dts-gen) - a tool for creating a DT folder automatically
