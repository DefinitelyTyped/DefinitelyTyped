The entry point to this script is `index.ts`. It takes a single, optional argument (a tag in node-core), using the current Node `process.version` in lieu of this argument.

What this does is:
- Get the inspector protocol spec at the given tag
- Generate type definitions from it
- Write to `inspector.d.ts`

For example, to bump `inspector.d.ts` to what's exposed in v8.4:
```sh
# cwd = types/node
ts-node scripts/generate-inspector v8.4.0
```

Inspector type definitions should be updated every time the V8 version is bumped in a Node.js release.
