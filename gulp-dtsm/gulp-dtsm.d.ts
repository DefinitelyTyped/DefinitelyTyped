// Type definitions for gulp-dtsm 0.0.0
// Project: https://github.com/9joneg/gulp-dtsm
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-dtsm" {
  function dtsm(): NodeJS.WritableStream;

  export = dtsm;
}

