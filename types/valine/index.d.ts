// Type definitions for valine 1.4
// Project: https://github.com/xcss/Valine#readme
// Definitions by: Benny Guo <https://github.com/TriDiamond>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Valine {
    interface ValineOptions {
        /**
         * The DOM element to be mounted on initialization.
         * It can be a CSS selector string or an actual HTMLElement.
         */
        el: string;

        /**
         * Application appId from Leancloud.
         */
        appId: string;

        /**
         * Application appKey from Leancloud.
         */
        appKey: string;

        /**
         * Comment box placeholders.
         */
        placeholder?: string;

        /**
         * Article path(just like duoshuo thread).
         *
         * Optional value:
         * - window.location.pathname (recommend)
         * - window.location.href
         * - customize (Please ensure uniqueness)
         */
        path?: string;

        /**
         * Gravatar type.
         *
         * Optional values:
         * - '' empty string
         * - mp
         * - identicon
         * - monsterid
         * - wavatar
         * - retro
         * - robohash
         * - hide
         */
        avatar?: string;

        /**
         * Reviewer attributes.
         */
        meta?: Array<"nick" | "mail" | "link">;

        /**
         * Number of pages per page.
         */
        pageSize?: number;

        /**
         * Multilingual support.
         *
         * Optional value:
         * - zh-CN
         * - zh-TW
         * - en
         * -ja
         *
         * If you need a custom language,
         * please refer to [i18n](https://valine.js.org/en/i18n.html)。
         */
        lang?: string;

        /**
         * [Article reading statistics](https://valine.js.org/en/visitor.html).
         */
        visitor?: boolean;

        /**
         * Code highlighting, it’s enabled by default,
         * please close it selectively.
         */
        highlight?: boolean;

        /**
         * Each time you access forced pulls the latest avatar.
         */
        avatarForce?: boolean;

        /**
         * Record reviewer IP.
         */
        recordIP?: boolean;

        /**
         * This configuration is suitable for domestic custom
         * domain name users, overseas version will be
         * automatically detected (no need to manually fill in) v1.3.10+
         */
        serverURLs?: string;

        /**
         * Set Emoji Pack CDN,
         * refer to [Custom Emoji](https://valine.js.org/en/emoji.html)
         */
        emojiCDN?: string;

        /**
         * Set `Emoji Packet Mapping’,
         * refer to [Custom Emoji](https://valine.js.org/en/emoji.html)
         */
        emojiMaps?: object;

        /**
         * Whether to enable the Nickname box to automatically
         * get QQ Nickname and QQ Avatar, the default is off,
         * you need the blogger/webmaster to actively enable
         */
        enableQQ?: boolean;

        /**
         * Set required fields, default anonymous
         */
        requiredFields?: Array<"nick" | "mail" | "link">;
    }

    interface ValineFactory {
        /** Valine initialization */
        init(options: ValineOptions): ValineFactory;

        /** Core initialization */
        _init(): void;

        /** LeanCloud SDK Query Util */
        Q(k: any): any;

        /** LeanCloud Error Handler */
        ErrorHandler(ex: { message: string; code: string }, origin: any): void;

        /**
         * Install Multi language support
         * @param locale Locale name
         * @param mode Current mode
         */
        installLocale(locale: string, mode: string): ValineFactory;

        /**
         * Setting the path where comment is placed
         * @param path Path where the comment is placed.
         */
        setPath(path: string): ValineFactory;
    }

    class ValineStatic {
        constructor(options?: ValineOptions);
        init(options: ValineOptions): ValineFactory;
    }
}

export = Valine.ValineStatic;
export as namespace Valine;
