# WebAssembly typescript declaration file

## Installation
```
npm install @types/webassembly-js-api --save-dev
```

The WebAssembly namespace will now be available to your code TypeScript code.
See [WebAssembly JS API](http://webassembly.org/getting-started/js-api/) and the contents of
@types/webassembly-js-api/index.d.ts for more details.

Do not use an `import * as WebAssembly from "webassembly-js-api"` as this will cause
the `tsc` to emit a `require` statement for the WebAssembly module which doesn't exist as
WebAssembly is part of the global namespace.

Instead use a `///<reference path="./node_modules/@types/webassembly-js-api"/>` statement.
Note: this `<reference path="..."/>` maybe optional, but YMMV.
