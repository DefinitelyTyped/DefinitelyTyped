import * as zdog from "zdog";

export as namespace Zfont;

export function init(x: typeof zdog): typeof zdog;

declare module "zdog" {
    /** @see {@link https://github.com/jaames/zfont#multiline-text Zfont API} */
    type MultilineText = string | ReadonlyArray<string>;

    /**
     * Horizontal text alignment (equivalent to the CSS `text-align` property).
     * @see {@link https://github.com/jaames/zfont#textalign Zfont API} (Text)
     * @see {@link https://github.com/jaames/zfont#textalign-1 Zfont API} (TextGroup)
     */
    type TextAlign = "left" | "center" | "right";

    /**
     * Vertical text alignment, equivalent to the HTML5 canvas' {@link CanvasRenderingContext2D.textBaseline textBaseline} property.
     * @see {@link https://github.com/jaames/zfont#textbaseline Zfont API} (Text)
     * @see {@link https://github.com/jaames/zfont#textbaseline-1 Zfont API} (TextGroup)
     */
    type TextBaseline = "top" | "middle" | "bottom";

    /**
     * @see {@link Font}
     * @see {@link https://github.com/jaames/zfont#options Zfont API}
     */
    interface FontOptions {
        /** Font URL path. This can be a `.ttf` or `.otf` font, check out the {@link https://github.com/photopea/Typr.js Typr.js repo} for more details about font support. */
        readonly src: string;
    }

    /**
     * Represents a font that can be used by an instance of either {@link Text} or {@link TextGroup}.
     * @see {@link https://github.com/jaames/zfont#zdogfont Zfont API}
     */
    class Font {
        constructor(options: FontOptions);

        /**
         * Returns a Promise which resolves once this font has finished loading.
         * @see {@link https://github.com/jaames/zfont#waitforload Zfont API}
         */
        waitForLoad(): Promise<void>;
    }

    /**
     * @see {@link Text}
     * @see {@link https://github.com/jaames/zfont#options-1 Zfont API}
     */
    interface TextOptions<T extends MultilineText> extends ShapeOptions {
        /** @see {@link Text#font} */
        readonly font: Font;

        /**
         * @default ''
         * @see {@link Text#value}
         */
        readonly value?: T | undefined;

        /**
         * Measured in pixels.
         * @default 64
         * @see {@link Text#fontSize}
         */
        readonly fontSize?: number | undefined;

        /**
         * @default 'left'
         * @see {@link Text#textAlign}
         */
        readonly textAlign?: TextAlign | undefined;

        /**
         * @default 'bottom'
         * @see {@link Text#textBaseline}
         */
        readonly textBaseline?: TextBaseline | undefined;
    }

    /**
     * An object used for rendering text.
     * @see {@link https://github.com/jaames/zfont#zdogtext Zfont API}
     */
    class Text<T extends MultilineText = MultilineText> extends Shape {
        /** @see {@link TextOptions#font} */
        font: Font;

        /** @see {@link TextOptions#value} */
        value: MultilineText;

        /** @see {@link TextOptions#fontSize} */
        fontSize: number;

        /** @see {@link TextOptions#textAlign} */
        textAlign: TextAlign;

        /** @see {@link TextOptions#textBaseline} */
        textBaseline: TextBaseline;

        constructor(options: TextOptions<T>);
    }

    /**
     * @see {@link TextGroup}
     * @see {@link https://github.com/jaames/zfont#options-2 Zfont API}
     */
    interface TextGroupOptions<T extends MultilineText> extends GroupOptions {
        /** @see {@link TextGroup#font} */
        readonly font: Font;

        /**
         * @default ''
         * @see {@link TextGroup#value}
         */
        readonly value?: T | undefined;

        /**
         * Measured in pixels.
         * @default 64
         * @see {@link TextGroup#fontSize}
         */
        readonly fontSize?: number | undefined;

        /**
         * @default 'left'
         * @see {@link TextGroup#textAlign}
         */
        readonly textAlign?: TextAlign | undefined;

        /**
         * @default 'bottom'
         * @see {@link TextGroup#textBaseline}
         */
        readonly textBaseline?: TextBaseline | undefined;

        /**
         * @default '#333'
         * @see {@link TextGroup#color}
         */
        readonly color?: string | undefined;

        /**
         * @default false
         * @see {@link TextGroup#fill}
         */
        readonly fill?: boolean | undefined;

        /**
         * @default 1
         * @see {@link TextGroup#stroke}
         */
        readonly stroke?: number | false | undefined;
    }

    /**
     * This class is very similar to {@link Text}, except it acts as a {@link Group} instead, and each text glyph is rendered as its own shape.
     * This is helpful for more advanced use-cases where you need control over each character.
     * @see {@link https://github.com/jaames/zfont#zdogtextgroup Zfont API}
     * @see {@link  Zfont API}
     */
    class TextGroup<T extends MultilineText = MultilineText> extends Group {
        /**
         * @see {@link TextGroupOptions#font}
         * @see {@link https://github.com/jaames/zfont#font-1 Zfont API}
         */
        font: Font;

        /**
         * @see {@link TextGroupOptions#value}
         * @see {@link https://github.com/jaames/zfont#value-1 Zfont API}
         */
        value: T;

        /**
         * @see {@link TextGroupOptions#fontSize}
         * @see {@link https://github.com/jaames/zfont#fontsize-1 Zfont API}
         */
        fontSize: number;

        /**
         * @see {@link TextGroupOptions#textAlign}
         * @see {@link https://github.com/jaames/zfont#textalign-1 Zfont API}
         */
        textAlign: TextAlign;

        /**
         * @see {@link TextGroupOptions#textBaseline}
         * @see {@link https://github.com/jaames/zfont#textbaseline-1 Zfont API}
         */
        textBaseline: TextBaseline;

        /**
         * @see {@link TextGroupOptions#color}
         * @see {@link https://github.com/jaames/zfont#color Zfont API}
         */
        color: string;

        /**
         * @see {@link TextGroupOptions#fill}
         * @see {@link https://github.com/jaames/zfont#fill Zfont API}
         */
        fill: boolean;

        /**
         * @see {@link TextGroupOptions#stroke}
         * @see {@link https://github.com/jaames/zfont#stroke Zfont API}
         */
        stroke: number | false;

        constructor(options: TextGroupOptions<T>);
    }

    /**
     * Returns a {@link Promise} which resolves as soon as all the fonts currently added to the scene are loaded and ready for use.
     * @see {@link https://github.com/jaames/zfont#zdogtext Zfont API}
     */
    function waitForFonts(): Promise<undefined[]>;
}
