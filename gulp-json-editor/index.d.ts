// Type definitions for gulp-json-editor v2.2.1
// Project: https://www.npmjs.com/package/gulp-json-editor
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
/// <reference types="js-beautify" />



interface JEditor {
    (mergeWith: any | ((json: any) => any),
        jsBeautifyOptions?: JsBeautifyOptions): NodeJS.ReadWriteStream;
}

declare const jeditor: JEditor;
export = jeditor;
