import { Layer } from "../Layer";
/**
 * A collections class allowing for array access into the applications
 * list of layers on a document,
 * while also providing familiar methods from ExtendScript, like `getByName`
 *
 * ```javascript
 * // Iterate through all the top layers of frontmost document
 * app.activeDocument.layers.forEach(h => console.log(h.name));
 * ```
 */
export declare class Layers extends Array<Layer> {
    /** @ignore */
    private proxy;
    /** @ignore */
    private parentDocID;
    /** @ignore */
    private layerIDs;
    /**
     * Used to access the layers in the collection.
     * @minVersion 22.5
     */
    [index: number]: Layer;
    /** @ignore */
    constructor(parentDoc: number, layerIDs: number[]);
    /** @ignore */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Find the first layer with the matching name.
     * @minVersion 22.5
     */
    getByName(name: string): Layer;
    /**
     * Number of [[Layer]] elements in this collection.
     * @minVersion 22.5
     */
    get length(): number;
    /**
     * The name for this object collection: Layers.
     * @minVersion 22.5
     */
    get typename(): "Layers";
    /**
     * Create a new layer.
     *
     * ```javascript
     * let newDoc1 = await app.activeDocument.layers.add();
     * ```
     * @async
     * @minVersion 22.5
     */
    add(): Promise<Layer | null>;
}
