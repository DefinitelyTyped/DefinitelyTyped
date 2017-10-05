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
