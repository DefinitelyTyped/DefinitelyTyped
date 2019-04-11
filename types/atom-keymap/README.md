## Atom Keymap Type Definitions

TypeScript type definitions for [Atom Keymap](https://github.com/atom/atom-keymap), which is published as "[atom-keymap](https://www.npmjs.com/package/atom-keymap)" on NPM.

### Usage Notes

#### Exports

This module has a single entity as its export: the [KeymapManager](https://github.com/atom/atom-keymap/blob/master/src/keymap-manager.coffee) class. The require syntax is typically used to import modules like this.

```ts
import KeymapManager = require("atom-keymap");
```

#### The AtomKeymap Namespace

Many of the types used by Atom Keymap can be referenced from the AtomKeymap namespace.

```ts
function example(keybind: AtomKeymap.KeyBinding) {}
```

### Exposing Private Methods and Properties

[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to augment any of the types used within Atom Keymap. As an example, if we wanted to reveal the private ```partialMatchTimeout``` property within the KeymapManager class, then we would create a file with the following contents:

```ts
// <<filename>>.d.ts

declare namespace AtomKeymap {
  interface KeymapManager {
    partialMatchTimeout: number;
  }
}
```

Once this file is either referenced or included within your project, then this new property would be freely usable on instances of the KeymapManager class without TypeScript reporting errors.
