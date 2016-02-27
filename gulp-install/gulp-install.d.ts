// Type definitions for gulp-install v0.6.0
// Project: https://www.npmjs.com/package/gulp-install
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "gulp-install" {
  interface Options {
    production?: boolean;
    ignoreScripts?: boolean;
    noOptional?: boolean;
    allowRoot?: boolean;
    args?: string | string[];
  }

  interface Install {
    (options?: Options) : NodeJS.ReadWriteStream;
  }

  const install : Install;
  export = install;
}
