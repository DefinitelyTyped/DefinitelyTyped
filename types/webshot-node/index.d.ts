// Type definitions for webshot-node 0.18
// Project: https://github.com/architjn/node-webshot#readme
// Definitions by: Logan Kearsley <https://github.com/gliese1337>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

export = webshot;

declare function webshot(src: string, dst: string, options: webshot.Options, cb?: (e: Error | null) => void): void;
declare function webshot(src: string, dst: string, cb?: (e: Error | null) => void): void;
declare function webshot(src: string, options: webshot.Options, cb?: (e: Error | null) => void): NodeJS.ReadableStream;
declare function webshot(src: string, cb?: (e: Error | null) => void): NodeJS.ReadableStream;

declare namespace webshot {
    interface Options {
        windowSize?: {
            width: number;
            height: number;
        };
        screenSize?: {
            width: number;
            height: number;
        };
        shotSize?: {
            width: 'window' | 'all' | number;
            height: 'window' | 'all' | number;
        };
        shotOffset?: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        phantomPath?: string;
        phantomConfig?: {[key: string]: any};
        cookies?: Array<{[key: string]: any}> | null;
        customHeaders?: Array<{[key: string]: any}> | null;
        defaultWhiteBackground?: boolean;
        customCSS?: string;
        quality?: number;
        streamType?: 'png' | 'jpg' | 'jpeg';
        siteType?: 'url' | 'file' | 'html';
        renderDelay?: number;
        timeout?: number;
        takeShotOnCallback?: boolean;
        errorIfStatusIsNot200?: boolean;
        errorIfJSException?: boolean;
        captureSelector?: boolean;
    }
}
