// Type definitions for PreloadJS 0.2
// Project: http://www.createjs.com/#!/PreloadJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

module createjs {
    export class AbstractLoader {
        // properties
        canceled: bool;
        loaded: bool;
        progress: number;

        // methods
        cancel(): void;
        getItem(): Object;
        load(): void;

        // events
        onComplete: () => any;
        onError: () => any;
        onFileLoad: () => any;
        onFileProgress: () => any;
        onLoadStart: () => any;
        onProgress: () => any;
    }


    export class PreloadJS extends AbstractLoader {
        constructor (useXHR2?: bool);

        // properties
        static CSS: string;
        static IMAGE: string;
        static JAVASCRIPT: string;
        static JSON: string;
        maintainScriptOrder: bool;
        next: PreloadJS;
        static SOUND: string;
        stopOnError: bool;
        static TEXT: string;
        static TIMEOUT_TIME: number;
        useXHR: bool;
        static XML: string;

        // methods
        BrowserDetect(): Object;
        close(): void;
        getResult(value: string): Object;
        initialize(useXHR: bool): void;
        installPlugin(plugin: () => any): void;
        load(): void;
        loadFile(file: Object, loadNow: bool): void;
        loadFile(file: string, loadNow: bool): void;
        loadManifest(manifest: Object[], loadNow: bool): void;
        loadManifest(manifest: string[], loadNow: bool): void;
        setMaxConnections(value: number): void;
        setPaused(value: bool): void;
    }


    export class TagLoader extends AbstractLoader {
        constructor (item: Object, srcAttr: string, useXHR: bool);
        constructor (item: string, srcAttr: string, useXHR: bool);
    }


    export class XHRLoader extends AbstractLoader {
        constructor (file: Object);
    }
}