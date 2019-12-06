// Type definitions for fontkit 1.8
// Project: https://github.com/foliojs/fontkit#readme
// Definitions by: Teoxoy <https://github.com/Teoxoy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * There are several different types of font objects that are returned by fontkit depending on the font format.
 * They all inherit from the TTFFont class and have the same public API.
 */
export interface Font {
    postscriptName: string;
    fullName: string;
    familyName: string;
    subfamilyName: string;
    copyright: string;
    version: number;

    /** the size of the font’s internal coordinate grid */
    unitsPerEm: number;
    /** the font’s ascender */
    ascent: number;
    /** the font’s descender */
    descent: number;
    /** the amount of space that should be included between lines */
    lineGap: number;
    /** the offset from the normal underline position that should be used */
    underlinePosition: number;
    /** the weight of the underline that should be used */
    underlineThickness: number;
    /** if this is an italic font, the angle the cursor should be drawn at to match the font design */
    italicAngle: number;
    /** the height of capital letters above the baseline */
    capHeight: number;
    /** the height of lower case letters */
    xHeight: number;
    /** the font’s bounding box, i.e. the box that encloses all glyphs in the font */
    bbox: BBOX;

    /** the number of glyphs in the font */
    numGlyphs: number;
    /** an array of all of the unicode code points supported by the font */
    characterSet: number[];
    /** an array of all OpenType feature tags (or mapped AAT tags) supported by the font */
    availableFeatures: string[];

    /**
     * Returns an array of strings that map to the given glyph id.
     */
    stringsForGlyph(gid: number): string[];

    /**
     * Maps a single unicode code point to a Glyph object.
     * Does not perform any advanced substitutions (there is no context to do so).
     */
    glyphForCodePoint(codePoint: number): Glyph;

    /**
     * Returns whether there is glyph in the font for the given unicode code point.
     */
    hasGlyphForCodePoint(codePoint: number): boolean;

    /**
     * Returns an array of Glyph objects for the given string.
     * This is only a one-to-one mapping from characters to glyphs.
     * For most uses, you should use font.layout (described below), which
     * provides a much more advanced mapping supporting AAT and OpenType shaping.
     */
    glyphsForString(string: string): Glyph[];

    /**
     * Returns the advance width for a single glyph id.
     */
    widthOfGlyph(glyph_id: number): number;

    /**
     * Returns a GlyphRun object, which includes an array of Glyphs and GlyphPositions for the given string.
     */
    layout(
        string: string,
        features?: string[] | Record<string, boolean>,
        script?: string,
        language?: string,
        direction?: string
    ): GlyphRun;
}

export interface GlyphRun {
    /**
     * An array of Glyph objects in the run
     */
    glyphs: Glyph[];

    /**
     * An array of GlyphPosition objects for each glyph in the run
     */
    positions: GlyphPosition[];

    /**
     * The script that was requested for shaping. This was either passed in or detected automatically.
     */
    script: string;

    /**
     * The language requested for shaping, as passed in. If `null`, the default language for the
     * script was used.
     */
    language: string;

    /**
     * The direction requested for shaping, as passed in (either ltr or rtl).
     * If `null`, the default direction of the script is used.
     */
    direction: string;

    /**
     * The features requested during shaping. This is a combination of user
     * specified features and features chosen by the shaper.
     */
    features: Record<string, boolean>;

    /**
     * The total advance width of the run.
     */
    advanceWidth: number;

    /**
     * The total advance height of the run.
     */
    advanceHeight: number;

    /**
     * The bounding box containing all glyphs in the run.
     */
    bbox: BBOX;
}

/**
 * Represents positioning information for a glyph in a GlyphRun.
 */
export interface GlyphPosition {
    /** The amount to move the virtual pen in the X direction after rendering this glyph. */
    xAdvance: number;

    /** The amount to move the virtual pen in the Y direction after rendering this glyph. */
    yAdvance: number;

    /** The offset from the pen position in the X direction at which to render this glyph. */
    xOffset: number;

    /** The offset from the pen position in the Y direction at which to render this glyph. */
    yOffset: number;
}

/**
 * Glyph objects represent a glyph in the font. They have various properties for accessing metrics and
 * the actual vector path the glyph represents, and methods for rendering the glyph to a graphics context.
 *
 * You do not create glyph objects directly. They are created by various methods on the font object.
 * There are several subclasses of the base Glyph class internally that may be returned depending
 * on the font format, but they all inherit from this class.
 */
export interface Glyph {
    /** the glyph id in the font */
    id: number;

    /**
     * An array of unicode code points that are represented by this glyph.
     * There can be multiple code points in the case of ligatures and other glyphs
     * that represent multiple visual characters.
     */
    codePoints: number[];

    /** a vector Path object representing the glyph */
    path: Path;

    /** the glyph’s bounding box, i.e. the rectangle that encloses the glyph outline as tightly as possible. */
    bbox: BBOX;

    /**
     * The glyph’s control box.
     * This is often the same as the bounding box, but is faster to compute.
     * Because of the way bezier curves are defined, some of the control points
     * can be outside of the bounding box. Where `bbox` takes this into account,
     * `cbox` does not. Thus, cbox is less accurate, but faster to compute.
     * See [here](http://www.freetype.org/freetype2/docs/glyphs/glyphs-6.html#section-2)
     * for a more detailed description.
     */
    cbox: BBOX;

    /** the glyph’s advance width */
    advanceWidth: number;

    /** is a mark glyph (non-spacing combining glyph) */
    isMark: boolean;

    /** is a ligature glyph (multiple character, spacing glyph) */
    isLigature: boolean;
}

/**
 * Path objects are returned by glyphs and represent the actual
 * vector outlines for each glyph in the font. Paths can be converted
 * to SVG path data strings, or to functions that can be applied to
 * render the path to a graphics context.
 */
export interface Path {
    commands: PathCommand[];

    /**
     * Gets the exact bounding box of the path by evaluating curve segments.
     * Slower to compute than the control box, but more accurate.
     */
    bbox: BBOX;

    /**
     * Gets the "control box" of a path.
     * This is like the bounding box, but it includes all points including
     * control points of bezier segments and is much faster to compute than
     * the real bounding box.
     */
    cbox: BBOX;

    /**
     * Compiles the path to a JavaScript function that can be applied with
     * a graphics context in order to render the path.
     */
    toFunction(): (ctx: CanvasRenderingContext2D) => void;

    /** Converts the path to an SVG path data string */
    toSVG(): string;

    /** Transforms the path by the given matrix */
    transform(m0: number, m1: number, m2: number, m3: number, m4: number, m5: number): this;

    /** Translates the path by the given offset */
    translate(x: number, y: number): this;

    /** Rotates the path by the given angle (in radians) */
    rotate(angle: number): this;

    /** Scales the path */
    scale(scaleX: number, scaleY?: number): this;
}

export interface PathCommand {
    command: 'moveTo' | 'lineTo' | 'quadraticCurveTo' | 'bezierCurveTo' | 'closePath';
    args: number[];
}

export interface BBOX {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

interface Fontkit {
    /**
     * Opens a font file asynchronously, and calls the callback with a font object.
     * For collection fonts (such as TrueType collection files),
     * you can pass a postscriptName to get that font out of the collection instead of a collection object.
     */
    open(filename: string, postscriptName: string, callback: (err: Error | null, font: Font) => void): void;

    /**
     * Opens a font file synchronously, and returns a font object.
     * For collection fonts (such as TrueType collection files),
     * you can pass a postscriptName to get that font out of the collection instead of a collection object.
     */
    openSync(filename: string, postscriptName?: string): Font;

    /**
     * Returns a font object for the given buffer.
     * For collection fonts (such as TrueType collection files),
     * you can pass a postscriptName to get that font out of the collection instead of a collection object.
     */
    create(buffer: Buffer, postscriptName?: string): Font;
}

declare const defExp: Fontkit;
export default defExp;
