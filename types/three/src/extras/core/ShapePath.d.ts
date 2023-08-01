import { Vector2 } from './../../math/Vector2.js';
import { Shape } from './Shape.js';
import { Color } from '../../math/Color.js';
import { Path } from './Path.js';

/**
 * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's},
 * for example an SVG shape to a path.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
 */
export class ShapePath {
    /**
     * Creates a new {@link ShapePath}
     * @remarks
     * Unlike a {@link THREE.Path | Path}, no points are passed in as the {@link ShapePath} is designed to be generated after creation.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ShapePath`
     */
    readonly type: 'ShapePath';

    /**
     * Array of {@link THREE.Path | Path's}s.
     * @defaultValue `[]`
     */
    subPaths: Path[];

    /**
     * The current {@link THREE.Path | Path} that is being generated.
     * @defaultValue `null`
     */
    readonly currentPath: Path | null;

    /**
     * {@link THREE.Color | Color} of the shape, by default set to white _(0xffffff)_.
     * @defaultValue `new THREE.Color()`
     */
    color: Color;

    /**
     * Starts a new {@link THREE.Path | Path} and calls {@link THREE.Path.moveTo | Path.moveTo}( x, y ) on that {@link THREE.Path | Path}
     * @remarks
     * Also points {@link ShapePath.currentPath | currentPath} to that {@link THREE.Path | Path}.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    moveTo(x: number, y: number): this;

    /**
     * This creates a line from the {@link ShapePath.currentPath | currentPath}'s offset to X and Y and updates the offset to X and Y.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    lineTo(x: number, y: number): this;

    /**
     * This creates a quadratic curve from the {@link ShapePath.currentPath | currentPath}'s
     * offset to _x_ and _y_ with _cpX_ and _cpY_ as control point and updates the {@link ShapePath.currentPath | currentPath}'s offset to _x_ and _y_.
     * @param cpX Expects a `Float`
     * @param cpY Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;

    /**
     * This creates a bezier curve from the {@link ShapePath.currentPath | currentPath}'s
     * offset to _x_ and _y_ with _cp1X_, _cp1Y_ and _cp2X_, _cp2Y_ as control points and
     * updates the {@link ShapePath.currentPath | currentPath}'s offset to _x_ and _y_.
     * @param cp1X Expects a `Float`
     * @param cp1Y Expects a `Float`
     * @param cp2X Expects a `Float`
     * @param cp2Y Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;

    /**
     * Connects a new {@link THREE.SplineCurve | SplineCurve} onto the {@link ShapePath.currentPath | currentPath}.
     * @param points An array of {@link THREE.Vector2 | Vector2}s
     */
    splineThru(pts: Vector2[]): this;

    /**
     * Converts the {@link ShapePath.subPaths | subPaths} array into an array of Shapes
     * @remarks
     * By default solid shapes are defined clockwise (CW) and holes are defined counterclockwise (CCW)
     * If isCCW is set to true, then those are flipped.
     * @param isCCW Changes how solids and holes are generated
     */
    toShapes(isCCW: boolean): Shape[];
}
