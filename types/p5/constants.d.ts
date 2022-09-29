import * as p5 from './index';

declare module './index' {
    type ANGLE_MODE = RADIANS | DEGREES;

    type ARC_MODE = CHORD | PIE | OPEN;

    type BEGIN_KIND = POINTS | LINES | TRIANGLES | TRIANGLE_FAN | TRIANGLE_STRIP | QUADS | QUAD_STRIP | TESS;

    type BLEND_MODE =
        | BLEND
        | DARKEST
        | LIGHTEST
        | DIFFERENCE
        | MULTIPLY
        | EXCLUSION
        | SCREEN
        | REPLACE
        | OVERLAY
        | HARD_LIGHT
        | SOFT_LIGHT
        | DODGE
        | BURN
        | ADD
        | NORMAL;

    type COLOR_MODE = RGB | HSB | HSL;

    type CURSOR_TYPE = ARROW | CROSS | HAND | MOVE | TEXT;

    type DEBUG_MODE = GRID | AXES;

    type DESCRIBE_DISPLAY = LABEL | FALLBACK;

    type ELLIPSE_MODE = CENTER | RADIUS | CORNER | CORNERS;

    type END_MODE = CLOSE;

    type FILTER_TYPE = THRESHOLD | GRAY | OPAQUE | INVERT | POSTERIZE | ERODE | DILATE | BLUR;

    type GRAPHICS_RENDERER = P2D | WEBGL;

    type GRID_DISPLAY = FALLBACK | LABEL;

    type HORIZ_ALIGN = LEFT | CENTER | RIGHT;

    type IMAGE_MODE = CORNER | CORNERS | CENTER;

    type RECT_MODE = CORNER | CORNERS | CENTER | RADIUS;

    type RENDERER = P2D | WEBGL;

    type SIZE_H = AUTO;

    type SIZE_W = AUTO;

    type STROKE_CAP = ROUND | SQUARE | PROJECT;

    type STROKE_JOIN = MITER | BEVEL | ROUND;

    type TEXT_DISPLAY = FALLBACK | LABEL;

    type TEXTURE_MODE = IMAGE | NORMAL;

    type THE_STYLE = NORMAL | ITALIC | BOLD | BOLDITALIC;

    type TYPE = VIDEO | AUDIO;

    type VERT_ALIGN = TOP | BOTTOM | CENTER | BASELINE;

    type WRAP_STYLE = WORD | CHAR;

    type WRAP_X = CLAMP | REPEAT | MIRROR;

    type WRAP_Y = CLAMP | REPEAT | MIRROR;
}
