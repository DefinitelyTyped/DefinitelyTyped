# TypeScript types for Bun

<p align="center">
  <a href="https://bun.sh"><img src="https://bun.sh/logo@2x.png" alt="Logo"></a>
</p>

These are the type definitions for Bun's JavaScript runtime APIs.

# Installation

Install the `@types/bun` npm package:

```bash
# yarn/npm/pnpm work too, "@types/bun" is an ordinary npm package
bun add -d @types/bun
```

# Usage

Add this to your `tsconfig.json` or `jsconfig.json`:

```jsonc-diff
  {
    "compilerOptions": {
+     "types": ["@types/bun"]
      // other options...
    }

    // other options...
  }
```

# Contributing

If you add a new file, don't forget to add a [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) pointing to it inside [./index.d.ts](./index.d.ts).

```diff
+ /// <reference path="./newfile.d.ts" />
```
