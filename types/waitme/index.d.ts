/// <reference types="jquery" />

declare namespace WaitMe {
    interface WaitMeOptions {
        /**
         * animation effect (string).
         * Use: 'bounce' - default
         *      | none
         *      | rotateplane
         *      | stretch
         *      | orbit
         *      | roundBounce
         *      | win8
         *      | win8_linear
         *      | ios
         *      | facebook
         *      | rotation
         *      | timer
         *      | pulse
         *      | progressBar
         *      | bouncePulse
         *      | img
         */
        effect?:
            | "none"
            | "bounce"
            | "rotateplane"
            | "stretch"
            | "orbit"
            | "roundBounce"
            | "win8"
            | "win8_linear"
            | "ios"
            | "facebook"
            | "rotation"
            | "timer"
            | "pulse"
            | "progressBar"
            | "bouncePulse"
            | "img"
            | undefined;
        /**
         * place text under the effect (string).
         * Use: 'text'.
         */
        text?: string | undefined;
        /**
         * background for container (string).
         * Use: 'rgba(255,255,255,0.7)'. You can use color and image.
         */
        bg?: string | undefined;
        /**
         * color for background animation and text (string, array).
         * Use: '#000', ['','',...] - you can use multicolor for effect
         */
        color?: string | string[] | undefined;
        /**
         * set max size for elem animation (string).
         * Use: 40. By default, use empty string.
         */
        maxSize?: number | string | undefined;
        /**
         * change text position (string).
         * Use: 'vertical' - default, 'horizontal'.
         */
        textPos?: "vertical" | "horizontal" | undefined;
        /**
         * change font size (string).
         * Use: '18px'. By default, use empty string.
         */
        fontSize?: string | undefined;
        /**
         * url to image (string).
         * Use: 'url'. By default, use empty string. Use with effect: 'img'.
         */
        source?: string | undefined;
        /**
         * code execution after closed (function).
         * Use: function(){ //your code here... } or ()=>{ //your code here... }
         * @returns {void}
         */
        onClose?: (() => void) | undefined;
    }

    interface WaitMeStatic {
        /**
         * init with default options
         * Use: $(container).waitMe();
         *
         * init with custom options
         * Use: $(container).waitMe({param1 : value1, param2 : value2, ...});
         *
         * for close waitMe.
         * Use: $(container).waitMe("hide");
         *
         * @param options
         * @returns {JQuery}
         */
        (options?: WaitMeOptions | "hide"): JQuery;
    }
}

interface JQuery {
    /**
     * $(container).waitMe({param1 : value1, param2 : value2, ...});
     */
    waitMe: WaitMe.WaitMeStatic;

    /**
     * execution after closed.
     * Use: $('.waitMe').on('close', function() {});
     * @param event
     * @param handler
     * @returns {this}
     */
    on(event: "close", handler: () => void): this;
}
