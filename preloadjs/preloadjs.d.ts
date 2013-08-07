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

declare module createjs {
    export class AbstractLoader {
        // properties
        canceled: boolean;
        loaded: boolean;
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
        addEventListener(type: string, listener: (eventObj: Object) => boolean): Function;
        addEventListener(type: string, listener: (eventObj: Object) => boolean): Object;
        removeEventListener(type: string, listener: (eventObj: Function) => boolean): void;
        removeEventListener(type: string, listener: (eventObj: Object) => boolean): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(eventObj: string, target: Object): boolean;
        dispatchEvent(eventObj: Object, target: Object): boolean;
        hasEventListener(type: string): boolean;
    }

    export class PreloadJS {
        version: string;
        buildDate: string;
    }

    export class LoadQueue extends AbstractLoader {
        constructor (useXHR?: boolean);

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

        maintainScriptOrder: boolean;
        next: LoadQueue;
        stopOnError: boolean;
        useXHR: boolean;

        // methods
        BrowserDetect(): Object;
        init(useXHR?: boolean): void;
        close(): void;
        initialize(useXHR: boolean): void;
        installPlugin(plugin: any): void;
        load(): void;
        loadFile(file: Object, loadNow?: boolean): void;
        loadFile(file: string, loadNow?: boolean): void;
        loadManifest(manifest: Object[], loadNow?: boolean): void;
        loadManifest(manifest: string[], loadNow?: boolean): void;
        getItem(value: string): Object;
        getResult(value: string, rawResult?: boolean): Object;
        removeAll(): void;
        remove(idsOrUrls: string): void;
        remove(idsOrUrls: Array): void;
        reset(): void;
        setMaxConnections(value: number): void;
        setUseXHR(value: boolean): void;
        setPaused(value: boolean): void;
    }


    export class TagLoader extends AbstractLoader {
        constructor (item: Object, srcAttr: string, useXHR: boolean);
        constructor (item: string, srcAttr: string, useXHR: boolean);
        getResult(): HTMLImageElement;
        getResult(): HTMLAudioElement;
    }


    export class XHRLoader extends AbstractLoader {
        constructor (file: Object);
        getResult(rawResult?: boolean);
    }
}
