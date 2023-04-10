import { Channel } from "../Channel";
/**
 * A collections class allowing for array access into a document's channels,
 * while also providing familiar methods from ExtendScript, like `getByName`
 *
 * ```javascript
 * // Iterate through all channels in the document
 * app.activeDocument.channels.forEach(h => console.log(h.name));
 * ```
 * @minVersion 23.0
 */
export declare class Channels extends Array<Channel> {
    /** @ignore */
    readonly _docId: number;
    /** @ignore */
    private proxy;
    /**
     * Used to access the channels in the collection
     */
    [index: number]: Channel;
    /** @ignore */
    constructor(docId: number);
    /** @ignore */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Create a new alpha channel in this document.
     * @minVersion 23.0
     */
    add(): Channel;
    /**
     * Find the first channel with the matching name.
     * @minVersion 23.0
     */
    getByName(name: string): Channel;
    /**
     * Remove all Alpha channels in the parent document.
     * @minVersion 23.0
     */
    removeAll(): void;
    /**
     * Number of Channel elements in this collection.
     * @minVersion 23.0
     */
    get length(): number;
    /**
     * The owner document of this Channel collection.
     * @minVersion 23.0
     */
    get parent(): Document;
    /**
     * The name for this object collection: Channels.
     * @minVersion 23.0
     */
    get typename(): "Channels";
}
