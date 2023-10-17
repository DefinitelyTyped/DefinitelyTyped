declare global {
    const Access: Poool.Access;
    const Audit: Poool.Audit;
    /**
     * Use PooolAccess just if you have done `Access.noConflict()` before
     */
    const PooolAccess: Poool.Access;
    /**
     * Use PooolAudit just if you have done `Audit.noConflict()` before
     */
    const PooolAudit: Poool.Audit;
    interface Window {
        Access: Poool.Access;
        Audit: Poool.Audit;
        /**
         * Use PooolAccess just if you have done `Access.noConflict()` before
         */
        PooolAccess: Poool.Access;
        /**
         * Use PooolAudit just if you have done `Audit.noConflict()` before
         */
        PooolAudit: Poool.Audit;
    }
}

export namespace Poool {
    interface styles {
        /**
         * Defines the base layout of the paywall.
         * - `portrait`: most suited to fairly wide page layouts such as featured articles or exclusive previews. Displays a block of obfuscated lines of text in the background of the paywall.
         * - `landscape`: most suited to fairly small page layouts such as articles with a side bar on the right-hand side for example.
         *
         * default: `portrait`
         *
         * More Infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        layout?: "portrait" | "landscape";
        /**
         * URL to your media's logo. `.png`, `.jpg` or `.svg` format, `140px` min height, `200kb` max.
         *
         * default: null
         *
         *  More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        brand_logo?: string;
        /**
         * URL to your cover image. `.png` or `.jpg` format, `140px` min width, `380px` min height, `200kb` max
         *
         * default: null
         *
         *  More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        brand_cover?: string;
        /**
         * Main buttons color
         *
         * default: '#1896B4'
         *
         *  More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        button_color?: string;
        /**
         * Main buttons hover color
         *
         * default: '#0E6176'
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        button_hover_color?: string;
        /**
         * Paywall's skin color.
         *
         * Default: '#4A90E2'
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        skin_color?: string;
        /**
         * Subscription color.
         *
         * Default: '#1896B4'
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        premium_color?: string;
        /**
         * Custom CSS added inside the paywall frame.
         *
         * Default: null
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        custom_css?: string;
    }

    interface AccessConfigOptions {
        /**
         * When debug mode is enabled, Poool's SDK will log everything it does in the browser console.
         *
         * default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        debug?: boolean;
        /**
         * This is the method used by Poool to lock the content of your article.
         *
         * Available modes:
         * - `hide`: Your original content will stay where it is, but its container will be modified with css to hide a percentage of the content.
         * Downsides : Users will be able to open the browser's console and remove the css rules.
         * - `excerpt`: Your original content will be placed in a view holder and its container will have its content replaced by trimmed text(only X% of the text will be kept).
         * The original content is not available from outside of Poool.js scope (even from console), and will be put back when onRelease event is fired.
         * Downsides : `<style>` and `<script>` tags inside parent are temporarily detached from trimmed text and put at the end. If you have various `<script>` tags in your content,
         *  they won't necessarily be executed and may even throw javascript errors (such as with some ad scripts that still use
         * obsolete javascript functions), leading to a blank page when unlocking content. This mode is also not recommended for single-page apps (Angular, React, Vue, ...).
         * In these two cases, we suggest that you use hide mode.
         * - `custom`: Nothing will be done to your content and/or its container, but onLock and onRelease events will be fired so you can do your own processing.
         *
         * default: `'hide'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        mode?: "hide" | "excerpt" | "custom";
        /**
         * Percentage of text you want to be hidden/stripped.
         *
         * default: `80`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        percent?: number;
        /**
         * CSS Selector locating the post content you want to lock.
         *
         * default: `[data-poool]`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        post_container?: string;
        /**
         * CSS Selector locating the container where Poool will put its paywall.
         *
         * Default: `'#poool-widget'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        widget_container?: string;
        /**
         * Used to set your media's display name for some widgets. This value may be overridden by Dashboard configuration.
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        app_name?: string;
        /**
         * Overrides default paywall behavior and forces a particular type of widget (the type of widget shown by default can differ according to user behavior).
         *
         * Default: `'auto'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        force_widget?:
            | "auto"
            | "hidden"
            | "disabled"
            | "none"
            | "video"
            | "newsletter"
            | "subscription"
            | "gift"
            | "question"
            | "unlock"
            | "link"
            | "pass"
            | "unlock"
            | "invisible";
        /**
         * Your subscription page URL. The subscription widget will redirect the reader to this when they decide to subscribe.
         * - `{return_url}` variable can be used to get the current URL.
         * - `{user_id}` variable can be used to get the reader's Poool id.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        subscription_url?: string;
        /**
         * Shows/hides the subscription button on every widget (except “Subscription” and “Invisible unlock”).
         *
         * Default: true
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        subscription_button_enabled?: boolean;
        /**
         * The name of the newsletter, linked to the registered email address of a user on the newsletter widget.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        newsletter_name?: string;
        /**
         * Id of the newsletter, linked to the registered email address of a user on the newsletter widget.
         *
         * You will then be able to get all registrations for a particular user through Poool's API.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        newsletter_id?: string;
        /**
         * Your login page url. A user will be redirected here after clicking on the login button.
         * - `{return_url}` variable can be used to get the current URL.
         * - `{user_id}` variable can be used to get the reader's Poool id.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        login_url?: string;
        /**
         * Shows/hides the login button on every widget.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        login_button_enabled?: boolean;
        /**
         * Shows/hides signature text placed at the end of the article once it has been unlocked.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        signature_enabled?: boolean;
        /**
         * Allows you to set a reader status to already subscribed.
         *
         * ⚠️ This value isn't used to automatically unlock the paywall but only for statistical purposes.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        user_is_premium?: boolean;
        /**
         * Allows you to set the player client for the video widget.
         *
         * Default: `'vast'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        video_client?: "vast" | "googima";
        /**
         * Shows/hides the popover displayed when the paywall is not already inside the viewport.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        popover_enabled?: boolean;
        /**
         * Shows/hides the 'No, thanks' link for several widgets.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        alternative_enabled?: boolean;
        /**
         * Overrides the default alternative action used by several widgets.
         *
         * Default: `'none'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        alternative_widget?: "none" | "video" | "gift" | "question" | "subscription" | "newsletter";
        /**
         * URL needed to display video ads inside the video widget on the desktop.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        vast?: string;
        /**
         * URL needed to display video ads inside the video widget on mobile devices.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        mobile_vast?: string;
        /**
         * Used to assign a particular custom context to a reader.
         *
         * If no context is specified, native contexts or a default one will be used instead.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        context?: string;
        /**
         * Used to allocate a reader to a custom group previously created in Poool's Dashboard.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        custom_segment?: string;
        /**
         * Enable/disable all tracking actions used by Poool according to the latest GDPR compliancy measures.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        cookies_enabled?: boolean;
        /**
         * Allows to define the widget to display by default, if `{cookies_enabled}` config option is false (cookies consent rejection).
         *
         * Default: `'subscription'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        consent_rejection_widget?: "invisible" | "unlock" | "gift" | "subscription";
        /**
         * Link URL shown inside widgets that require the collection of user information.
         * - `{return_url}` variable can be used to get the current URL.
         * - `{user_id}` variable can be used to get the reader's Poool id.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        data_policy_url?: string;
        /**
         * Current paywall locale.
         *
         * Default: `'fr'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        locale?: "fr" | "en";
        /**
         * Popover display timeout (in milliseconds).
         *
         * If the value is set to -1, the popover will keep being displayed.
         *
         * Default: `5000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        popover_timeout?: number;
        /**
         * When `hide` masking mode is used and after unlocking an article, Poool's paywall will try to calculate the height
         *  of the content to set it back to its default value.
         *
         * In a few rare cases, the size of the content will change between when it's cropped and when it's unlocked
         * (loading twitter modules, loading gifs, etc...).
         * If `disable_content_height_calculation` is set to `true`, the paywall won't try to calculate content height
         *  and will simply strip all CSS modifications applied to the parent container of the article.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        disable_content_height_calculation?: boolean;
        /**
         * By default, to avoid long loading times, our paywall will not wait for the page to load to be displayed.
         * In some cases, you'll have to wait for the DOM to fully load before the paywall can detect the content of the
         * article that you want to lock (especially when it is placed inside the `<head>` tag of the page).
         * If `wait_for_dom_load` option is `true`, the paywall will wait for the `DOMContentLoaded` event to be fired.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        wait_for_dom_load?: boolean;
        /**
         * Defines the paywall default wait time for the `DOMContentLoaded` event of the page to be fired (if `wait_for_dom_load` is set to `true`).
         *
         * Default: `2000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        dom_load_timeout?: number;
        /**
         * Defines the default wait time for the Paywall to be fully displayed. After this time has lapsed, the `onError`
         * event is triggered so that you can display a backup paywall.
         *
         * Default: `10000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        paywall_load_timeout?: number;
        /**
         * Track unlocked articles based on original action instead of its alternative.
         *
         * When an article is unlocked using an alternative (for example if `force_widget` is used or if the user clicks on No, thanks),
         * by default reports will show statistics for this alternative action rather than the original one.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        track_original_action?: boolean;
        /**
         * Defines the default wait time for all the components inside the Paywall to be full loaded. After this time has lapsed,
         * the onError event is triggered so that you can display a backup paywall.
         *
         * Default: `5000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        components_load_timeout?: number;
        /**
         * @deprecated Use {@link ati_auto_tracking_enabled} instead.
         *
         * Enable/disable AT Internet additional tracking (AT Internet SDK integration required).
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ati_tracking_enabled?: boolean;
        /**
         * Defines the default wait time for the tracking event from AT Internet to be fired.
         * After this time has lapsed, the paywall is loaded using the default method, and all tracking from Poool to AT Internet is disabled.
         *
         * Default: `2000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ati_load_timeout?: number;
        /**
         * Enable/disable Facebook login button inside the paywall. In order to sign-in using Facebook,
         *  you have to call Facebook's login SDK when `onFacebookLoginClick` event is fired.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        facebook_login_enabled?: boolean;
        /**
         * Enable/disable Google login button inside the paywall. In order to sign-in using Google,
         *  you have to call Google's login SDK when `onGoogleLoginClick` event is fired.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        google_login_enabled?: boolean;
        /**
         * Enable/disable automatic AT Internet tracking (AT Internet SDK integration required) for particular events.
         *
         * ⚠️ AT Internet SDK Version 5.7 or higher is required.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ati_auto_tracking_enabled?: boolean;
        /**
         * Used to setup AT Internet method to send tracking event (AT Internet SDK integration required).
         *
         * `tag.publisher.send` is used by default. By setting events, events will be sent with tag.events.send method.
         *
         * ⚠️ AT Internet SDK Version 5.7 or higher is required.
         *
         * Default: `'default'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ati_tracking_method?: "default" | "events";
        /**
         * Enable/disable automatic Piano tracking (Piano SDK integration required) for particular events.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        piano_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Analytics tracking (Google Analytics SDK integration required) for particular events.
         *
         * ⚠️ Regular Google Analytics SDK integration required, e.g using ga() tracking method.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ga_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Tag Manager tracking (GTM SDK integration required) for particular events.
         *
         * Every event information is pushed to the dataLayer with the same structure as a Google Analytics event.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        gtm_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Analytics 4 tracking (Google Analytics 4 tag required) for particular events.
         *
         * ⚠️ Google Analytics 4 integration required, i.e using gtag() tracking method.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        gtag_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable the latest version of the GA, GTM and Gtag connectors.
         * This version is more precise and allows for more detailed performance tracking in Google Analytics.
         *
         * ⚠️ This option cannot be used alone, it must be paired with one of the GA, GTM or Gtag automatic tracking options.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        auto_tracking_spec_v2?: boolean;
        /**
         * Allows to provide configuration options to the ATInternet.Tracker.Tag constructor. See the
         * [ ATInternet documentation](https://developers.atinternet-solutions.com/as2-tagging-en/javascript-en/getting-started-javascript-en/tracker-initialisation-javascript-en/#Annexe)
         * for more information.
         *
         * Default: `{}`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        ati_tag_options?: { [key: string]: any };
        /**
         * Used to assign your own unique custom identifier to one of your readers.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        custom_reader_id?: string;
        /**
         * Used to enable Stripe credit card form fields inside the paywall.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        stripe_public_key?: string;
        /**
         * When scrolling, if the widget shows up on the screen (`onWidgetSeen` event), the popover will automatically disappear.
         *
         * You can use `popover_auto_hide` with the value set to `false` to disable this behavior.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        popover_auto_hide?: boolean;
        /**
         * When a reader is redirected from the paywall (click on login/subscribe links or Link widget's main action),
         *  the return_url query params is provided to the new url. Its default value is the current url.
         *
         * You can use custom_return_url to define your own custom return url.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        custom_return_url?: string;
        /**
         * Used to define your own custom domain for Poool cookies.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        cookies_domain?: string;
        /**
         * Used to defined a widget to display in case of network error.
         *
         * It is then possible to unlock the content manually (ex: `gift`, etc..) or automatically with `invisible`.
         *
         * Please check the guide named [Handle timeouts & errors](https://poool.dev/guides/timeouts-and-errors) for more information.
         *
         * Default: `'subscription'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */

        default_widget?: "invisible" | "unlock" | "gift" | "subscription";
        /**
         * Used to defined a fallback widget in case of error on advertising widgets (`video`, `viewpay`).
         *
         * Prefer to configure this option in your dashboard (widget edition), especially if your fallback widget requires data (eg: `question` or `form` widgets).
         *
         * Default: `'subscription'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        fallback_widget?: string;
        /**
         * In case of a complete integration with Audit and Access, the `audit_load_timeout` config parameter is used to define the wait time (in milliseconds) for the Audit response.
         *
         * If case of timeout, Access will directly display your paywall. Regarding native segmentation, reader may not be correctly updated
         *
         * Default: `2000`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        audit_load_timeout?: number;
        /**
         * Whether or not to send some tracking requests (mostly clicks behind a redirect) using `navigator.sendBeacon` instead of a normal XHR request.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        beacons?: boolean;
        /**
         * Used to define your own custom path for Poool cookies.
         *
         * Default: `'/'`
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        cookies_path?: string;
    }

    type EventsList =
        | "identityAvailable"
        | "lock"
        | "ready"
        | "paywallSeen"
        | "release"
        | "register"
        | "subscribeClick"
        | "loginClick"
        | "discoveryLinkClick"
        | "alternativeClick"
        | "error"
        | "outdatedBrowser"
        | "dataPolicyClick"
        | "formSubmit"
        | "facebookLoginClick"
        | "googleLoginClick"
        | "answer"
        | "consent"
        | "customButtonClick";

    interface AccessConfig {
        /**
         * While the default configuration works for most use cases, you might want to configure some of Access.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param config - the configuration object
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        (config: AccessConfigOptions, readonly?: boolean): AccessFactory;
        /**
         * While the default configuration works for most use cases, you might want to configure some of Access.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param optionName The configuration option name
         * @param optionValue The configuration option value
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://poool.dev/docs/access/javascript/access/configuration
         */
        (optionName: string, optionValue: any, readonly?: boolean): AccessFactory;
    }

    interface AccessTexts {
        /**
         * You may need to override the default text displayed to your visitors, either to change the wording, or to add a new locale.
         *
         * Each text key modified using the .texts function is added to the default locale (if no locale has been defined
         * in the general configuration options, or passed in the .texts function).
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param keyName - the text key name
         * @param value - the text value
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         * @param [locale] - the locale to use
         *
         * More infos: https://poool.dev/docs/access/javascript/access/texts
         */
        (keyName: string, value: string, readonly?: boolean, locale?: string): AccessFactory;
        /**
         * You may need to override the default text displayed to your visitors, either to change the wording, or to add a new locale.
         *
         * Each text key modified using the `.texts` function is added to the default `locale`
         * (if no `locale` has been defined in the general configuration options, or passed in the `.texts` function).
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param texts - the texts object
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         * @param [locale] - the locale to use
         *
         * More infos: https://poool.dev/docs/access/javascript/access/texts
         */
        (texts: { [key: string]: string }, readonly?: boolean, locale?: string): AccessFactory;
    }

    interface AccessStyles {
        /**
         * Just as you can modify the colors and global design of Poool's paywall in the appearance tab of your Dashboard, you can also do this using code.
         *
         * This front-end customization is especially useful when Access.js isn't able to retrieve the configuration used in your Dashboard.
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param keyName - the style key name
         * @param value - the style value
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        (keyName: string, value: string, readonly?: boolean): AccessFactory;
        /**
         * Just as you can modify the colors and global design of Poool's paywall in the appearance tab of your Dashboard, you can also do this using code.
         *
         * This front-end customization is especially useful when Access.js isn't able to retrieve the configuration used in your Dashboard.
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param styles - the styles object
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://poool.dev/docs/access/javascript/access/appearances
         */
        (styles: styles, readonly?: boolean): AccessFactory;
    }

    interface AccessVariables {
        /**
         * Some texts inside the paywall benefit from predefined & automatically integrated variables, such as `{app_name}`.
         *
         * The `.variable` function allows you to define custom variables, which can be used in all paywall texts.
         *
         * @param keyName - the variable key name
         * @param value - the variable value
         *
         * More infos: https://poool.dev/docs/access/javascript/access/variables
         */
        (keyName: string, value: string): AccessFactory;
        /**
         * Some texts inside the paywall benefit from predefined & automatically integrated variables, such as `{app_name}`.
         *
         * The `.variable` function allows you to define custom variables, which can be used in all paywall texts.
         *
         * @param variables - the variables object
         *
         * More infos: https://poool.dev/docs/access/javascript/access/variables
         */
        (variables: { [key: string]: string }): AccessFactory;
    }

    interface AuditConfigOptions {
        /**
         * When debug mode is enabled, Poool's SDK will log everything it does in the browser console.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        debug?: boolean;
        /**
         * Enable/disable all tracking actions used by Poool according to the latest GDPR compliancy measures.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        cookies_enabled?: boolean;
        /**
         * Used to define your own custom domain for Poool cookies.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        cookies_domain?: string;
        /**
         * Used to assign a particular custom context to a reader.
         *
         * If no context is specified, native contexts or a default one will be used instead.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        context?: string;
        /**
         * Used to allocate a reader to a custom group previously created in Poool's Dashboard.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        custom_segment?: string;
        /**
         * Used to assign your own unique custom identifier to one of your readers.
         *
         * Default: `null`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        custom_reader_id?: string;
        /**
         * Allows you to set a reader status to already subscribed.
         *
         * ⚠️ This value is only used for statistical purposes.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        user_is_premium?: boolean;
        /**
         * Enable/disable automatic AT Internet tracking (AT Internet SDK integration required) for particular events.
         *
         * ⚠️ AT Internet SDK Version `5.7` or higher is required.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        ati_auto_tracking_enabled?: boolean;
        /**
         * Used to setup AT Internet method to send tracking event (AT Internet SDK integration required).
         *
         * `tag.publisher.send` is used by default. By setting `events`, events will be sent with `tag.events.send` method.
         *
         * ⚠️ AT Internet SDK Version `5.7` or higher is required.
         *
         * Default: `'default'`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        ati_tracking_method?: "default" | "events";
        /**
         * Enable/disable automatic Piano tracking (Piano SDK integration required) for particular events.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        piano_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Analytics tracking (Google Analytics SDK integration required) for particular events.
         *
         * ⚠️ Regular Google Analytics SDK integration required, e.g using `ga()` tracking method.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        ga_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Tag Manager tracking (GTM SDK integration required) for particular events.
         *
         * Every event information is pushed to the dataLayer with the same structure as a Google Analytics event.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        gtm_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable automatic Google Analytics 4 tracking (Google Analytics 4 tag required) for particular events.
         *
         * ⚠️ Google Analytics 4 integration required, i.e using `gtag()` tracking method.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        gtag_auto_tracking_enabled?: boolean;
        /**
         * Enable/disable the latest version of the GA, GTM and Gtag connectors. This version is more precise and allows for more detailed performance tracking in Google Analytics.
         *
         * ⚠️ This option cannot be used alone, it must be paired with one of the GA, GTM or Gtag automatic tracking options.
         *
         * Default: `false`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        auto_tracking_spec_v2?: boolean;
        /**
         * Allows to provide configuration options to the `ATInternet.Tracker.Tag` constructor.
         * See the [ATInternet documentation](https://developers.atinternet-solutions.com/as2-tagging-en/javascript-en/getting-started-javascript-en/tracker-initialisation-javascript-en/#Annexe)
         *  for more information.
         *
         * Default: `{}`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        ati_tag_options?: { [key: string]: any };
        /**
         * Whether or not to send some tracking requests (mostly clicks behind a redirect) using `navigator.sendBeacon` instead of a normal XHR request.
         *
         * Default: `true`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        beacons?: boolean;
        /**
         * Used to define your own custom path for Poool cookies.
         *
         * Default: `'/'`
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        cookies_path?: string;
    }

    interface AuditConfig {
        /**
         * While the default configuration works for most use cases, you might want to configure some of Audit.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param config - Audit.js configuration object.
         * @param [readonly=false] - Whether or not the configuration should be read-only.
         * @returns The audit instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        (config: AuditConfigOptions, readonly?: boolean): Audit;
        /**
         * While the default configuration works for most use cases, you might want to configure some of Audit.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param optionName - Audit.js configuration option name.
         * @param value - Audit.js configuration option value.
         * @param [readonly=false] - Whether or not the configuration should be read-only.
         * @returns The audit instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/configuration
         */
        (optionName: string, value: any, readonly?: boolean): Audit;
    }

    interface AccessFactory {
        config: AccessConfig;
        /**
         * Creates a new Paywall instance.
         *
         * @param config - the paywall configuration object
         * @returns The Access factory instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        createPaywall(config: {
            target?: string;
            content?: string | HTMLElement;
            pageType?: "premium" | "free";
            mode?: "hide" | "excerpt" | "custom";
            percent?: number;
        }): AccessFactory;
        texts: AccessTexts;
        styles: AccessStyles;
        variables: AccessVariables;
        /**
         * Allows to set a callback to be called when a specific event is triggered
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Access factory instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        on(event: EventsList, callback: (...props: any) => any): AccessFactory;
        /**
         * Same as {@link on} but the callback will be called only once and removed afterwards.
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Access factory instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        once(event: EventsList, callback: (...props: any) => any): AccessFactory;
        /**
         * Allows to remove an event callback previously set with {@link on} or {@link once}.
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Access factory instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        off(event: EventsList, callback: (...props: any) => any): AccessFactory;
        /**
         * Destroys the current paywall.
         *
         * @returns null
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        destroy(): null;
    }

    interface Audit {
        /**
         * Initializes Audit using your app ID.
         *
         * @param key - Your poool app ID
         * @returns the Audit instance
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        init(key: string): Audit;
        /**
         * If an `Audit` object already exists in the global object of the current page, the `Audit.js` library will be renamed to `PooolAudit` and the original `Audit` object will be restored.
         *
         * @returns the Audit instance
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        noConflict(): Audit;
        /**
         * Sends an audit event.
         *
         * @param eventName - the event name
         * @param data - the event datas
         * @param options - the event options
         * @returns the Audit instance
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        sendEvent(
            eventName: "page-view",
            data?: {
                type?: "premium" | "free" | "page";
                [key: string]: any;
            },
            options?: {
                beacons?: boolean;
                [key: string]: any;
            },
        ): Audit;
        config: AuditConfig;
        /**
         * Allows to set a callback to be called when a specific event is triggered
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Audit instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        on(eventname: EventsList, callback: (...props: any) => any): Audit;
        /**
         * Same as {@link on} but the callback will be called only once and removed afterwards.
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Audit instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        once(event: EventsList, callback: (...props: any) => any): Audit;
        /**
         * Allows to remove an event callback previously set with {@link on} or {@link once}.
         *
         * @param event - the event name
         * @param callback - the callback function
         * @returns The Audit instance.
         *
         * More infos: https://poool.dev/docs/access/javascript/audit/methods
         */
        off(event: EventsList, callback: (...props: any) => any): Audit;
    }

    interface Access {
        /**
         * Creates a new Access instance (required to display paywalls) using your app ID.
         *
         * @param key - Your poool app ID
         * @returns The access factory instance.
         *
         *  More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        init(key: string): AccessFactory;
        /**
         * If an `Access` object already exists in the global object of the current page, the `Access.js` library will be renamed to `PooolAccess` and the original `Access` object will be restored.
         *
         * @returns the Access instance
         *
         * More infos: https://poool.dev/docs/access/javascript/access/methods
         */
        noConflict(): Access;
    }
}
