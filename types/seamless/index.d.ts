/// <reference types="jquery" />

declare namespace Seamless {
    export interface SeamlessJQuery extends JQuery {
        seamless_options: Options;
        connection: Connection;
        send(data: any): void;
        receive(callback: Callback): void;
        receive(type: string, callback: Callback): void;
        seamless_ready(data: any, event: any): void;
        seamless_update(data: any, event: any): any;
        seamless_error(data: any, event: any): void;
    }

    export interface Options {
        /**
         * The text to show when the child page is loading.
         * @default 'Loading ...'
         */
        loading?: string | undefined;
        /**
         * The url of the spinner GIF that is shown when the child page is loading.
         * @default 'http://www.travistidwell.com/seamless.js/src/loader.gif'
         */
        spinner?: string | undefined;
        /**
         * Show or not the loading indicator.
         * @default true
         */
        showLoadingIndicator?: boolean | undefined;
        /**
         * Called when a child iframe has finished connecting.
         * @default null
         */
        onConnect?: ((data: any) => void) | null | undefined;
        /**
         * The styles to inject into the child page.
         * @default []
         */
        styles?: string[] | undefined;
        /**
         * If the fallback functionality is enabled.
         * @default false
         */
        fallback?: boolean | undefined;
        /**
         * Additional query params to attach to the fallback window when it is opened.
         * @default ''
         */
        fallbackParams?: string | undefined;
        /**
         * A message to show below the child iframe to offer assistance if they are having problems.
         * @default ''
         */
        fallbackText?: string | undefined;
        /**
         * The string to show within the 'Click here' link to open the fallback window.
         * @default 'Click Here'
         */
        fallbackLinkText?: string | undefined;
        /**
         * Text to add after the fallbackLinkText link.
         * @default 'to open in a separate window.'
         */
        fallbackLinkAfter?: string | undefined;
        /**
         * An array of string styles to add to the fallback text when something bad happens.
         * @default [ 'padding: 15px', 'border: 1px solid transparent', 'border-radius: 4px', 'color: #3a87ad', 'background-color: #d9edf7', 'border-color: #bce8f1' ]
         */
        fallbackStyles?: string[] | undefined;
        /**
         * An array of string styles to add to the fallback link.
         * @default [ 'display: inline-block', 'color: #333', 'border: 1px solid #ccc', 'background-color: #fff', 'padding: 5px 10px', 'text-decoration: none', 'font-size: 12px', 'line-height: 1.5', 'border-radius: 6px', 'font-weight: 400', 'cursor: pointer', '-webkit-user-select: none', '-moz-user-select: none', '-ms-user-select: none', 'user-select: none' ]
         */
        fallbackLinkStyles?: string[] | undefined;
        /**
         * An array of string styles to add to the fallback link on hover.
         * @default [ 'background-color:#ebebeb', 'border-color:#adadad' ]
         */
        fallbackLinkHoverStyles?: string[] | undefined;
        /**
         * The width of the window that is opened up for the fallback.
         * @default 960
         */
        fallbackWindowWidth?: number | undefined;
        /**
         * The height of the window that is opened up for the fallback.
         * @default 800
         */
        fallbackWindowHeight?: number | undefined;
    }

    export interface ConnectOptions {
        /**
         * The url of the parent page to connect to.
         * @default ''
         */
        url?: string | undefined;
        /**
         * The container for the main content on the page which determines the height of the page.
         * @default 'body'
         */
        container?: string | undefined;
        /**
         * The milliseconds that an update is created from the child to the parent.
         * @default 200
         */
        update?: number | undefined;
        /**
         *  If this page should allow injected styles.
         *  @default false
         */
        allowStyleInjection?: boolean | undefined;
        /**
         * Allow appended styles to be injected.
         * @default false
         */
        allowAppendedStyleInjection?: boolean | undefined;
        /**
         * If the child page requires cookies (See Child iFrame Cookie Problem section)
         * @default false
         */
        requireCookies?: boolean | undefined;
        /**
         * The message to show if the cookie test fails.
         * @default 'Your browser requires this page to be opened in a separate window.'
         */
        cookieFallbackMsg?: string | undefined;
        /**
         * The text to place inside the link to have them open a new window if the cookie test fails.
         * @default 'Click Here'
         */
        cookieFallbackLinkMsg?: string | undefined;
        /**
         * The text to place after the link when the cookie test fails.
         * @default ' to open in a separate window.'
         */
        cookieFallbackAfterMsg?: string | undefined;
        /**
         *  Callback that is called when an update is triggered to the parent.
         *  @default null
         */
        onUpdate?(data: any): void;
        /**
         *  Called when the parent connects to this iframe.
         *  @default null
         */
        onConnect?(data: any): void;
    }

    export interface Callback {
        (data: any, event: any): any | boolean | void;
    }

    export interface Connection {
        id: number;
        target: string;
        url: string;
        active: boolean;
        queue: any[];
        send(data: any): void;
        receive(callback: Callback): void;
        receive(type: string, callback: Callback): void;
        setActive(active: boolean): void;
    }

    export interface Static {
        options: ConnectOptions;
        connect(options: ConnectOptions): Connection;
    }
}

interface JQuery {
    seamless(options?: Seamless.Options): Seamless.SeamlessJQuery;
}

interface JQueryStatic {
    seamless: Seamless.Static;
}
