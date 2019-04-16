// Type definitions for electron-unhandled 1.1
// Project: https://github.com/sindresorhus/electron-unhandled
// Definitions by: Olegs Jeremejevs <https://github.com/jeremejevs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace unhandled {
  interface Options {
    logger?: (err: Error) => void;
    showDialog?: boolean;
  }
}

declare function unhandled(options?: unhandled.Options): void;

export = unhandled;
