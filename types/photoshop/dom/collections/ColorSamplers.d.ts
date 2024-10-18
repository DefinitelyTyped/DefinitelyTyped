import { ColorSampler } from "../ColorSampler";
/**
 * A collections class allowing for array access into a document's ColorSamplers
 *
 * Access this collection through the [[Document.colorSamplers]] property. For instance,
 * the following adds a new colorSampler to the collection:
 *
 * ```javascript
 * const app = require("photoshop").app;
 * app.activeDocument.colorSamplers.add({x: 20, y: 20});
 * ```
 *
 * A colorSampler can be access through the collection's `[index]` property,
 * and then queried for its properties.
 * For example, the following gets the first colorSampler in the collection, and then
 * unpacks its `color` and `position` properties via a destructuring assignment to get
 * the sampled color as a [[SolidColor]] object and its current position as an `{x, y}` object:
 *
 * ```javascript
 * const cs = app.activeDocument.colorSamplers[0];
 * const { color, position } = cs; // destructuring assignment
 * console.log(color.rgb); // returns a SolidColor object:
 *                         // {red: 0, green: 255, blue: 0, model: ColorModel.RGB}
 * console.log(position); // returns an object: {x: 20, y: 20}
 *
 * ```
 *
 * To empty the colorSamplers collection, use the `removeAll()` method.
 *
 * ```javascript
 * app.activeDocument.colorSamplers.removeAll();
 * app.activeDocument.colorSamplers.length; // returns 0
 * ```
 *
 * @minVersion 24.0
 */
export declare class ColorSamplers extends Array<ColorSampler> {
    /**
     * @ignore
     */
    private readonly _docId;
    /**
     * @ignore
     */
    private proxy;
    /**
     * @ignore
     */
    constructor(docId: number);
    /**
     * @ignore
     */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Number of [[ColorSampler]] elements in this collection.
     * ```javascript
     * // A new document starts with no colorSamplers
     * app.activeDocument.colorSamplers.length; // returns 0
     * ```
     * @minVersion 24.0
     */
    get length(): number;
    /**
     * The owner [[Document]] of this ColorSamplers collection.
     * @minVersion 24.0
     */
    get parent(): Document;
    /**
     * Adds a [[ColorSampler]] to the collection at the given `{x, y}` coordinates in pixels.
     *
     * ```javascript
     * app.activeDocument.colorSamplers.add({x: 20, y: 20});
     * app.activeDocument.colorSamplers.length; // returns 1
     * ```
     * @minVersion 24.0
     */
    add(position: {
        x: number;
        y: number;
    }): ColorSampler;
    /**
     * Removes all ColorSampler instances from this collection.
     *
     * ```javascript
     * app.activeDocument.colorSamplers.removeAll();
     * app.activeDocument.colorSamplers.length; // returns 0
     * ```
     * @minVersion 24.0
     */
    removeAll(): void;
}
