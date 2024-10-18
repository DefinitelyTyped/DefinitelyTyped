// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Version of this p5.js.
         */
        readonly VERSION: VERSION;

        /**
         *   The default, two-dimensional renderer.
         */
        readonly P2D: P2D;

        /**
         *   One of the two render modes in p5.js, used for
         *   computationally intensive tasks like 3D rendering
         *   and shaders. WEBGL differs from the default P2D
         *   renderer in the following ways:
         *
         *   - Coordinate System - When drawing in WEBGL mode,
         *   the origin point (0,0,0) is located at the center
         *   of the screen, not the top-left corner. See the
         *   learn page about coordinates and transformations.
         *   - 3D Shapes - WEBGL mode can be used to draw
         *   3-dimensional shapes like box(), sphere(), cone(),
         *   and more. See the learn page about custom geometry
         *   to make more complex objects.
         *   - Shape Detail - When drawing in WEBGL mode, you
         *   can specify how smooth curves should be drawn by
         *   using a detail parameter. See the wiki section
         *   about shapes for a more information and an
         *   example.
         *   - Textures - A texture is like a skin that wraps
         *   onto a shape. See the wiki section about textures
         *   for examples of mapping images onto surfaces with
         *   textures.
         *   - Materials and Lighting - WEBGL offers different
         *   types of lights like ambientLight() to place
         *   around a scene. Materials like specularMaterial()
         *   reflect the lighting to convey shape and depth.
         *   See the learn page for styling and appearance to
         *   experiment with different combinations.
         *   - Camera - The viewport of a WEBGL sketch can be
         *   adjusted by changing camera attributes. See the
         *   learn page section about cameras for an
         *   explanation of camera controls.
         *   - Text - WEBGL requires opentype/truetype font
         *   files to be preloaded using loadFont(). See the
         *   wiki section about text for details, along with a
         *   workaround.
         *   - Shaders - Shaders are hardware accelerated
         *   programs that can be used for a variety of effects
         *   and graphics. See the introduction to shaders to
         *   get started with shaders in p5.js.
         *   - Graphics Acceleration - WEBGL mode uses the
         *   graphics card instead of the CPU, so it may help
         *   boost the performance of your sketch (example:
         *   drawing more shapes on the screen at once).
         *
         *   To learn more about WEBGL mode, check out all the
         *   interactive WEBGL tutorials in the "Learn" section
         *   of this website, or read the wiki article "Getting
         *   started with WebGL in p5".
         */
        readonly WEBGL: WEBGL;

        /**
         *   One of the two possible values of a WebGL canvas
         *   (either WEBGL or WEBGL2), which can be used to
         *   determine what capabilities the rendering
         *   environment has.
         */
        readonly WEBGL2: WEBGL2;
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
         *   Constant to be used with the angleMode() function,
         *   to set the mode in which p5.js interprets and
         *   calculates angles (either DEGREES or RADIANS).
         */
        readonly DEGREES: DEGREES;

        /**
         *   Constant to be used with the angleMode() function,
         *   to set the mode in which p5.js interprets and
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
        readonly TESS: TESS;
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

        /**
         *   HSB (hue, saturation, brightness) is a type of
         *   color model. You can learn more about it at HSB.
         */
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
        readonly REMOVE: REMOVE;
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
        readonly CHAR: CHAR;
        readonly WORD: WORD;
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
        readonly LABEL: LABEL;
        readonly FALLBACK: FALLBACK;
        readonly CONTAIN: CONTAIN;
        readonly COVER: COVER;
        readonly UNSIGNED_BYTE: UNSIGNED_BYTE;
        readonly UNSIGNED_INT: UNSIGNED_INT;
        readonly HALF_FLOAT: HALF_FLOAT;
        readonly FLOAT: FLOAT;
        readonly RGBA: RGBA;
    }
}
