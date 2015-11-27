// Type definitions for gulp-conflict v0.4.0
// Project: https://www.npmjs.com/package/gulp-conflict
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "gulp-conflict" {
  interface GulpConflict {
    (dest: string, options? : { cwd?: string, defaultChoice?: string }) : NodeJS.ReadWriteStream;
  }

  const gulpConflict : GulpConflict;
  export = gulpConflict;
}
