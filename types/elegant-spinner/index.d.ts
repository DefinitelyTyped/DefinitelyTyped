// Type definitions for elegant-spinner 1.0
// Project: https://github.com/sindresorhus/elegant-spinner
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = elegantSpinner;

declare function elegantSpinner(): () => string;

declare namespace elegantSpinner {
  const frames: ReadonlyArray<string>;
}
