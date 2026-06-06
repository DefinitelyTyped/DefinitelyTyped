/// <reference types="jquery" />

declare namespace JQueryNotifyBar {
    interface NotifyBarOptions {
        /**
         * What text will be inside bar. Can be HTML or just text.
         */
        html?: string | undefined;

        /**
         * How long bar will be delayed, doesn't count animation time.
         */
        delay?: number | undefined;

        /**
         * How long this bar will be slided up and down.
         *
         * Default: "normal"
         */
        animationSpeed?: string | number | undefined;

        /**
         * Custom jQuery object for notify bar.
         */
        jqObject?: JQuery | undefined;

        /**
         * You can define own CSS class for Notify bar. There are too premade classes "error", "warning" and "success".
         */
        cssClass?: string | undefined;

        /**
         * If set to true close button will be displayed.
         */
        close?: boolean | undefined;

        /**
         * Sets the text to close button.
         */
        closeText?: string | undefined;

        /**
         * If enabled, user can hide notify bar just by click on it.
         */
        closeOnClick?: boolean | undefined;

        /**
         * If enabled, user can hide notify bar just by moving mouse cursor on it.
         */
        closeOnOver?: boolean | undefined;

        /**
         * Callback on before show.
         */
        onBeforeShow?: (() => any) | undefined;

        /**
         * Callback on show.
         */
        onShow?: (() => any) | undefined;

        /**
         * Callback on before hide.
         */
        onBeforeHide?: (() => any) | undefined;

        /**
         * Callback on hide.
         */
        onHide?: (() => any) | undefined;

        /**
         * Set the position of notify bar. Possible values are "top", "bottom".
         */
        position?: string | undefined;
    }

    interface NotifyBarOptionsForAnimationSpeedString extends NotifyBarOptions {
        /**
         * How long this bar will be slided up and down. Possible values are "slow", "default", "normal", "fast".
         */
        animationSpeed?: string | undefined;
    }

    interface NotifyBarOptionsForAnimationSpeedNumber extends NotifyBarOptions {
        /**
         * How long this bar will be slided up and down.
         */
        animationSpeed?: number | undefined;
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
