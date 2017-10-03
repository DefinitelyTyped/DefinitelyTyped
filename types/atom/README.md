## Atom API Type Definitions

TypeScript type definitions for the [Atom Text Editor](https://atom.io/) public API, which is used to develop packages for the editor. Documentation for the public API can be found [here](https://atom.io/docs/api/v1.19.5/), though these type definitions include many types and class properties not mentioned within that documentation.

### Exports

#### The "atom" Variable

These definitions declare a global static variable named "atom" as ambient. Once these definitions have been referenced within your project, you will be able to access properties and member functions from the [AtomEnvironment](https://atom.io/docs/api/v1.19.5/AtomEnvironment) class off of this variable, as it is an instance of that class.

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

There are many services provided by other Atom packages that you may want to use within your own Atom package. We bundle type definitions for several of these services with these type definitions.

```ts
/// <reference types="atom/services" />
let completionProvider: Atom.Services.Autocomplete.Provider;
```

The currently supported services are:
- [Autocomplete](https://github.com/atom/autocomplete-plus)
- [Status Bar](https://github.com/atom/status-bar)
