import Line = require("./line");
import Circle = require("./circle");
import SemiCircle = require("./semicircle");
import Square = require("./square");
import Path = require("./path");
import Shape = require("./shape");
import utils = require("./utils");

export as namespace ProgressBar;

declare const main: {
    Line: typeof Line;
    Circle: typeof Circle;
    SemiCircle: typeof SemiCircle;
    Square: typeof Square;
    Path: typeof Path;
    Shape: typeof Shape;
    utils: typeof utils;
};

declare namespace main {
    type SvgSelector = SVGPathElement | string;

    type StepFunction = (
        state: {
            [key: string]: any;
        },
        path: Path,
        attachement: SVGPathElement,
    ) => void;

    interface Color {
        color: string;
    }

    interface AnimationOptions {
        /**
         * Duration for animation in milliseconds
         * @default 800
         */
        duration?: number | undefined;

        /**
         * Easing for animation.
         */
        easing?: string | undefined;

        /**
         * Attachment which can be any object
         * you need to modify within the step function.
         * Passed as a parameter to step function.
         */
        attachement?: SVGPathElement | undefined;

        from?: Color | undefined;

        to?: Color | undefined;

        step?: StepFunction | undefined;
    }

    interface AnimationSupport {
        /**
         * @param progress - progress from 0 to 1.
         * @param [options] - Animation options. These options override the defaults given in initialization
         * @param [cb] - Callback function which is called after transition ends.
         */
        animate(progress: number, options?: AnimationOptions, cb?: () => void): void;

        /**
         * @param progress = progress from 0 to 1.
         */
        set(progress: number): void;
        pause(): void;
        resume(): void;

        /**
         * Stops animation to its current position.
         */
        stop(): void;

        /**
         * Returns current shown progress from 0 to 1.
         * This value changes when animation is running.
         */
        value(): number;
    }

    /**
     * Options for path drawing
     */
    interface PathDrawingOptions extends AnimationOptions {
        /**
         * Stroke color.
         * @default '#3a3a3a'
         */
        color?: string | undefined;

        /**
         * Width of the stroke.
         * Unit is percentage of SVG canvas' size.
         * @description In Line shape, you should control
         * the stroke width by setting container's height.
         * WARNING: IE doesn't support values over 6, see this bug:
         * @see {@link https://github.com/kimmobrunfeldt/progressbar.js/issues/79}
         * @default 1.0
         */
        strokeWidth?: number | undefined;

        /**
         * If trail options are not defined, trail won't be drawn
         * Color for lighter trail stroke underneath the actual progress path.
         * @default '#eee'
         */
        trailColor?: string | undefined;

        /**
         * Width of the trail stroke.
         * Trail is always centered relative to actual progress path.
         * @default 1.0
         */
        trailWidth?: number | undefined;

        /**
         * Inline CSS styles for the created SVG element
         * Set `null` to disable all default styles.
         * You can disable individual defaults by setting them to `null`
         * If you specify anything in this object, none of the default styles apply
         * @default null
         */
        svgStyle?: SvgInlineStyle | null | undefined;

        /**
         *  Text element is a <p> element appended to container
         * You can add CSS rules for the text element with the className
         * NOTE: When text is set, 'position: relative' will be set to the container for centering.
         * You can also prevent all default inline styles with 'text.style: null'
         * @default null
         */
        text?: TextOptions | null | undefined;

        /**
         * Fill color for the shape. If null, no fill.
         * @default null
         */
        fill?: string | null | undefined;

        /**
         * If true, some useful console.warn calls will be done if it seems
         * that progressbar is used incorrectly
         * @default false
         */
        warnings?: boolean | undefined;
    }

    /** Inline CSS styles for the created SVG element */
    interface SvgInlineStyle {
        [key: string]: unknown | null;
    }
    /** Inline CSS styles for the text element */
    interface TextInlineStyle {
        [key: string]: unknown;
    }

    interface TextOptions {
        /**
         * Initial value for text.
         * @default null
         */
        value?: string | null | undefined;

        /**
         * Class name for text element.
         * @default 'progressbar-text'
         */
        className?: string | undefined;

        /**
         * Inline CSS styles for the text element.
         * If you want to modify all CSS your self, set null to disable all default styles.
         * If the style option contains values, container is automatically
         * set to position: relative. You can disable behavior this with `autoStyleContainer: false`
         * If you specify anything in this object, none of the default styles apply.
         */
        style?: TextInlineStyle | null | undefined;

        /**
         * Only effective if the `text.style` is not `null`.
         * By default `position: relative` is applied to container if text is set.
         * Setting this to false disables that feature.
         * @default true
         */
        autoStyleContainer?: boolean | undefined;

        /**
         * Only effective if the shape is SemiCircle.
         * If true, baseline for text is aligned with bottom of the SVG canvas.
         * If false, bottom line of SVG canvas is in the center of text.
         * @default true
         */
        alignToBottom?: boolean | undefined;
    }
}

export = main;
