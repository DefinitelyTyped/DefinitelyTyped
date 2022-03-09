// Type definitions for textfit 2.4
// Project: https://github.com/STRML/textFit
// Definitions by: Muhun Kim <https://github.com/x86chi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

declare function textFit(
    els: HTMLElement | HTMLElement[] | NodeListOf<Element> | HTMLCollection | JQuery,
    options?: textFit.TextFitOption,
): void;

export = textFit;

declare namespace textFit {
    interface TextFitOption {
        /**
         *  if true, textFit will align vertically using css tables
         *  @default false
         */
        alignVert?: boolean | undefined;

        /**
         *  if true, textFit will set text-align: center
         *  @default false
         */
        alignHoriz?: boolean | undefined;

        /**
         *  if true, textFit will not set white-space: no-wrap
         *  @default false
         */
        multiLine?: boolean | undefined;

        /**
         *  disable to turn off automatic multi-line sensing
         *  @default true
         */
        detectMultiLine?: boolean | undefined;

        /**
         *  @default 6
         */
        minFontSize?: number | undefined;

        /**
         *  @default 80
         */
        maxFontSize?: number | undefined;

        /**
         *  if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
         *  @default true
         */
        reProcess?: boolean | undefined;

        /**
         *  if true, textFit will fit text to element width, regardless of text height
         *  @default false
         */
        widthOnly?: boolean | undefined;

        /**
         *  if true, textFit will use flexbox for vertical alignment
         *  @default false
         */
        alignVertWithFlexbox?: boolean | undefined;
    }
}

export as namespace textFit;
