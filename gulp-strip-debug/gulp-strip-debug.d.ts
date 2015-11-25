// Type definitions for gulp-strip-debug v1.1.0
// Project: https://www.npmjs.com/package/gulp-strip-debug
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "gulp-strip-debug" {
  const gulpStripDebug : () => NodeJS.ReadWriteStream;
  export = gulpStripDebug;
}
