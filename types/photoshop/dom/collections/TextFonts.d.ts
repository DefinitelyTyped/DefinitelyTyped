import { Photoshop } from "../Photoshop";
import { TextFont } from "../objects/TextFont";
/**
 * The collection of fonts available on your computer. Fonts are represented by
 *  [[TextFont]] objects. Access this object in the [[Photoshop.fonts]] property.
 */
export declare class TextFonts extends Array<TextFont> {
    /** @ignore */
    private proxy;
    /** @ignore */
    constructor();
    /**
     * Used to access the text fonts in the collection
     */
    [index: number]: TextFont;
    /** @ignore */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Find the first font with the given PostScript name
     */
    getByName(name: string): TextFont;
    /**
     * Number of [[TextFont]] elements in this collection
     */
    get length(): number;
    /**
     * The owner application of this TextFonts collection
     */
    get parent(): Photoshop;
    /**
     * The name for this object collection: TextFonts
     */
    get typename(): string;
}
