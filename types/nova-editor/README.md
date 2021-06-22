Nova extensions run in an extension of Apple's JavaScriptCore, which means
they're not being executed in a node js or browser environment.

Unfortunately, the nature of the typing ecosystem means `@types/node` is very
commonly included, either explicitly through dependencies (`yarn why @types/node`
shows something) or implicitly in a dependency's types (`tsc --traceResolution`
finds a `<reference types="node">`). This results in duplicate global definitions
and errors like this:

```
../DefinitelyTyped/types/nova-editor/index.d.ts:21:15 - error TS2451: Cannot redeclare block-scoped variable '__dirname'.

21 declare const __dirname: string;
                 ~~~~~~~~~

  ../DefinitelyTyped/types/node/globals.d.ts:148:13
    148 declare var __dirname: string;
                    ~~~~~~~~~
    '__dirname' was also declared here.

```

Explicit excluding can be fixed using [`@types`, `typeRoots` and `types`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) by adding the following to your tsconfig to
explicitly exclude `@types/node`, but reference including cannot be fixed without
patching dependency code.

```json
{
    "compilerOptions": {
        "types": ["nova-editor"]
    }
}
```

For this reason I've decided to expose a separate package that's compatible with
`@types/node`. If you see errors like those described above, you can use
`@types/nova-editor-node` instead.
