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

// The following stub interface declarations intentionally overlap in names with "dom"'s lib.d.ts
// We don't include "dom" in tsconfig.json because JSDom is able to be used in environments without DOM APIs such as Node.js

type DOMException = {};
type Attr = {};
type Node = {};
type Element = {};
type DocumentFragment = {};
type Document = {};
type HTMLDocument = {};
type XMLDocument = {};
type CharacterData = {};
type Text = {};
type CDATASection = {};
type ProcessingInstruction = {};
type Comment = {};
type DocumentType = {};
type DOMImplementation = {};
type NodeList = {};
type HTMLCollection = {};
type HTMLOptionsCollection = {};
type DOMStringMap = {};
type DOMTokenList = {};
type Event = {};
type CustomEvent = {};
type MessageEvent = {};
type ErrorEvent = {};
type HashChangeEvent = {};
type FocusEvent = {};
type PopStateEvent = {};
type UIEvent = {};
type MouseEvent = {};
type KeyboardEvent = {};
type TouchEvent = {};
type ProgressEvent = {};
type CompositionEvent = {};
type WheelEvent = {};
type EventTarget = {};
type Location = {};
type History = {};
type Blob = {};
type File = {};
type FileList = {};
type DOMParser = {};
type FormData = {};
type XMLHttpRequestEventTarget = {}
type XMLHttpRequestUpload = {};
type NodeIterator = {};
type TreeWalker = {};
type NamedNodeMap = {};
type URL = {};
type URLSearchParams = {};
type HTMLElement = {};
type HTMLAnchorElement = {};
type HTMLAppletElement = {};
type HTMLAreaElement = {};
type HTMLAudioElement = {};
type HTMLBaseElement = {};
type HTMLBodyElement = {};
type HTMLBRElement = {};
type HTMLButtonElement = {};
type HTMLCanvasElement = {};
type HTMLDataElement = {};
type HTMLDataListElement = {};
type HTMLDirectoryElement = {};
type HTMLDivElement = {};
type HTMLDListElement = {};
type HTMLEmbedElement = {};
type HTMLFieldSetElement = {};
type HTMLFontElement = {};
type HTMLFormElement = {};
type HTMLFrameElement = {};
type HTMLFrameSetElement = {};
type HTMLHeadingElement = {};
type HTMLHeadElement = {};
type HTMLHRElement = {};
type HTMLHtmlElement = {};
type HTMLIFrameElement = {};
type HTMLImageElement = {};
type HTMLInputElement = {};
type HTMLLabelElement = {};
type HTMLLegendElement = {};
type HTMLLIElement = {};
type HTMLLinkElement = {};
type HTMLMapElement = {};
type HTMLMarqueeElement = {};
type HTMLMediaElement = {};
type HTMLMenuElement = {};
type HTMLMetaElement = {};
type HTMLMeterElement = {};
type HTMLModElement = {};
type HTMLObjectElement = {};
type HTMLOListElement = {};
type HTMLOptGroupElement = {};
type HTMLOptionElement = {};
type HTMLOutputElement = {};
type HTMLParagraphElement = {};
type HTMLParamElement = {};
type HTMLPictureElement = {};
type HTMLPreElement = {};
type HTMLProgressElement = {};
type HTMLQuoteElement = {};
type HTMLScriptElement = {};
type HTMLSelectElement = {};
type HTMLSourceElement = {};
type HTMLSpanElement = {};
type HTMLStyleElement = {};
type HTMLTableCaptionElement = {};
type HTMLTableCellElement = {};
type HTMLTableColElement = {};
type HTMLTableElement = {};
type HTMLTimeElement = {};
type HTMLTitleElement = {};
type HTMLTableRowElement = {};
type HTMLTableSectionElement = {};
type HTMLTemplateElement = {};
type HTMLTextAreaElement = {};
type HTMLTrackElement = {};
type HTMLUListElement = {};
type HTMLUnknownElement = {};
type HTMLVideoElement = {};
type StyleSheet = {};
type MediaList = {};
type CSSStyleSheet = {};
type CSSRule = {};
type CSSStyleRule = {};
type CSSMediaRule = {};
type CSSImportRule = {};
type CSSStyleDeclaration = {};
type StyleSheetList = {};
type XPathExpression = {};
type XPathResult = {};
type XPathEvaluator = {};
type NodeFilter = {};
type Window = {};

export class JSDOM {
    static fromURL(url: string, options?: FromUrlOptions): Promise<JSDOM>;

    static fromFile(url: string, options?: FromFileOptions): Promise<JSDOM>;

    static fragment(html: string): DocumentFragment;

    constructor(html?: string | Buffer | BinaryData, options?: ConstructorOptions);

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

    reconfigure(settings: ReconfigureSettings): void;
}

export interface Options {
    /**
     * referrer just affects the value read from document.referrer.
     * It defaults to no referrer (which reflects as the empty string).
     */
    referrer?: string;
    /**
     * userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
     * It defaults to `Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}`.
     */
    userAgent?: string;
    /**
     * includeNodeLocations preserves the location info produced by the HTML parser,
     * allowing you to retrieve it with the nodeLocation() method (described below).
     * It defaults to false to give the best performance,
     * and cannot be used with an XML content type since our XML parser does not support location info.
     */
    includeNodeLocations?: boolean;
    runScripts?: 'dangerously' | 'outside-only';
    resources?: 'usable';
    virtualConsole?: VirtualConsole;
    cookieJar?: CookieJar;
    beforeParse?(window: DOMWindow): void;
}

export type FromUrlOptions = Options;

export type FromFileOptions = Options & {
    /**
     * url sets the value returned by window.location, document.URL, and document.documentURI,
     * and affects things like resolution of relative URLs within the document
     * and the same-origin restrictions and referrer used while fetching subresources.
     * It will default to a file URL corresponding to the given filename, instead of to "about:blank".
     */
    url?: string;
    /**
     * contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
     * Values that are not "text/html" or an XML mime type will throw. It will default to "application/xhtml+xml" if
     * the given filename ends in .xhtml or .xml; otherwise it will continue to default to "text/html".
     */
    contentType?: string;
};

export type ConstructorOptions = Options & {
    /**
     * url sets the value returned by window.location, document.URL, and document.documentURI,
     * and affects things like resolution of relative URLs within the document
     * and the same-origin restrictions and referrer used while fetching subresources.
     * It defaults to "about:blank".
     */
    url?: string;
    /**
     * contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
     * Values that are not "text/html" or an XML mime type will throw. It defaults to "text/html".
     */
    contentType?: string;
};

export interface DOMWindow extends Window {
    eval(script: string): void;

    /* node_modules/jsdom/living/index.js */
    DOMException: DOMException;
    Attr: Attr;
    Node: Node;
    Element: Element;
    DocumentFragment: DocumentFragment;
    Document: Document;
    HTMLDocument: HTMLDocument;
    XMLDocument: XMLDocument;
    CharacterData: CharacterData;
    Text: Text;
    CDATASection: CDATASection;
    ProcessingInstruction: ProcessingInstruction;
    Comment: Comment;
    DocumentType: DocumentType;
    DOMImplementation: DOMImplementation;
    NodeList: NodeList;
    HTMLCollection: HTMLCollection;
    HTMLOptionsCollection: HTMLOptionsCollection;
    DOMStringMap: DOMStringMap;
    DOMTokenList: DOMTokenList;
    Event: Event;
    CustomEvent: CustomEvent;
    MessageEvent: MessageEvent;
    ErrorEvent: ErrorEvent;
    HashChangeEvent: HashChangeEvent;
    FocusEvent: FocusEvent;
    PopStateEvent: PopStateEvent;
    UIEvent: UIEvent;
    MouseEvent: MouseEvent;
    KeyboardEvent: KeyboardEvent;
    TouchEvent: TouchEvent;
    ProgressEvent: ProgressEvent;
    CompositionEvent: CompositionEvent;
    WheelEvent: WheelEvent;
    EventTarget: EventTarget;
    Location: Location;
    History: History;
    Blob: Blob;
    File: File;
    FileList: FileList;
    DOMParser: DOMParser;
    FormData: FormData;
    XMLHttpRequestEventTarget: XMLHttpRequestEventTarget;
    XMLHttpRequestUpload: XMLHttpRequestUpload;
    NodeIterator: NodeIterator;
    TreeWalker: TreeWalker;
    NamedNodeMap: NamedNodeMap;
    URL: URL;
    URLSearchParams: URLSearchParams;

    /* node_modules/jsdom/living/register-elements.js */
    HTMLElement: HTMLElement;
    HTMLAnchorElement: HTMLAnchorElement;
    HTMLAppletElement: HTMLAppletElement;
    HTMLAreaElement: HTMLAreaElement;
    HTMLAudioElement: HTMLAudioElement;
    HTMLBaseElement: HTMLBaseElement;
    HTMLBodyElement: HTMLBodyElement;
    HTMLBRElement: HTMLBRElement;
    HTMLButtonElement: HTMLButtonElement;
    HTMLCanvasElement: HTMLCanvasElement;
    HTMLDataElement: HTMLDataElement;
    HTMLDataListElement: HTMLDataListElement;
    // HTMLDetailsElement: HTMLDetailsElement;
    // HTMLDialogElement: HTMLDialogElement;
    HTMLDirectoryElement: HTMLDirectoryElement;
    HTMLDivElement: HTMLDivElement;
    HTMLDListElement: HTMLDListElement;
    HTMLEmbedElement: HTMLEmbedElement;
    HTMLFieldSetElement: HTMLFieldSetElement;
    HTMLFontElement: HTMLFontElement;
    HTMLFormElement: HTMLFormElement;
    HTMLFrameElement: HTMLFrameElement;
    HTMLFrameSetElement: HTMLFrameSetElement;
    HTMLHeadingElement: HTMLHeadingElement;
    HTMLHeadElement: HTMLHeadElement;
    HTMLHRElement: HTMLHRElement;
    HTMLHtmlElement: HTMLHtmlElement;
    HTMLIFrameElement: HTMLIFrameElement;
    HTMLImageElement: HTMLImageElement;
    HTMLInputElement: HTMLInputElement;
    HTMLLabelElement: HTMLLabelElement;
    HTMLLegendElement: HTMLLegendElement;
    HTMLLIElement: HTMLLIElement;
    HTMLLinkElement: HTMLLinkElement;
    HTMLMapElement: HTMLMapElement;
    HTMLMarqueeElement: HTMLMarqueeElement;
    HTMLMediaElement: HTMLMediaElement;
    HTMLMenuElement: HTMLMenuElement;
    HTMLMetaElement: HTMLMetaElement;
    HTMLMeterElement: HTMLMeterElement;
    HTMLModElement: HTMLModElement;
    HTMLObjectElement: HTMLObjectElement;
    HTMLOListElement: HTMLOListElement;
    HTMLOptGroupElement: HTMLOptGroupElement;
    HTMLOptionElement: HTMLOptionElement;
    HTMLOutputElement: HTMLOutputElement;
    HTMLParagraphElement: HTMLParagraphElement;
    HTMLParamElement: HTMLParamElement;
    HTMLPictureElement: HTMLPictureElement;
    HTMLPreElement: HTMLPreElement;
    HTMLProgressElement: HTMLProgressElement;
    HTMLQuoteElement: HTMLQuoteElement;
    HTMLScriptElement: HTMLScriptElement;
    HTMLSelectElement: HTMLSelectElement;
    HTMLSourceElement: HTMLSourceElement;
    HTMLSpanElement: HTMLSpanElement;
    HTMLStyleElement: HTMLStyleElement;
    HTMLTableCaptionElement: HTMLTableCaptionElement;
    HTMLTableCellElement: HTMLTableCellElement;
    HTMLTableColElement: HTMLTableColElement;
    HTMLTableElement: HTMLTableElement;
    HTMLTimeElement: HTMLTimeElement;
    HTMLTitleElement: HTMLTitleElement;
    HTMLTableRowElement: HTMLTableRowElement;
    HTMLTableSectionElement: HTMLTableSectionElement;
    HTMLTemplateElement: HTMLTemplateElement;
    HTMLTextAreaElement: HTMLTextAreaElement;
    HTMLTrackElement: HTMLTrackElement;
    HTMLUListElement: HTMLUListElement;
    HTMLUnknownElement: HTMLUnknownElement;
    HTMLVideoElement: HTMLVideoElement;

    /* node_modules/jsdom/level2/style.js */
    StyleSheet: StyleSheet;
    MediaList: MediaList;
    CSSStyleSheet: CSSStyleSheet;
    CSSRule: CSSRule;
    CSSStyleRule: CSSStyleRule;
    CSSMediaRule: CSSMediaRule;
    CSSImportRule: CSSImportRule;
    CSSStyleDeclaration: CSSStyleDeclaration;
    StyleSheetList: StyleSheetList;

    /* node_modules/jsdom/level3/xpath.js */
    // XPathException: XPathException;
    XPathExpression: XPathExpression;
    XPathResult: XPathResult;
    XPathEvaluator: XPathEvaluator;

    /* node_modules/jsdom/living/node-filter.js */
    NodeFilter: NodeFilter;
}

export type BinaryData = ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

export class VirtualConsole extends EventEmitter {
    on<K extends keyof Console>(method: K, callback: Console[K]): this;
    on(event: 'jsdomError', callback: (e: Error) => void): this;

    sendTo(console: Console, options?: VirtualConsoleSendToOptions): this;
}

export interface VirtualConsoleSendToOptions {
    omitJSDOMErrors: boolean;
}

export class CookieJar extends tough.CookieJar { }

export const toughCookie: typeof tough;

export interface ReconfigureSettings {
    windowTop?: DOMWindow;
    url?: string;
}
