/// <reference lib="dom" />

export = browserUpdate;

declare function browserUpdate(options?: browserUpdate.Options, test?: boolean): void;

declare namespace browserUpdate {
    type Options = {
        /**
         * By passing `required` option you can specify the versions to notify.
         *
         * - Specifying a version number for a browser means that this is the required version on the site
         * and all versions before the specified one will be notified.
         * - Negative numbers specify how many versions behind the latest version are required.
         * - 0 means the latest version is needed.
         * - You can omit the configuration and it will fall back to a default.
         * - Version history comparison uses "semantic version" comparison: e.g. "2.10">"2.1"
         *
         * @example
         * import browserUpdate = require('browser-update');
         *
         * browserUpdate({
         *     required:{
         *         f:58,
         *         s:-1,
         *         c:"67.0.3396.12",
         *     }
         * });
         *
         * // Firefox (`f`) 58 is required on the site and all versions before 58 (<58) will be notified.
         * // s:-1 means Safari version 10.1 is needed if latest version ist 11.1.
         * // To use build versions use a version in a string: c: "67.0.3396.12".
         */
        required?: RequiredBrowsers | undefined;

        /**
         * Setting this option means that all browser that are severely insecure get notified.
         * "Severely insecure" means that the browser has security issues that allow remote code execution
         * and similar stuff, and that they are being actively exploited on the internet.
         *
         * @default false
         */
        insecure?: boolean | undefined;

        /**
         * Setting this option means that additionally to the browsers you set, also all browser versions
         * that are not supplied with updates by the vendor any more get notified. Usually this is all but
         * the latest version of the browser. Exceptions are Internet Explorer 11 and Firefox Long term support
         * releases, which are still supported but are not the latest version.
         *
         * @default false
         */
        unsupported?: boolean | undefined;

        /**
         * Also notify [Firefox ESR](https://www.mozilla.org/firefox/enterprise/) (Extended Support releases)
         * versions if they are below requirement - although they are still supported. They are supported by
         * Mozilla for about a year after their initial release.
         *
         * @default false
         */
        notify_esr?: boolean | undefined;

        /**
         * Show notification on mobile platforms.
         *
         * @default true
         */
        mobile?: boolean | undefined;

        /**
         * After how many hours should the message reappear. Use `0` to show message all the time.
         *
         * @default 24*7
         */
        reminder?: number | undefined;

        /**
         * If the user explicitly closes message it reappears after `reminderClosed` hours.
         *
         * @default 24*7
         */
        reminderClosed?: number | undefined;

        /**
         * You can use a custom text message (html) by specifying the parts of the message that get presented to users.
         *
         * Placeholders:
         *  - `{brow_name}` will be replaced with the browser name
         *  - `{up_but}` will be replaced with attributes of the update link
         *  - `{ignore_but}` will be replaced with attributes for the ignore link
         *
         * @example
         * import browserUpdate = require('browser-update');
         *
         * browserUpdate({
         *     text: "Your browser, {brow_name}, is too old: <a{up_but}>update</a> or <a{ignore_but}>ignore</a>."
         * });
         *
         * @example
         * import browserUpdate = require('browser-update');
         *
         * browserUpdate({
         *     text: {
         *         msg: 'Your web browser ({brow_name}) is out of date.',
         *         msgmore: 'Update your browser for more security, speed and the best experience on this site.',
         *         bupdate: 'Update browser',
         *         bignore: 'Ignore',
         *         remind: 'You will be reminded in {days} days.',
         *         bnever: 'Never show again',
         *     }
         * });
         */
        text?: TextConfig | string | undefined;

        /**
         * Set a fixed language for the message, e.g. "en". This overrides the default detection.
         */
        l?: string | false | undefined;

        /**
         * Set to `true` to always show the bar (for testing).
         *
         * @default false
         */
        test?: boolean | undefined;

        /**
         * Set to `true` to hide debug info when `test` is set to `true`.
         *
         * @default false
         */
        dont_show_debuginfo?: boolean | undefined;

        /**
         * Open link in new window/tab.
         *
         * @default true
         */
        newwindow?: boolean | undefined;

        /**
         * The URL to go to after clicking the notification.
         */
        url?: string | undefined;

        /**
         * The URL to go to after clicking the "hide permanently" option.
         */
        url_permanent_hide?: string | undefined;

        /**
         * Do not show the "ignore" button to close the notification.
         *
         * @default false
         */
        noclose?: boolean | undefined;

        /**
         * Do not show a message if the browser is out of date, just call the `onshow` callback function.
         *
         * @default false
         */
        nomessage?: boolean | undefined;

        /**
         * Do not give the user the option to permanently hide the notification.
         *
         * @default false
         */
        no_permanent_hide?: boolean | undefined;

        /**
         * URL where the script, that shows the notification, is located. This is only loaded if the user
         * actually has an outdated browser.
         *
         * @default '//browser-update.org/update.show.min.js'
         */
        jsshowurl?: string | undefined;

        /**
         * Domain part of the URL where the script, that shows the notification, is located.
         * For example, if `domain` is set to `"https://browser-update.org"`, then the URL
         * to load the script will be: `"https://browser-update.org/update.show.min.js"`.
         *
         * This setting is ignored when `jsshowurl` is set.
         */
        domain?: string;

        /**
         * @default location.hostname
         */
        pageurl?: string;

        /**
         * DOM Element where the notification will be injected.
         *
         * @default document.body
         */
        container?: Node | undefined;

        /**
         * This is the version of the browser-update api to use.
         */
        api?: number | undefined;

        /**
         * Callback called after notification has appeared.
         */
        onshow?: ((options: ParsedOptions) => void) | undefined;
        /**
         * Callback called after notification was clicked.
         */
        onclick?: ((options: ParsedOptions) => void) | undefined;
        /**
         * Callback called after notification was closed.
         */
        onclose?: ((options: ParsedOptions) => void) | undefined;

        /**
         * Ignore cookie value when determining whether notification was already shown.
         */
        ignorecookie?: boolean | undefined;

        /**
         * User agent string to use instead of `navigator.userAgent`.
         */
        override_ua?: string | undefined;

        /**
         * The position where the notification should be shown.
         *
         * @default 'top'
         */
        style?: "top" | "bottom" | "corner" | undefined;

        /**
         * Shift down the page in order not to obscure content behind the notification bar.
         * Adds `margin-top` to the `<body>` tag.
         *
         * @default true
         */
        shift_page_down?: boolean;
    } & BrowserWithLanguageTextOptions;

    type DetectedBrowsers =
        | "c"
        | "f"
        | "io"
        | "uc"
        | "i"
        | "e"
        | "e_a"
        | "v"
        | "o"
        | "o_a"
        | "y"
        | "samsung"
        | "silk"
        | "ios"
        | "s"
        | "so"
        | "x";

    type BrowserWithLanguageTextOptions = {
        [
            K in DetectedBrowsers as
                | `text_for_${K}`
                | `text_for_${K}_in_${string}`
                | `text_in_${string}`
                | `text_${string}`
        ]?: TextConfig | string | undefined;
    };

    interface RequiredBrowsers {
        /**
         * Specifies required Edge version.
         *
         * Falls back to value specified in `i` when omitted.
         */
        e?: string | number | undefined;
        /**
         * Specifies required Internet Explorer version.
         *
         * Falls back to value specified in `e` when omitted.
         */
        i?: string | number | undefined;
        /**
         * Specifies required Chrome version.
         */
        c?: string | number | undefined;
        /**
         * Specifies required Firefox version.
         */
        f?: string | number | undefined;
        /**
         * Specifies required Opera version.
         */
        o?: string | number | undefined;
        /**
         * Specifies required Opera (Android) version.
         */
        o_a?: string | number | undefined;
        /**
         * Specifies required Safari version.
         */
        s?: string | number | undefined;
        /**
         * Specifies required Yandex Browser version.
         */
        y?: string | number | undefined;
        /**
         * Specifies required Vivaldi version.
         */
        v?: string | number | undefined;
        /**
         * Specifies required UC Browser version.
         */
        uc?: string | number | undefined;
        /**
         * Specifies required iOS browser version.
         *
         * Falls back to `s` when omitted.
         */
        ios?: string | number | undefined;
        /**
         * Specifies required Android Browser version.
         */
        a?: string | number | undefined;
        /**
         * Specifies required Samsung Internet (Android) version.
         */
        samsung?: string | number | undefined;
    }

    interface TextConfig {
        msg?: string | undefined;
        msgmore?: string | undefined;
        bupdate?: string | undefined;
        bignore?: string | undefined;
        remind?: string | undefined;
        bnever?: string | undefined;
    }

    interface ParsedOptions extends
        WithRequiredProperties<
            Options,
            | "domain"
            | "required"
            | "reminder"
            | "reminderClosed"
            | "onshow"
            | "onclick"
            | "onclose"
            | "pageurl"
            | "newwindow"
            | "test"
            | "ignorecookie"
        >
    {
        llfull: string;
        ll: string;
        apiver: number;
        jsv: string;
        reasons: Array<"below required" | "insecure" | "no vendor support">;
        hide_reasons: Array<
            | `is other browser:${string}`
            | `is embedded browser:${string}`
            | "Extended support (ESR)"
            | "do not notify mobile"
            | "is latest version of the browser"
            | "no device update"
        >;
        is_below_required: boolean;
        notified: boolean;
        already_shown: boolean;
        setCookie(hours: number): void;
        div?: HTMLDivElement | undefined;
        addmargin?: boolean | undefined;
        bodymt?: string | undefined;
    }

    interface DetectedBrowser {
        age_years: number | undefined;
        available: RequiredBrowsers & {
            e_a?: string | number | undefined;
        };
        discontinued: boolean;
        embedded: boolean;
        engine?: "ios" | "i" | "c" | "e" | "f" | "s" | "o" | undefined;
        engine_version?: number | undefined;
        fullv: string;
        is_latest: boolean | undefined;
        is_insecure: boolean | undefined;
        is_supported: boolean | undefined;
        mobile: boolean;
        n: DetectedBrowsers;
        no_device_update: boolean;
        other: "bot" | "TV" | "niche browser" | "mobile without upgrade path or landing page" | false;
        t: string;
        v: number;
        vmaj: number;
        esr?: true | undefined;
    }
}

declare global {
    interface Window {
        $buoop: browserUpdate.Options | undefined;
        $buo: typeof browserUpdate;
        $bu_getBrowser(ua?: string): browserUpdate.DetectedBrowsers;
    }
}

type WithRequiredProperties<TObj extends object, TReq extends keyof TObj> =
    & Required<Pick<TObj, TReq>>
    & Omit<TObj, TReq>;
