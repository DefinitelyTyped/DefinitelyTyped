## First Mate Type Definitions

TypeScript type definitions for [First Mate](https://github.com/atom/first-mate), which is published as "[first-mate](https://www.npmjs.com/package/first-mate)" on NPM.

### Usage Notes

#### Exports

The three classes exported from this module are: [Grammar](https://github.com/atom/first-mate/blob/master/src/grammar.coffee), [GrammarRegistry](https://github.com/atom/first-mate/blob/master/src/grammar-registry.coffee), and [ScopeSelector](https://github.com/atom/first-mate/blob/master/src/scope-selector.coffee).

```ts
import { Grammar, GrammarRegistry, ScopeSelector } from "first-mate";
let selector = new ScopeSelector("a | b");
```

#### The FirstMate Namespace

Many of the types used by First Mate can be referenced from the FirstMate namespace.

```ts
function example(grammar: FirstMate.Grammar) {}
```

### Exposing Private Methods and Properties

[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to augment any of the types used within First Mate. As an example, if we wanted to reveal the private ```getMaxTokensPerLine``` method within the Grammar class, then we would create a file with the following contents:

```ts
// <<filename>>.d.ts

declare namespace FirstMate {
  interface Grammar {
    getMaxTokensPerLine(): number;
  }
}
```

Once this file is either referenced or included within your project, then this new member function would be freely usable on instances of the Grammar class without TypeScript reporting errors.
