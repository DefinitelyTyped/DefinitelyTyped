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
     * Used to access the layers in the collection
     */
    [index: number]: Layer;
    /** @ignore */
    constructor(parentDoc: number, layerIDs: number[]);
    /** @ignore */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Find the first layer with the matching name
     */
    getByName(name: string): Layer;
    /**
     * Number of [[Layer]] elements in this collection
     */
    get length(): number;
    /**
     * The name for this object collection: Layers
     */
    get typename(): string;
    /**
     * Create a new layer.
     *
     * @async
     * ```javascript
     * let newDoc1 = await app.activeDocument.layers.add();
     * ```
     */
    add(): Promise<Layer | null>;
}
