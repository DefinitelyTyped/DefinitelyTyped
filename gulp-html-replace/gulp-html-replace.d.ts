// Type definitions for gulp-html-replace v1.5.5
// Project: https://www.npmjs.com/package/gulp-html-replace
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "gulp-html-replace" {
  interface IAdvancedTask {
    src: string | string[];
    tpl: string;
  }

  interface ITasks {
    [taskId: string] : string | string[] | IAdvancedTask;
  }

  interface IOptions {
    keepUnassigned?: boolean;
    keepBlockTags?: boolean;
    resolvePaths?: boolean;
  }

  interface IHtmlReplace {
    (tasks: ITasks, options?: IOptions) : NodeJS.ReadWriteStream;
  }

  const htmlReplace : IHtmlReplace;
  export = htmlReplace;
}
