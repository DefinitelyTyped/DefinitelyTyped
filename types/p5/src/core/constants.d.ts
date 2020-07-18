// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The default, two-dimensional renderer.
         */
        readonly P2D: P2D;

        /**
         *   One of the two render modes in p5.js: P2D (default
         *   renderer) and WEBGL Enables 3D render by
         *   introducing the third dimension: Z
         */
        readonly WEBGL: WEBGL;
        readonly ARROW: ARROW;
        readonly CROSS: CROSS;
        readonly HAND: HAND;
        readonly MOVE: MOVE;
        readonly TEXT: TEXT;
        readonly WAIT: WAIT;

        /**
         *   HALF_PI is a mathematical constant with the value
         *   1.57079632679489661923. It is half the ratio of
         *   the circumference of a circle to its diameter. It
         *   is useful in combination with the trigonometric
         *   functions sin() and cos().
         */
        readonly HALF_PI: number;

        /**
         *   PI is a mathematical constant with the value
         *   3.14159265358979323846. It is the ratio of the
         *   circumference of a circle to its diameter. It is
         *   useful in combination with the trigonometric
         *   functions sin() and cos().
         */
        readonly PI: number;

        /**
         *   QUARTER_PI is a mathematical constant with the
         *   value 0.7853982. It is one quarter the ratio of
         *   the circumference of a circle to its diameter. It
         *   is useful in combination with the trigonometric
         *   functions sin() and cos().
         */
        readonly QUARTER_PI: number;

        /**
         *   TAU is an alias for TWO_PI, a mathematical
         *   constant with the value 6.28318530717958647693. It
         *   is twice the ratio of the circumference of a
         *   circle to its diameter. It is useful in
         *   combination with the trigonometric functions sin()
         *   and cos().
         */
        readonly TAU: number;

        /**
         *   TWO_PI is a mathematical constant with the value
         *   6.28318530717958647693. It is twice the ratio of
         *   the circumference of a circle to its diameter. It
         *   is useful in combination with the trigonometric
         *   functions sin() and cos().
         */
        readonly TWO_PI: number;

        /**
         *   Constant to be used with angleMode() function, to
         *   set the mode which p5.js interprates and
         *   calculates angles (either DEGREES or RADIANS).
         */
        readonly DEGREES: DEGREES;

        /**
         *   Constant to be used with angleMode() function, to
         *   set the mode which p5.js interprates and
         *   calculates angles (either RADIANS or DEGREES).
         */
        readonly RADIANS: RADIANS;
        readonly CORNER: CORNER;
        readonly CORNERS: CORNERS;
        readonly RADIUS: RADIUS;
        readonly RIGHT: RIGHT;
        readonly LEFT: LEFT;
        readonly CENTER: CENTER;
        readonly TOP: TOP;
        readonly BOTTOM: BOTTOM;
        readonly BASELINE: BASELINE;
        readonly POINTS: POINTS;
        readonly LINES: LINES;
        readonly LINE_STRIP: LINE_STRIP;
        readonly LINE_LOOP: LINE_LOOP;
        readonly TRIANGLES: TRIANGLES;
        readonly TRIANGLE_FAN: TRIANGLE_FAN;
        readonly TRIANGLE_STRIP: TRIANGLE_STRIP;
        readonly QUADS: QUADS;
        readonly QUAD_STRIP: QUAD_STRIP;
        readonly CLOSE: CLOSE;
        readonly OPEN: OPEN;
        readonly CHORD: CHORD;
        readonly PIE: PIE;
        readonly PROJECT: PROJECT;
        readonly SQUARE: SQUARE;
        readonly ROUND: ROUND;
        readonly BEVEL: BEVEL;
        readonly MITER: MITER;
        readonly RGB: RGB;
        readonly HSB: HSB;
        readonly HSL: HSL;

        /**
         *   AUTO allows us to automatically set the width or
         *   height of an element (but not both), based on the
         *   current height and width of the element. Only one
         *   parameter can be passed to the size function as
         *   AUTO, at a time.
         */
        readonly AUTO: AUTO;
        readonly ALT: number;
        readonly BACKSPACE: number;
        readonly CONTROL: number;
        readonly DELETE: number;
        readonly DOWN_ARROW: number;
        readonly ENTER: number;
        readonly ESCAPE: number;
        readonly LEFT_ARROW: number;
        readonly OPTION: number;
        readonly RETURN: number;
        readonly RIGHT_ARROW: number;
        readonly SHIFT: number;
        readonly TAB: number;
        readonly UP_ARROW: number;
        readonly BLEND: BLEND;
        readonly ADD: ADD;
        readonly DARKEST: DARKEST;
        readonly LIGHTEST: LIGHTEST;
        readonly DIFFERENCE: DIFFERENCE;
        readonly SUBTRACT: SUBTRACT;
        readonly EXCLUSION: EXCLUSION;
        readonly MULTIPLY: MULTIPLY;
        readonly SCREEN: SCREEN;
        readonly REPLACE: REPLACE;
        readonly OVERLAY: OVERLAY;
        readonly HARD_LIGHT: HARD_LIGHT;
        readonly SOFT_LIGHT: SOFT_LIGHT;
        readonly DODGE: DODGE;
        readonly BURN: BURN;
        readonly THRESHOLD: THRESHOLD;
        readonly GRAY: GRAY;
        readonly OPAQUE: OPAQUE;
        readonly INVERT: INVERT;
        readonly POSTERIZE: POSTERIZE;
        readonly DILATE: DILATE;
        readonly ERODE: ERODE;
        readonly BLUR: BLUR;
        readonly NORMAL: NORMAL;
        readonly ITALIC: ITALIC;
        readonly BOLD: BOLD;
        readonly BOLDITALIC: BOLDITALIC;
        readonly LINEAR: LINEAR;
        readonly QUADRATIC: QUADRATIC;
        readonly BEZIER: BEZIER;
        readonly CURVE: CURVE;
        readonly STROKE: STROKE;
        readonly FILL: FILL;
        readonly TEXTURE: TEXTURE;
        readonly IMMEDIATE: IMMEDIATE;
        readonly IMAGE: IMAGE;
        readonly NEAREST: NEAREST;
        readonly REPEAT: REPEAT;
        readonly CLAMP: CLAMP;
        readonly MIRROR: MIRROR;
        readonly LANDSCAPE: LANDSCAPE;
        readonly PORTRAIT: PORTRAIT;
        readonly GRID: GRID;
        readonly AXES: AXES;
    }
}
