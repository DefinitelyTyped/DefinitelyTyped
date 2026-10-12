This is source of the Node.js type definitions, tens of thousand of projects, libraries and millions of working hours of daily compute depend on them to work, a faulty change can have massive cascading effects.

- STRITCLY adhere to semver, changes that may seem non-breaking may be breaking in subtle and unexpected ways, breaking changes MAY be ok if the current definition is explictly and provably faulty.
- For each change you MUST cite a changelog entry from https://github.com/nodejs/node/blob/main/CHANGELOG.md OR docs from https://nodejs.org/docs/latest/api/.
    - The Node.js docs generally do not use generics/template parameters, when modeling function that use them. Uou must proof them locally, for more involved cases the proof should be included in the PR as a TERSE AND REPRODUCIBLE code block.
- Types for hard-deprecated built-ins may be removed, soft deprecations MUST use `@deprecated`.
- Do not add types for function that are already deprecated.
- Ensure your local runtime matches the type definitions you are using.
- Do NOT generate your own JSDoc, use only description from the official docs UNLESS you are documenting quirks with the definitions, be explicit about these.
- All changes must include tests.
    - For testing refer to the root README.md
- Use technical writing language, do not use idioms or rhetorical devices.