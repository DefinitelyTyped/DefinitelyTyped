import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from "../../../src/Three.js";

import { Font } from "../loaders/FontLoader.js";

export interface TextGeometryParameters extends ExtrudeGeometryOptions {
    font: Font;

    /**
     * Size of the text
     * Expects a `Float`.
     * @defaultValue `100`
     */
    size?: number | undefined;

    /**
     * Thickness to extrude text.
     * Expects a `Float`.
     * @defaultValue `50`
     */
    height?: number | undefined;

    /**
     * @override
     * @defaultValue `12`
     */
    curveSegments?: number | undefined;

    /**
     * @defaultValue `false`
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into text bevel goes.
     * Expects a `Float`.
     * @override
     * @defaultValue `10`
     */
    bevelThickness?: number | undefined;

    /**
     * How far from text outline is bevel.
     * Expects a `Float`.
     * @override
     * @defaultValue `8`
     */
    bevelSize?: number | undefined;

    /**
     * How far from text outline bevel starts.
     * Expects a `Float`.
     * @override
     * @defaultValue `0`
     */
    bevelOffset?: number | undefined;

    /**
     * @override
     * @defaultValue `3`
     */
    bevelSegments?: number | undefined;
}

/**
 * A class for generating text as a single geometry
 * @remarks
 * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry | ExtrudeGeometry}
 * See the {@link THREE.FontLoader | FontLoader} page for additional details.
 * @example
 * ```typescript
 * const loader = new FontLoader();
 * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
 *     const geometry = new TextGeometry('Hello three.js!', {
 *         font: font,
 *         size: 80,
 *         height: 5,
 *         curveSegments: 12,
 *         bevelEnabled: true,
 *         bevelThickness: 10,
 *         bevelSize: 8,
 *         bevelOffset: 0,
 *         bevelSegments: 5
 *     });
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
 * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js | Source}
 */
export class TextGeometry extends ExtrudeGeometry {
    /**
     * Create a new instance of {@link TextGeometry}
     * @param text The text that needs to be shown.
     * @param parameters Object that can contain the following parameters. @see {@link TextGeometryParameters} for defaults.
     */
    constructor(text: string, parameters?: TextGeometryParameters);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TextGeometry`
     */
    override readonly type: string | "TextGeometry";

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
    };
}

export { TextGeometry as TextBufferGeometry };
