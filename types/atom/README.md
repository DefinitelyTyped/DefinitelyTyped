## Atom API Type Definitions

TypeScript type definitions for the [Atom Text Editor](https://atom.io/) public API, which is used to develop packages for the editor. Documentation for the public API can be found [here](https://atom.io/docs/api/v1.19.5/), though these type definitions include many types and class properties not mentioned within that documentation.

### Usage Notes

#### Exports

These definitions declare a global static variable named "atom" as ambient. Once these definitions have been referenced within your project, you will be able to access properties and member functions from the [AtomEnvironment](https://atom.io/docs/api/v1.19.5/AtomEnvironment) class off of this variable, as it is an instance of that class.

```ts
if (atom.inDevMode()) {}
```

#### The AtomCore Namespace

Many of the types used within Atom can be referenced from the AtomCore namespace, with all classes mentioned within the public API being available there.

```ts
function example(cursor: AtomCore.Cursor) {}
```
