// Type definitions for gulp-json-editor v2.2.1
// Project: https://www.npmjs.com/package/gulp-json-editor
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />
/// <reference path="../js-beautify/js-beautify.d.ts" />

declare module "gulp-json-editor" {

  interface JEditor {
    (mergeWith: any | ((json : any) => any ),
    jsBeautifyOptions? : JsBeautifyOptions ) : NodeJS.ReadWriteStream;
  }

  const jeditor : JEditor;
  export = jeditor;
}
