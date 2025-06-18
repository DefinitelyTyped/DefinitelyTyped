import { Photoshop } from "../Photoshop";
/**
 * Describes a font that is available to the application. Access this object in the [[Photoshop.fonts]] collection.
 *
 * ```javascript
 * const arialMTFont = require('photoshop').app.fonts.getByName("ArialMT");
 * ```
 * @minVersion 23.0
 */
export declare class TextFont {
    private _family;
    private _name;
    private _parent;
    private _postScriptName;
    private _style;
    /**
     * The font family.
     * @minVersion 23.0
     */
    get family(): string;
    /**
     * The name of the font.
     * @minVersion 23.0
     */
    get name(): string;
    /**
     * The containing application.
     * @minVersion 23.0
     */
    get parent(): Photoshop;
    /**
     * The PostScript name of the font.
     * @minVersion 23.0
     */
    get postScriptName(): string;
    /**
     * The font style.
     * @minVersion 23.0
     */
    get style(): string;
    /**
     * The class name of the referenced object: *"TextFont"*.
     * @minVersion 23.0
     */
    get typename(): "TextFont";
}
