// Type definitions for Notify.js
// Project: https://github.com/jpillora/notifyjs
// Definitions by: Xiaohan Zhang <https://github.com/hellochar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts" />

declare module Notify {
    interface Options {
        /**
         * Whether to hide the notification on click. Default is true.
         */
        clickToHide?: boolean;

        /**
         * Whether to auto-hide the notification (after autoHideDelay milliseconds). Default is true.
         */
        autoHide?: boolean;

        /**
         * If autoHide, hide after milliseconds. Default is 5000.
         */
        autoHideDelay?: number;

        /**
         * Show the arrow pointing at the element. Default is true.
         */
        arrowShow?: boolean;

        /**
         * Arrow size in pixels. Default is 5.
         */
        arrowSize?: number;

        /**
         * Position of the notification when created relative to an element. Default is 'bottom left'.
         */
        elementPosition?: string;

        /**
         * Position of the notification when created globally. Default is 'top right'.
         */
        globalPosition?: string;

        /**
         * Style of the notification. Default is 'bootstrap'.
         *
         * For more information on styles, refer to Notify.StyleDefinition.
         */
        style?: string;

        /**
         * Class of the notification (string or [string]). Default is 'error'.
         *
         * Notify looks through the classes defined in the given style and will apply the CSS
         * attributes of that style. Additionally, a CSS class of "notifyjs-<style name>-<class name>"
         * will be applied.
         */
        className?: string;

        /**
         * Animation when notification is shown. Default is 'slideDown'.
         */
        showAnimation?: string;

        /**
         * Duration show animation, in milliseconds. Default is 400.
         */
        showDuration?: number;

        /**
         * Animation when notification is hidden. Default is 'slideUp'.
         */
        hideAnimation?: string;

        /**
         * Duration for hide animation, in milliseconds. Default is 200.
         */
        hideDuration?: number;

        /**
         * Padding in px between element and notification. Deafult is 2.
         */
        gap?: number;
    }

    /**
     * Notifications created with a specified class will have CSS properties applied to that
     * notification. This interface defines what properties and their values to apply for a given class.
     * Keys should be CSS property names, and values their values.
     */
    interface ClassCSS {
        [propertyName: string]: string;
    }

    interface StyleDefinition {

        /**
         * Defines the HTML wrapping the notification.
         *
         * If you only have HTML element that you need to modify per notification then you should give
         * this element an attribute of data-notify-text or data-notify-html. Use data-notify-html if
         * you wish to display arbitrary HTML inside the notification, otherwise, use data-notify-text
         * as it is more secure.
         * For more complex notifications, you may give a value to the data-notify-text/data-notify-html
         * attribute on an element, such as <div data-notify-html="propertyName"></div>. You may then
         * pass a javasript Object with a "propertyName" key to the notify method, whose value will be
         * the text/html that the element is populated with.
         */
        html: string;

        /**
         * Defines the available classes in this style. The "base" property will be applied to every
         * notification with this style.
         */
        classes?: {
                     [className: string]: ClassCSS;
                     base?: ClassCSS;
                 };

        /**
         * All notifications will have this CSS applied to it.
         */
        css?: string;
    }

    interface JQueryStatic {
        /**
         * Create a global notification.
         */
        (text: string, className?: string): void;
        (text: string, options?: Options): void;
        (data: any, className?: string): void;
        (data: any, options?: Options): void;

        /**
         * Create a notification positioned relative to the given element.
         */
        (element: JQuery, text: string, className?: string): void;
        (element: JQuery, text: string, options?: Options): void;
        (element: JQuery, data: any, className?: string): void;
        (element: JQuery, data: any, options?: Options): void;

        /**
         * Define a style for Notify to use.
         */
        addStyle(styleName: string, styleDefinition: StyleDefinition): void;

        /**
         * Specify the default options for all notifications.
         */
        defaults(options: Options): void;
    }


}

interface JQueryStatic {
    notify: Notify.JQueryStatic;
}

interface JQuery {
    /**
     * Create a notification positioned relative to the currently selected element.
     */
    notify(text: string, className?: string): void;
    notify(text: string, options?: Notify.Options): void;
    notify(data: any, className?: string): void;
    notify(data: any, options?: Notify.Options): void;
}

