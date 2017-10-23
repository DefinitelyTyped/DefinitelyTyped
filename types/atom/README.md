## Atom API Type Definitions

TypeScript type definitions for the [Atom Text Editor](https://atom.io/) public API, which is used to develop packages for the editor. Documentation for the public API can be found [here](https://atom.io/docs/api/v1.21.0/).

### Exports

#### The "atom" Variable

These definitions declare a global static variable named "atom" as ambient. Once these definitions have been referenced within your project, you will be able to access properties and member functions from the [AtomEnvironment](https://atom.io/docs/api/v1.21.0/AtomEnvironment) class off of this variable, as it is an instance of that class.

```ts
if (atom.inDevMode()) {}
```

#### The Atom Namespace

All of the types used by or referenced by the Atom public API have been pulled into the Atom namespace, providing a consistent and easy way to access each of them, without having to care about where that type actually lives within the Atom codebase.

```ts
function example(buffer: Atom.TextBuffer) {}
```

#### The AtomCore Namespace

All classes which are core to Atom itself have been provided under the AtomCore namespace.

```ts
function example(cursor: AtomCore.Cursor) {}
```

### Service Type Definitions

There are many services provided by other Atom packages that you may want to use within your own Atom package. We bundle type definitions for several of these services with these type definitions. All type definitions for services are available only through ES6 imports.

```ts
import { AutocompleteProvider } from "atom/autocomplete-plus";
let completionProvider: AutocompleteProvider;
```

The currently supported services are:
- [Autocomplete](https://github.com/atom/autocomplete-plus) (atom/autocomplete-plus)
- [Linter](https://github.com/atom/linter) (atom/linter)
- [Status Bar](https://github.com/atom/status-bar) (atom/status-bar)

### Exposing Private Methods and Properties

[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to augment any of the types used within Atom. As an example, if we wanted to reveal the private ```triggerActivationHook``` method within the PackageManager class, then we would create a file with the following contents:

```ts
// <<filename>>.d.ts

declare namespace AtomCore {
  interface PackageManager {
    triggerActivationHook(name: string): void;
    triggerDeferredActivationHooks(): void;
  }
}
```

Once this file is either referenced or included within your project, then this new member function would be freely usable on instances of the PackageManager class without TypeScript reporting errors.
