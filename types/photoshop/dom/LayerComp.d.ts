import { Document } from "./Document";
import { Layer } from "./Layer";
import { LayerCompRecaptureOptions } from "./types/LayerCompTypes";
/**
 * Represents a single layer comp in the document.
 *
 * @minVersion 24.0
 */
export declare class LayerComp {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * @ignore
     */
    private get _directRef();
    /**
     * The class name of the referenced LayerComp object
     *
     * @minVersion 24.0
     */
    get typename(): "LayerComp";
    /**
     * For use with batchPlay operations. This layer comp ID, along with its document ID
     * can be used to represent this layer comp for the lifetime of this document or the layer comp.
     *
     * @minVersion 24.0
     */
    get id(): number;
    /**
     * The ID of the document of this layer comp.
     *
     * @minVersion 24.0
     */
    get docId(): number;
    /**
     * Owner document of this layer comp
     *
     * @minVersion 24.0
     */
    get parent(): Document;
    /**
     * The name of the layer comp.
     *
     * @minVersion 24.0
     */
    get name(): string;
    set name(name: string);
    /**
     * The description of the layer comp.
     *
     * @minVersion 24.0
     */
    get comment(): string | null;
    set comment(comment: string | null);
    /**
     * If true, the layer comp is currently selected in the Layer Comps panel.
     *
     * Note: selected does not mean that this layer comp is applied to document.
     *
     * @minVersion 24.0
     */
    get selected(): boolean;
    /**
     * If true, the layer comp will remember the layers' appearance (layer style) settings.
     *
     * @minVersion 24.0
     */
    get appearance(): boolean;
    set appearance(value: boolean);
    /**
     * If true, the layer comp will remember layers' positions.
     *
     * @minVersion 24.0
     */
    get position(): boolean;
    set position(value: boolean);
    /**
     * If true, the layer comp will remember layers' visibilities.
     *
     * @minVersion 24.0
     */
    get visibility(): boolean;
    set visibility(value: boolean);
    /**
     * If true, the layer comp will remember which of the Smart Object's layer comps are set in the Properties panel.
     *
     * @minVersion 24.0
     */
    get childComp(): boolean;
    set childComp(value: boolean);
    /**
     * Applies the layer comp to the document.
     *
     * @async
     * @minVersion 24.0
     */
    apply(): Promise<void>;
    /**
     * Updates the recorded states of the layers for this layer comp.
     *
     * Applies to all layers and all properties supported by this layer comp.
     *
     * @async
     * @minVersion 24.0
     */
    recapture(): Promise<void>;
    /**
     * Updates the recorded states of the layers for this layer comp.
     *
     * @async
     * @param argument what properties to recapture.
     * @param layers if this argument is passed then only specified layers will be recaptured.
     */
    recapture(arg: LayerCompRecaptureOptions, layers?: Layer[]): Promise<void>;
    /**
     * Deletes this object from document.
     *
     * @async
     * @minVersion 24.0
     */
    remove(): Promise<void>;
    /**
     * Resets the layer comp state to the document state.
     *
     * @async
     * @minVersion 24.0
     */
    resetLayerComp(): Promise<void>;
    /**
     * Duplicates this layer comp
     *
     * @returns newly created layer comp
     * @async
     * @minVersion 24.0
     */
    duplicate(): Promise<LayerComp>;
}
