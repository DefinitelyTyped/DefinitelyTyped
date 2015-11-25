// Type definitions for gulp-filter v3.0.1
// Project: https://www.npmjs.com/package/gulp-filter
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts"/>
/// <reference path="../minimatch/minimatch.d.ts"/>

declare module "gulp-filter" {
  import File = require('vinyl');
  import Minimatch = require('minimatch');

  interface IFileFunction {
    (file: File) : boolean;
  }

  interface IOptions extends Minimatch.IOptions {
    restore?: boolean;
    passthrough?: boolean;
  }

  interface IFilter extends NodeJS.ReadWriteStream {
    restore: NodeJS.ReadWriteStream
  }

  interface IGulpFilter {
    (glob: string|string[]|IFileFunction, options?: IOptions) : IFilter;
  }

  const filter : IGulpFilter;
  export = filter;
}
