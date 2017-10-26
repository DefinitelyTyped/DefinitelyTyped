## Path Watcher Node Type Definitions

TypeScript type definitions for [Path Watcher Node], which is published as "[pathwatcher](https://www.npmjs.com/package/pathwatcher)" on NPM.

### Usage Notes

#### Exports

The two classes exported from this module are: [File](https://github.com/atom/node-pathwatcher/blob/master/src/file.coffee) and [Directory](https://github.com/atom/node-pathwatcher/blob/master/src/directory.coffee).

```ts
import { File, Directory } from "text-buffer";
```

Additionally, the following functions are exported as well:
```ts
watch(): PathWatcher.PathWatcher;
closeAllWatchers(): void;
getWatchedPaths(): string[];
```

#### The PathWatcher Namespace

All types used by Path Watcher can be referenced from the PathWatcher namespace.

```ts
function example(file: PathWatcher.File) {}
```

### Exposing Private Methods and Properties

[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to augment any of the types used within Path Watcher. As an example, if we wanted to reveal the private ```setPath``` method within the File class, then we would create a file with the following contents:

```ts
// <<filename>>.d.ts

declare namespace PathWatcher {
  interface File {
    setPath(path: string): void;
  }
}
```

Once this file is either referenced or included within your project, then this new member function would be freely usable on instances of the File class without TypeScript reporting errors.
