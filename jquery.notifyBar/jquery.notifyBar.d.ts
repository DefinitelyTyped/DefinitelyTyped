// Type definitions for jQuery Notify Bar 1.4
// Project: http://www.whoop.ee/posts/2013-04-05-the-resurrection-of-jquery-notify-bar/
// Definitions by: Shunsuke Ohtani <https://github.com/zaneli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module JQueryNotifyBar {

    interface NotifyBarOptions {
        /**
         * What text will be inside bar. Can be HTML or just text.
         */
        html?: string;

        /**
         * How long bar will be delayed, doesn't count animation time.
         */
        delay?: number;

        /**
         * Custom jQuery object for notify bar.
         */
        jqObject?: JQuery;

        /**
         * You can define own CSS class for Notify bar. There are too premade classes "error", "warning" and "success".
         */
        cssClass?: string;

        /**
         * If set to true close button will be displayed.
         */
        close?: boolean;

        /**
         * Sets the text to close button.
         */
        closeText?: string;

        /**
         * If enabled, user can hide notify bar just by click on it.
         */
        closeOnClick?: boolean;

        /**
         * If enabled, user can hide notify bar just by moving mouse cursor on it.
         */
        closeOnOver?: boolean;

        /**
         * Callback on before show.
         */
        onBeforeShow?: () => any;

        /**
         * Callback on show.
         */
        onShow?: () => any;

        /**
         * Callback on before hide.
         */
        onBeforeHide?: () => any;

        /**
         * Callback on hide.
         */
        onHide?: () => any;

        /**
         * Set the position of notify bar. Possible values are "top", "bottom".
         */
        position?: string;
    }

    interface NotifyBarOptionsForAnimationSpeedString extends NotifyBarOptions {
        /**
         * How long this bar will be slided up and down. Possible values are "slow", "default", "normal", "fast".
         */
        animationSpeed?: string;
    }

    interface NotifyBarOptionsForAnimationSpeedNumber extends NotifyBarOptions {
        /**
         * How long this bar will be slided up and down.
         */
        animationSpeed?: number;
    }
}

interface JQueryStatic {
    /**
     * Show notify bar.
     *
     * @param options notify bar options
     */
    notifyBar(options?: JQueryNotifyBar.NotifyBarOptions): void;
}
