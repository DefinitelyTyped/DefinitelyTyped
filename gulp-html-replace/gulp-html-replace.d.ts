// Type definitions for gulp-html-replace v1.5.5
// Project: https://www.npmjs.com/package/gulp-html-replace
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "gulp-html-replace" {
  interface AdvancedTask {
    src: string | string[];
    tpl: string;
  }

  interface Tasks {
    [taskId: string] : string | string[] | AdvancedTask;
  }

  interface Options {
    keepUnassigned?: boolean;
    keepBlockTags?: boolean;
    resolvePaths?: boolean;
  }

  interface HtmlReplace {
    (tasks: Tasks, options?: Options) : NodeJS.ReadWriteStream;
  }

  const htmlReplace : HtmlReplace;
  export = htmlReplace;
}
