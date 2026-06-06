import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from "three";

import { Font } from "../loaders/FontLoader.js";

export interface TextGeometryParameters extends ExtrudeGeometryOptions {
    /**
     * The font.
     */
    font: Font;

    /**
     * The text size.
     * @default 100
     */
    size?: number | undefined;

    /**
     * Depth to extrude the shape.
     * @default 50
     */
    depth?: number | undefined;

    /**
     * Whether to beveling to the shape or not.
     * @default false
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into the original shape the bevel goes.
     * @default 10
     */
    bevelThickness?: number | undefined;

    /**
     * Distance from the shape outline that the bevel extends.
     * @default 8
     */
    bevelSize?: number | undefined;

    direction?: "ltr" | "rtl" | "tb" | undefined;
}

/**
 * A class for generating text as a single geometry. It is constructed by providing a string of text, and a set of
 * parameters consisting of a loaded font and extrude settings.
 *
 * See the {@link FontLoader} page for additional details.
 *
 * `TextGeometry` uses [typeface.json](http://gero3.github.io/facetype.js/) generated fonts.
 * Some existing fonts can be found located in `/examples/fonts`.
 *
 * ```js
 * const loader = new FontLoader();
 * const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
 * const geometry = new TextGeometry( 'Hello three.js!', {
 * 	font: font,
 * 	size: 80,
 * 	depth: 5,
 * 	curveSegments: 12
 * } );
 * ```
 *
 * @augments ExtrudeGeometry
 * @three_import import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
 */
declare class TextGeometry extends ExtrudeGeometry {
    /**
     * Constructs a new text geometry.
     *
     * @param {string} text - The text that should be transformed into a geometry.
     * @param {TextGeometry~Options} [parameters] - The text settings.
     */
    constructor(text: string, parameters?: TextGeometryParameters);

    /**
     * Holds the constructor parameters that have been
     * used to generate the geometry. Any modification
     * after instantiation does not change the geometry.
     *
     * @type {Object}
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
    };
}

export { TextGeometry };
