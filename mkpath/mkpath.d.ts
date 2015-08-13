// Type definitions for mkpath v0.1.0
// Project: https://www.npmjs.com/package/mkpath
// Definitions by: Jared Klopper <https://github.com/optical>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'mkpath' {
  module mkpath {
    function sync(path: string, mode?: number): void;
  }

  function mkpath(path: string, callback?: (err: any) => void): void;
  function mkpath(path: string, mode?: number, callback?: (err?: any) => void): void;

  export = mkpath;
}
