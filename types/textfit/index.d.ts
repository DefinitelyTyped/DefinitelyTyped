// Type definitions for textfit 2.4
// Project: https://github.com/STRML/textFit
// Definitions by: Muhun Kim <https://github.com/x86chi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function textFit(element: HTMLElement, options?: textFit.TextFitOption): void;

export = textFit;

declare namespace textFit {
    interface TextFitOption {
        /**
         *  if true, textFit will align vertically using css tables
         *  @default false
         */
        alignVert?: boolean;

        /**
         *  if true, textFit will set text-align: center
         *  @default false
         */
        alignHoriz?: boolean;

        /**
         *  if true, textFit will not set white-space: no-wrap
         *  @default false
         */
        multiLine?: boolean;

        /**
         *  disable to turn off automatic multi-line sensing
         *  @default true
         */
        detectMultiLine?: boolean;

        /**
         *  @default 6
         */
        minFontSize?: number;

        /**
         *  @default 80
         */
        maxFontSize?: number;

        /**
         *  if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
         *  @default true
         */
        reProcess?: boolean;

        /**
         *  if true, textFit will fit text to element width, regardless of text height
         *  @default false
         */
        widthOnly?: boolean;

        /**
         *  if true, textFit will use flexbox for vertical alignment
         *  @default false
         */
        alignVertWithFlexbox?: boolean;
    }
}

export as namespace textFit;
