// Type definitions for mock-gulp-dest v0.1.1
// Project: https://www.npmjs.com/package/mock-gulp-dest
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../gulp/gulp.d.ts"/>

declare module "mock-gulp-dest" {
  import gulp = require("gulp");

  interface MockGulpDest {
    cwd() : string;
    basePath(): string;
    assertDestContains(filePath : string | string[] | any) : void;
    assertDestNotContains(filePath : string | string[] | any) : void;
  }

  const mockGulpDest : (gulp : gulp.Gulp) => MockGulpDest
  export = mockGulpDest;
}
