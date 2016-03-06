// Type definitions for PreloadJS 0.6.0
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

/// <reference path="../createjs-lib/createjs-lib.d.ts" />

declare module createjs {
    export class AbstractLoader extends EventDispatcher {
        // properties
        static BINARY: string;
        canceled: boolean;
        static CSS: string;
        GET: string;
        static IMAGE: string;
        static JAVASCRIPT: string;
        static JSON: string;
        static JSONP: string;
        loaded: boolean;
        static MANIFEST: string;
        POST: string;
        progress: number;
        resultFormatter: () => any;
        static SOUND: string;
        static SPRITESHEET: string;
        static SVG: string;
        static TEXT: string;
        type: string;
        static VIDEO: string;
        static XML: string;

        // methods
        cancel(): void;
        destroy(): void;
        getItem(value?: string): Object;
        getLoadedItems(): Object[];
        getResult(value?: any, rawResult?: boolean): Object;
        getTag(): Object;
        load(): void;
        setTag(tag: Object): void;
        toString(): string;
    }

    export class AbstractMediaLoader
        {
        constructor(loadItem: Object, preferXHR: boolean, type: string);
        }

    export class AbstractRequest
        {
        constructor(item: LoadItem);

        cancel(): void;
        destroy(): void;
        load(): void;
        }

    export class BinaryLoader
        {
        constructor(loadItem: Object);

        // methods
        static canLoadItem(item: Object): boolean;
        }

    export class CSSLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        // methods
        canLoadItem(item: Object): boolean;
        }

    export module DataUtils
        {
        export function parseJSON(value: string): Object;
        export function parseXML(text: string, type: string): XMLDocument;
        }

    export class ErrorEvent
        {
        constructor(title?: string, message?: string, data?: Object);

        // properties
        data: Object;
        message: string;
        title: string;
        }

    export class ImageLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        static canLoadItem(item: Object): boolean;
        }

    export class JavaScriptLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        static canLoadItem(item: Object): boolean;
        }

    export class JSONLoader
        {
        constructor(loadItem: Object);

        static canLoadItem(item: Object): boolean;
        }

    export class JSONPLoader
        {
        constructor(loadItem: Object);

        static canLoadItem(item: Object): boolean;
        }

    export class LoadItem
        {
        // properties
        callback: string;
        crossOrigin: boolean;
        data: Object;
        headers: Object;
        id: string;
        loadTimeout: number;
        maintainOrder: boolean;
        method: string;
        mimeType: string;
        src: string;
        type: string;
        values: Object;
        withCredentials: boolean;

        // methods
        static create(value: LoadItem | string | Object): Object | LoadItem;
        set(props: Object): LoadItem;
        }
    
    export class LoadQueue extends AbstractLoader
        {
        constructor(preferXHR?: boolean, basePath?: string, crossOrigin?: string | boolean);

        // properties
        maintainScriptOrder: boolean;
        next: LoadQueue;
        stopOnError: boolean;

        // methods
        close(): void;
        getItems(loaded: boolean): Object[];
        installPlugin(plugin: () => any): void;
        loadFile(file: Object | string, loadNow?: boolean, basePath?: string): void;
        loadManifest(manifest: Object | string | any[], loadNow?: boolean, basePath?: string): void;
        registerLoader(loader: AbstractLoader): void;
        remove(idsOrUrls: string | any[]): void;
        removeAll(): void;
        reset(): void;
        setMaxConnections(value: number): void;
        setPaused(value: boolean): void;
        setPreferXHR(value: boolean): boolean;
        /**
         * @deprecated - use 'preferXHR' property instead (or setUseXHR())
         */
        setUseXHR(value: boolean): void;
        unregisterLoader(loader: AbstractLoader): void;
    }

    export class ManifestLoader
        {
        constructor(loadItem: LoadItem | Object);

        // methods
        static canLoadItem(item: LoadItem | Object): boolean;
        }

    export class MediaTagRequest
        {
        constructor(loadItem: LoadItem, tag: HTMLAudioElement | HTMLVideoElement, srcAttribute: string);
        }

    export class PreloadJS
        {
        static buildDate: string;
        static version: string;
        }

    export class ProgressEvent
        {
        constructor(loaded: number, total?: number);

        // properties
        loaded: number;
        progress: number;
        total: number;

        // methods
        clone(): ProgressEvent;
        }

    export class RequestUtils
        {
        // properties
        static ABSOLUTE_PATH: RegExp;
        static EXTENSION_PATT: RegExp;
        static RELATIVE_PATH: RegExp;

        // methods
        static buildPath(src: string, data?: Object): string;
        static formatQueryString(data: Object, query?: Object[]): string;
        static getTypeByExtension(extension: string): string;
        static isAudioTag(item: Object): boolean;
        static isBinary(type: string): boolean;
        static isCrossDomain(item: Object): boolean;
        static isImageTag(item: Object): boolean;
        static isLocal(item: Object): boolean;
        static isText(type: string): boolean;
        static isVideoTag(item: Object): boolean;
        static parseURI(path: string): Object;
        }

    export class SoundLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        static canLoadItem(item: Object): boolean;
        }

    export class SpriteSheetLoader
        {
        constructor(loadItem: Object);

        static canLoadItem(item: Object): boolean;
        }

    export class SVGLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        static canLoadItem(item: Object): boolean;
        }

    export class TagRequest
        {

        }

    export class TextLoader
        {
        constructor(loadItem: Object);

        static canLoadItem(item: Object): boolean;
        }

    export class VideoLoader
        {
        constructor(loadItem: Object, preferXHR: boolean);

        static canLoadItem(item: Object): boolean;
        }

    export class XHRRequest extends AbstractLoader
        {
        constructor(item: Object);

        // methods
        getAllResponseHeaders(): string;
        getResponseHeader(header: string): string;
        }

    export class XMLLoader
        {
        constructor(loadItem: Object);

        static canLoadItem(item: Object): boolean;
        }
}
