// Type definitions for ouibounce 0.0
// Project: https://github.com/carlsednaoui/ouibounce
// Definitions by: Krzysztof Gutkowski <https://github.com/LiquidPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ouibounce;

export = Ouibounce;

declare function Ouibounce(el: Element|false|null, custom_config?: Ouibounce.OuibounceConfig): Ouibounce.Ouibounce;

declare namespace Ouibounce {
    interface OuibounceConfig {
        /**
         * Ouibounce fires when the mouse cursor moves close to (or passes)
         * the top of the viewport. You can define how far the mouse has to be
         * before Ouibounce fires. The higher value, the more sensitive,
         * and the more quickly the event will fire.
         *
         * *Defaults to 20.*
         */
        sensitivity?: number;

        /**
         * By default, Ouibounce will only fire once for each visitor.
         * When Ouibounce fires, a cookie is created to ensure *a non obtrusive*
         * experience.
         *
         *  There are cases, however, when you may want to be more aggressive
         * (as in, you want the modal to be elegible to fire anytime the page
         * is loaded/ reloaded). An example use-case might be on your paid
         * landing pages. If you enable `aggressive`, the modal will fire any
         * time the page is reloaded, for the same user.
         */
        aggressive?: boolean;

        /**
         * By default, Ouibounce won't fire in the first second to prevent
         * false positives, as it's unlikely the user will be able to exit
         * the page within less than a second. If you want to change the amount
         * of time that firing is surpressed for, you can pass in a number
         * of milliseconds to `timer`.
         */
        timer?: number;

        /**
         * By default, Ouibounce will show the modal immediately. You could
         * instead configure it to wait `x` milliseconds before showing the modal.
         * If the user's mouse re-enters the body before `delay` ms have passed,
         * the modal will not appear. This can be used to provide a "grace
         * period" for visitors instead of immediately presenting the modal
         * window.
         */
        delay?: number;

        /**
         * A function that will run once Ouibounce has been triggered.
         */
        callback?: () => void;

        /**
         * Ouibounce sets a cookie by default to prevent the modal from
         * appearing more than once per user. You can add a cookie expiration
         * (in days) using `cookieExpire` to adjust the time period before
         * the modal will appear again for a user. By default, the cookie
         * will expire at the end of the session, which for most browsers is
         * when the browser is closed entirely.
         */
        cookieExpire?: number;

        /**
         * Ouibounce sets a cookie by default to prevent the modal from
         * appearing more than once per user. You can add a cookie domain
         * using `cookieDomain` to specify the domain under which the cookie
         * should work. By default, no extra domain information will be added.
         * If you need a cookie to work also in your subdomain (like
         * blog.example.com and example.com), then set a `cookieDomain` such
         * as .example.com (notice the dot in front).
         */
        cookieDomain?: string;

        /**
         * The name for the cookie.
         */
        cookieName?: string;

        /**
         * Whether the cookie should be used sitewide.
         */
        sitewide?: boolean;
    }

    interface Ouibounce {
        /**
         * Fires the ouibounce event immediately.
         */
        fire: () => void;

        /**
         * Disables the ouibounce event.
         */
        disable: (custom_options?: {cookieExpire?: number, cookieDomain?: string, cookieName?: string, sitewide?: boolean}) => void;
    }
}
