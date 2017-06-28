// Type definitions for jsdom 11.0
// Project: https://github.com/tmpvar/jsdom#readme
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { EventEmitter } from 'events';
import { MarkupData } from 'parse5';
import * as tough from 'tough-cookie';
import { Script } from 'vm';

export class JSDOM {
    static fromURL(url: string | Buffer | BinaryData, options?: FromUrlOptions | object): Promise<JSDOM>;

    static fromFile(url: string | Buffer | BinaryData, options?: Options | object): Promise<JSDOM>;

    static fragment(html: string): DocumentFragment;

    constructor(html?: string | Buffer | BinaryData, options?: Options | object);

    readonly window: DOMWindow;
    readonly virtualConsole: VirtualConsole;
    readonly cookieJar: CookieJar;

    /**
     * The serialize() method will return the HTML serialization of the document, including the doctype.
     */
    serialize(): string;

    /**
     * The nodeLocation() method will find where a DOM node is within the source document, returning the parse5 location info for the node.
     */
    nodeLocation(node: Node): MarkupData.ElementLocation | null;

    /**
     * The built-in vm module of Node.js allows you to create Script instances,
     * which can be compiled ahead of time and then run multiple times on a given "VM context".
     * Behind the scenes, a jsdom Window is indeed a VM context.
     * To get access to this ability, use the runVMScript() method.
     */
    runVMScript(script: Script): void;

    reconfigure(settings: ReconfigureSettings | object): void;
}

export interface FromUrlOptions extends Pick<FromUrlOptions._Impl, keyof FromUrlOptions._Impl> { }

export namespace FromUrlOptions {
    interface _Impl {
        /**
         * referrer just affects the value read from document.referrer.
         * It defaults to no referrer (which reflects as the empty string).
         */
        referrer: string;
        /**
         * userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
         * It defaults to `Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}`.
         */
        userAgent: string;
        /**
         * includeNodeLocations preserves the location info produced by the HTML parser,
         * allowing you to retrieve it with the nodeLocation() method (described below).
         * It defaults to false to give the best performance,
         * and cannot be used with an XML content type since our XML parser does not support location info.
         */
        includeNodeLocations: boolean;
        runScripts: 'dangerously' | 'outside-only';
        resources: 'usable';
        virtualConsole: VirtualConsole;
        cookieJar: CookieJar;
        beforeParse(window: DOMWindow): void;
    }
}

export interface Options extends Pick<Options._Impl, keyof Options._Impl> { }

export namespace Options {
    interface _Impl extends FromUrlOptions._Impl {
        /**
         * url sets the value returned by window.location, document.URL, and document.documentURI,
         * and affects things like resolution of relative URLs within the document
         * and the same-origin restrictions and referrer used while fetching subresources.
         * It defaults to "about:blank".
         */
        url: string;
        /**
         * contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
         * Values that are not "text/html" or an XML mime type will throw. It defaults to "text/html".
         */
        contentType: string;
    }
}

export interface DOMWindow extends Window {
    ran: number;

    eval(script: string): void;
}
export {DOMWindow as Window};

export type BinaryData = ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

export class VirtualConsole extends EventEmitter {
    on<K extends keyof Console>(method: K, callback: Console[K]): this;
    on(event: 'jsdomError', callback: (e: Error) => void): this;

    sendTo(console: Console, options?: VirtualConsole.SendToOptions | object): this;
}

export namespace VirtualConsole {
    interface SendToOptions extends Pick<SendToOptions._Impl, keyof SendToOptions._Impl> { }

    namespace SendToOptions {
        interface _Impl {
            omitJSDOMErrors: boolean;
        }
    }
}

export class CookieJar extends tough.CookieJar { }

export const toughCookie: typeof tough;

export interface ReconfigureSettings extends Pick<ReconfigureSettings._Impl, keyof ReconfigureSettings._Impl> { }

export namespace ReconfigureSettings {
    interface _Impl {
        WindowTop: DOMWindow;
        url: string;
    }
}
