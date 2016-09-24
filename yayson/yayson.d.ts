// Type definitions for yayson
// Project: https://github.com/confetti/yayson
// Definitions by: David Wood <https://github.com/Codesleuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'yayson' {
  class Store {
    sync(obj: Object): Object;
    sync<T>(obj: Object): T;
  }

  interface Yayson {
    Store: typeof Store;
  }

  function yayson(): Yayson;
  namespace yayson { }
  export = yayson;
}
