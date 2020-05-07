## Admin Manual for Definitely Typed

Welcome! This is a resource for the person who is on call for DefinitelyTyped. The TypeScript team always has someone 
assigned to DefinitelyTyped duty, where they do a week on-call. You can see the [schedule here](http://aka.ms/DTRotation).

When on-call, your goal is to try keep on top of the many open PRs for DefinitelyTyped; they are categorized into 
different sections inside the [Projects board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/4) on this repo.

You should scan from left to right through the boards, and ideally try to start at the oldest PR in a section and work 
your way through to the newest. There is a tool: [`focus-dt`](https://github.com/DefinitelyTyped/focus-dt) which can help with this.

Our goals are to provide a stable, high quality ecosystem of type definitions and that requires the compiler team 
making sure that a PR does not break the ecosystem. This work isn't a code review in the usual sense, but an assessment
of how well the changes fit the rest of the type definitions and if it could break builds for our users or our systems. 
With the impact understood, your job is to delegate to the people who actually know how to review the code: users 
of the library who have agreed to look after the types. 

### Looking at a PR

For a [quick TLDR overview, you can read these slides](https://docs.google.com/presentation/d/1Q4xfZSY7d9yHhtxSyb-DE85fTXB38RyF3nnyVyvenwc/edit#slide=id.p).

Some key concepts:

- Popular packages can break more installs, and will need more time and focus
- There are a handful of authors who have shipped a lot of high quality contributions who you can happily delegate to

##### Amending an existing DefinitelyTyped Package

An ideal PR to a DT package looks like:

- A link in the PR description to the API being added
- Only additions to the existing types
- Test code which covers the existing use case

Most of the PRs are like this, in which case then a review for that PR should be pretty quick. Look through the code 
changes, then see if there are comments asking for the merge to be delayed. If not, then you're good to merge. You 
can then leave a thanks comment and hit the merge button.

Constraints which you should consider:

- Will the PR break existing code? 
  - This can sometimes be hard to decipher from the diff, e.g. an additional only PR may break superclasses of a class
  - We try to make sure that types are a semver match on `major.min` for the library they represent
  - A build breaking change therefore can be a trade-off where you have to talk with the library maintainer, and get their sign-offs that it is worth it

- Is it popular? (e.g. do you recognise it) if so, it should probably have two sign-offs
- The PR has merge conflicts, you can try edit the PR using the GitHub UI if it's a trivial change, then come back tomorrow
- The PR has no tests, possibly the package on DT hasn't got tests set up. You can decide if that's a blocker or not depending on how likely the code is going to break existing code
- The `tslint.json` does not have exceptions to the rules in it
- Strict mode is `strict: true` or equivalent four (five?) settings in tsconfig.json
- Make sure export default is actually default in the source.
  
  ```ts
  // Cannot have `export default` in the dts
  modele.exports = {
    thing: () => "hello world"
  }
  ```
  
  vs

  ```ts
  // Can import via `export default`
  modele.exports.default = {
    thing: () => "hello world"
  }
  ```

  `react-*` packages get a pass on this.
- Their `tsconfig.json` should never have `esModuleInterop: true`, which would hide the above issue.


##### New DefinitelyTyped Package

- Is the author also a maintainer of the library? If so, they could use [`--declaration` and `--allowJs`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#--declaration-and---allowjs) in TypeScript to generate their types.

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
