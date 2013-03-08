// Type definitions for PreloadJS 0.3
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
        close(): void;
        getItem(value: string): Object;
        load(): void;
        toString(): string;

        // events
        complete: (event: Object) => any;
        error: (event: Object) => any;
        fileload: (event: Object) => any;
        fileprogress: (event: Object) => any;
        loadStart: (event: Object) => any;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
        addEventListener(type: string, listener: (eventObj: Object) => bool): Object;
        removeEventListener(type: string, listener: (eventObj: Function) => bool): void;
        removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(eventObj: string, target: Object): bool;
        dispatchEvent(eventObj: Object, target: Object): bool;
        hasEventListener(type: string): bool;
    }

    export class PreloadJS {
        version: string;
        buildDate: string;
    }

    export class LoadQueue extends AbstractLoader {
        constructor (useXHR?: bool);

        // properties
        static BINARY: string;
        static CSS: string;
        static IMAGE: string;
        static JAVASCRIPT: string;
        static JSON: string;
        static SOUND: string;
        static SVG: string;
        static TEXT: string;
        static LOAD_TIMEOUT: number;
        static XML: string;

        maintainScriptOrder: bool;
        next: LoadQueue;
        stopOnError: bool;
        useXHR: bool;

        // methods
        BrowserDetect(): Object;
        init(useXHR?: bool): void;
        close(): void;
        getResult(value: string): Object;
        initialize(useXHR: bool): void;
        installPlugin(plugin: () => any): void;
        load(): void;
        loadFile(file: Object, loadNow?: bool): void;
        loadFile(file: string, loadNow?: bool): void;
        loadManifest(manifest: Object[], loadNow?: bool): void;
        loadManifest(manifest: string[], loadNow?: bool): void;
        getItem(value: string): Object;
        getResult(value: string, rawResult?: bool): Object;
        removeAll(): void;
        remove(idsOrUrls: string): void;
        remove(idsOrUrls: Array): void;
        reset(): void;
        setMaxConnections(value: number): void;
        setUseXHR(value: bool): void;
        setPaused(value: bool): void;
    }


    export class TagLoader extends AbstractLoader {
        constructor (item: Object, srcAttr: string, useXHR: bool);
        constructor (item: string, srcAttr: string, useXHR: bool);
        getResult(): HTMLImageElement;
        getResult(): HTMLAudioElement;
    }


    export class XHRLoader extends AbstractLoader {
        constructor (file: Object);
        getResult(rawResult?: bool);
    }
}
