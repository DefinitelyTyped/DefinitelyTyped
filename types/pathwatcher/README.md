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
