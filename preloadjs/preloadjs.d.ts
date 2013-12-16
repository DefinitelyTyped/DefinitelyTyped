// Type definitions for PreloadJS 0.4.0
// Project: http://www.createjs.com/#!/PreloadJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html

/// <reference path="../createjs/createjs.d.ts" />

declare module createjs {
    export class AbstractLoader extends EventDispatcher {
        // properties
        canceled: boolean;
        loaded: boolean;
        progress: number;
        
        // methods
        buildPath(src: string, basePath?: string, data?: Object): string;
        close(): void;
        load(): void;
        toString(): string;
        
    }
    
    export class LoadQueue extends AbstractLoader {
        constructor(useXHR?: boolean, basePath?: string);
        
        // properties
        static BINARY: string;
        static CSS: string;
        static IMAGE: string;
        static JAVASCRIPT: string;
        static JSON: string;
        static JSONP: string;
        static LOAD_TIMEOUT: number;
        maintainScriptOrder: boolean;
        next: LoadQueue;
        static SOUND: string;
        stopOnError: boolean;
        static SVG: string;
        static TEXT: string;
        useXHR: boolean;
        static XML: string;
        
        // methods
        getItem(value: string): Object;
        getResult(value: string, rawResult?: boolean): Object;
        installPlugin(plugin: any): void;
        loadFile(file: Object, loadNow?: boolean, basePath?: string): void;
        loadFile(file: string, loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: Object[], loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: string[], loadNow?: boolean, basePath?: string): void;
        remove(idsOrUrls: string): void;
        remove(idsOrUrls: any[]): void;
        removeAll(): void;
        reset(): void;
        setMaxConnections(value: number): void;
        setPaused(value: boolean): void;
        setUseXHR(value: boolean): void;
    }
    
    export class PreloadJS {
        static buildDate: string;
        static version: string;
    }
    
    export class TagLoader extends AbstractLoader {
        constructor (item: Object);
        
        // properties
        _isAudio: boolean;
        
        // methods
        getResult(): any;
    }
    
    export class XHRLoader extends AbstractLoader {
        constructor (item: Object);
        
        // methods
        getAllResponseHeaders(): string;
        getResponseHeader(header: string): string;
        getResult (rawResult?: boolean): Object;
    }
}
