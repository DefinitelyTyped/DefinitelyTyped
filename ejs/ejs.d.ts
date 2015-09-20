// Type definitions for ejs (embedded js)
// Project: http://embeddedjs.com
// Definitions by: Ozgur Ozturk, drozturk.com
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//USAGE
//add this line to your .ts file, so you can use EJS contructor and methods: "/// <reference path="ejs/ejs.d.ts" />"

//this line would be the simplest d.ts file, but would not have methods
//declare function EJS(any): void;

interface EjsConstructorOptions {
    url: string;
    text: string;
    element: string;
    type?: string; // (optional) - '<' or '[', default is '<', except for loading a template from an element.
    name?: string;  // (optional) - an optional name that is used for caching.This defaults to the element ID or URL provided.
    cache?: boolean; //(optional) - defaults to true.True if you want to enable caching of templates, false if otherwise.
}

interface Ejs {
    render(data: any): any;
    update(element: string, url_or_data?: Object):void // Updates an element with the result of the template.
}

interface EjsFactory {
    new (EjsConstructorOptions:Object): Ejs;
}

declare var EJS: EjsFactory;

