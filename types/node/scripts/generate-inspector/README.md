The entry point to this script is `index.ts`. It takes a single, optional argument (a tag in node-core), using the current Node `process.version` in lieu of this argument.

What this does is:
- Get the inspector protocol spec at the given tag
- Generate type definitions from it
- Write to `inspector.d.ts`

For example, to bump `inspector.d.ts` to what's exposed in v16.0.0:
```sh
# cwd = types/node
ts-node -P scripts/generate-inspector/tsconfig.json scripts/generate-inspector v16.0.0
```

Inspector type definitions should be updated every time the V8 version is bumped in a Node.js release.
