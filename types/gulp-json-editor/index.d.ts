/// <reference types="node" />
/// <reference types="js-beautify" />

interface JEditor {
    (mergeWith: any | ((json: any) => any), jsBeautifyOptions?: js_beautify.JSBeautifyOptions): NodeJS.ReadWriteStream;
}

declare const jeditor: JEditor;
export = jeditor;
