// Type definitions for gulp-template v3.1.0
// Project: https://www.npmjs.com/package/gulp-template
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />

declare module "gulp-template" {
  interface GulpTemplate {
    (data: any, options? : _.TemplateOptions) : NodeJS.ReadWriteStream;

    precompile(options? : _.TemplateOptions) : NodeJS.ReadWriteStream;
  }

  const gulpTemplate : GulpTemplate;
  export = gulpTemplate;
}
