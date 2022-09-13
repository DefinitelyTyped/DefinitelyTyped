import { Photoshop } from "../Photoshop";
/**
 * Describes a font that is available to the application. Access this object in the [[Photoshop.fonts]] collection.
 *
 * ```javascript
 * const arialMTFont = require('photoshop').app.fonts.getByName("ArialMT");
 * ```
 */
export declare class TextFont {
    /**
     * The font family.
     */
    readonly family: string;
    /**
     * The name of the font.
     */
    readonly name: string;
    /**
     * The containing application.
     */
    readonly parent: Photoshop;
    /**
     * The PostScript name of the font.
     */
    readonly postScriptName: string;
    /**
     * The font style.
     */
    readonly style: string;
    /**
     * The class name of the referenced object
     * @default "TextFont"
     */
    readonly typename: string;
}
