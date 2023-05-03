import { Document } from "../Document";
import { LayerComp } from "../LayerComp";
import { LayerCompCreateOptions } from "../types/LayerCompTypes";
/**
 * A collections class allowing for array access into a document's Layer Comps
 *
 * Access this collection through [[Document.layerComps]] property. For example,
 * following adds a new Layer Comp to the collection:
 *
 * ```javascript
 * const comp = await app.activeDocument.layerComps.add();
 * ```
 *
 * @minVersion 24.0
 */
export declare class LayerComps extends Array<LayerComp> {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the Layer Comp in the collection
     */
    [index: number]: LayerComp;
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
     * The name for this object collection: LayerComps
     *
     * @minVersion 24.0
     */
    get typename(): "LayerComps";
    /**
     * Number of [[LayerComp]] elements in this collection
     *
     * @minVersion 24.0
     */
    get length(): number;
    /**
     * The owner document of this Layer comp collection
     *
     * @minVersion 24.0
     */
    get parent(): Document;
    /**
     * Adds a Layer Comp to the document's collection. If no options are given, only visibility will be recorded.
     *
     * Note: This command will fail if the document is flat, that is, only a Background and no other layers.
     *
     * @param options An optional object literal containing key/value pairs as described by [[LayerCompCreateOptions]]
     * ```javascript
     * const options = {
     *   name: "mockup",
     *   comment: "First attempt",
     *   visibility: true,
     *   position: true
     *  };
     * await require('photoshop').app.activeDocument.layerComps.add(options);
     * ```
     *
     * @minVersion 24.0
     */
    add(options?: LayerCompCreateOptions): Promise<LayerComp>;
    /**
     * Clears all Layer Comps from this collection
     *
     * @minVersion 24.0
     */
    removeAll(): Promise<void>;
    /**
     * Get all Layer Comps by name
     * @param name
     *
     * @minVersion 24.0
     */
    getAllByName(name: string): LayerComp[];
}
