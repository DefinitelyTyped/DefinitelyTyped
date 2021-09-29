/**
 * Render node is a logical part of a render mechanism. Represents scene rendering.
 * Forexample one scene node for rendering the Earth, another one for rendering the Moon, another node for rendering stars etc.
 * Each render node has own model view space defined with matrices(scale, rotation, translation, transformation).
 * There are collections of ligh sources, entities and so on in the node.
 * Access to the node is renderer.renderNodes["Earth"]
 * @class
 * @extends {og.RenderNode}
 * @param {string} name - Node name.
 */
export class RenderNode {
    constructor(name: any);
    /**
     * Renderer that calls frame() callback.
     * @public
     * @type {og.Renderer}
     */
    public renderer: any;
    drawMode: number;
    /** Show rendering.
     * @public
     */
    public show: boolean;
    _isActive: boolean;
    /**
     * Lighting calculations.
     * @public
     * @type {boolean}
     */
    public lightEnabled: boolean;
    /**
     * Point light array.
     * @private
     * @type {Array.<og.LightSource>}
     */
    private _lights;
    _lightsTransformedPositions: any[];
    _lightsParamsv: any[];
    _lightsParamsf: any[];
    _lightsNames: any[];
    /**
     * Entity collection array.
     * @public
     * @type {Array.<og.EntityCollection>}
     */
    public entityCollections: Array<any>;
    _pickingId: number;
    events: Events;
    /**
     * Adds node to the current hierarchy.
     * @public
     * @type {og.RenderNode}
     */
    public addNode(node: any): void;
    /**
     * Assign render node with renderer.
     * @public
     * @param {og.Renderer} renderer - Redner node's renderer.
     */
    public assign(renderer: any): void;
    onremove(): void;
    remove(): void;
    /**
     * Adds entity collection.
     * @public
     * @param {og.EntityCollection} entityCollection - Entity collection.
     * @param {boolean} [isHidden] - If it's true that this collection has specific rendering.
     * @returns {og.scene.RenderNode} -
     */
    public addEntityCollection(entityCollection: any, isHidden?: boolean): any;
    /**
     * Removes entity collection.
     * @public
     * @param {og.EntityCollection} entityCollection - Entity collection for remove.
     */
    public removeEntityCollection(entityCollection: any): void;
    /**
     * Adds point light source.
     * @public
     * @param {og.LightSource} light - Light source.
     * @returns {og.scene.RenderNode}
     */
    public addLight(light: any): any;
    /**
     * Gets light object by its name.
     * @public
     * @param {string} name - Point light name.
     * @returns {og.LightSource}
     */
    public getLightByName(name: string): any;
    /**
     * Removes light source.
     * @public
     * @param {og.LightSource} light - Light source object.
     */
    public removeLight(light: any): void;
    /**
     * Calls render frame node's callback. Used in renderer.
     * @public
     */
    public drawNode(frustum: any, frustumIndex: any): void;
    /**
     * Gets render node activity.
     * @public
     * @returns {Boolean} -
     */
    public isActive(): boolean;
    /**
     * Rendering activation.
     * @public
     * @param {boolean} isActive - Activation flag.
     */
    public setActive(isActive: boolean): void;
    /**
     * Sets draw mode
     * @public
     * @param {Number} mode - Draw mode, such as gl.TRIANGLES, gl.TRIANGLE_STRIP, gl.LINES etc.
     */
    public setDrawMode(mode: number): void;
    /**
     * IMPORTANT: This function have to be called manualy in each render node frame callback, before drawing scene geometry.
     * @public
     */
    public transformLights(): void;
    updateBillboardsTexCoords(): void;
    /**
     * @private
     */
    private _drawNodes;
    drawEntityCollections(ec: any): void;
    /**
     * Draw entity collections picking frame.
     * @public
     * @param {Array<og.EntityCollection>} ec - Entity collection array.
     */
    public drawPickingEntityCollections(ec: Array<any>): void;
    /**
     * Picking entity frame callback
     * @private
     */
    private _entityCollectionPickingCallback;
}
import { Events } from "../Events.js";
