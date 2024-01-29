interface JQuery {
    /**
     * jQuery.dotdotdot is an advanced cross-browser ellipsis for multiple line content plugin.
     * @param options settings that could modify a behaviour.
     */
    dotdotdot(options?: JQueryDotDotDot.IDotDotDotOptions): JQuery;
}

declare namespace JQueryDotDotDot {
    interface IDotDotDotOptions {
        /**    The text to add as ellipsis.
         * Default: '... '
         */
        ellipsis?: string | undefined;

        /** How to cut off the text/html: 'word'/'letter'/'children'
         * Default: 'word'
         */
        wrap?: string | undefined;

        /** Wrap-option fallback to 'letter' for long words
         * Default: true
         */
        fallbackToLetter?: boolean | undefined;

        /** jQuery-selector for the element to keep and put after the ellipsis.
         * Default: null
         */
        after?: string | JQuery | undefined;

        /** Whether to update the ellipsis: true/'window'
         * Default: false
         */
        watch?: boolean | "window" | undefined;

        /** Optionally set a max-height, if null, the height will be measured.
         * Default: null
         */
        height?: number | undefined;

        /** Deviation for the height-option.
         * Default: 0
         */
        tolerance?: number | undefined; //

        /** Callback function that is fired after the ellipsis is added,
         * receives two parameters:
         * @param isTruncated (boolean)
         * @param orgContent (string) Documentation says it is string but it is object
         *        which has e.g.
         *                 context: HTMLHtmlElement;
         *                 length: number; // seems to be always 1
         *                 [index] // this contains the text: orgContent[0].data
         */
        callback?(isTruncated: boolean, orgContent: any): void;

        lastCharacter?: IDotDotDotOptionsLastCharacter | undefined;
    }

    interface IDotDotDotOptionsLastCharacter {
        /** Remove these characters from the end of the truncated text.
         * Default: [' ', ',', ';', '.', '!', '?']
         */
        remove?: string[] | undefined;
        /** Don't add an ellipsis if this array contains
         * the last character of the truncated text.
         * Default:  []
         */
        noEllipsis?: string[] | undefined;
    }
}
