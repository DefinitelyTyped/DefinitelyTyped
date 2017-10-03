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
function example(tokens: FirstMate.Tokens[]) {}
```
