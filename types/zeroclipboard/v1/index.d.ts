// Type definitions for ZeroClipboard 1.3
// Project: https://github.com/jonrohan/ZeroClipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>, Blake Niemyjski <https://github.com/niemyjski>, György Balássy <https://github.com/balassy>, Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class ZeroClipboard {
    constructor(elements?: Element | { [index: number]: Element }, options?: ZeroClipboardOptions);

    activate(element: Element): void;
    setText(newText: string): void;
    title(newTitle: string): void;
    setSize(width: number, height: number): void;
    version: string;
    moviePath: string;
    trustedDomains: any;
    text: string;
    hoverClass: string;
    activeClass: string;
    deactivate(): void;
    ready: boolean;
    reposition(): void; // returns false in some scenarios, but never returns true
    on(eventName: string, func: (client: ZeroClipboard, args: any) => void): void;
    off(eventName: string, func: (client: ZeroClipboard, args: any) => void): void;
    clip(elements: Element | { [index: number]: Element }): void;
    unclip(elements: Element | { [index: number]: Element }): void;


    static config(options: ZeroClipboardOptions): void;
    static destroy(): void;
    static emit(eventName: string, args: any): void;
}

interface ZeroClipboardOptions {

    /** Setting this to false would allow users to handle calling ZeroClipboard.activate(...); themselves instead of relying on our per-element mouseover handler */
    autoActivate?: boolean;

    /** Include a "nocache" query parameter on requests for the SWF. */
    cacheBust?: boolean;

    /** Debug enabled: send console messages with deprecation warnings, etc. */
    debug?: boolean;

    /** Forcibly set the hand cursor ("pointer") for all clipped elements. */
    forceHandCursor?: boolean;

    /** URL to the movie. NOTE: For versions >= v1.3.x and < v2.x, you must use swfPath by setting moviePath! */
    moviePath?: string;

    /** URL to the movie, relative to the page. NOTE: For versions >= v1.3.x and < v2.x, you must use swfPath by setting moviePath! */
    swfPath?: string;

    /** Forcibly set the hand cursor ("pointer") for all clipped elements. */
    trustedDomains?: any;

    /** Sets the title of the div encapsulating the Flash object. */
    title?: string;

    /** The z-index used by the Flash object. */
    zIndex?: number;

    /** DEPRECATED. The class used to indicate that a clipped element is active (is being clicked). */
    activeClass?: string;

    /** DEPRECATED. The class used to indicate that a clipped element is being hovered over. */
    hoverClass?: string;

    /** DEPRECATED. SWF outbound scripting policy. Possible values: "never", "sameDomain", "always". */
    allowScriptAccess?: string;

    /** DEPRECATED, use trustedDomains instead! SWF inbound scripting policy: page origins that the SWF should trust. (single string or array of strings. */
    trustedOrigins?: any;

    /** DEPRECATED, use cacheBust instead! Include a "nocache" query parameter on requests for the SWF. */
    useNoCache?: boolean;
}

// Support AMD.
declare module "zeroclipboard" { export = ZeroClipboard; }
