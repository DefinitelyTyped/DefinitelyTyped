/**
 * An observable collection of og.Entity instances where each entity has a unique id.
 * Entity collection provide handlers for an each type of entity like billboard, label or 3ds object.
 * @constructor
 * @param {Object} [options] - Entity options:
 * @param {Array.<og.Entity>} [options.entities] - Entities array.
 * @param {boolean} [options.visibility=true] - Entity visibility.
 * @param {Array.<number,number,number>} [options.scaleByDistance] - Entity scale by distance parameters.
 * First index - near distance to the entity, after entity becomes full scale.
 * Second index - far distance to the entity, when entity becomes zero scale.
 * Third index - far distance to the entity, when entity becomes invisible.
 * @param {number} [options.opacity] - Entity global opacity.
 * @param {boolean} [options.pickingEnabled=true] - Entity picking enable.
 * @param {Number} [options.polygonOffsetFactor=0.0] - The scale factor for the variable depth offset. The default value is 0.
 * @param {Number} [options.polygonOffsetUnits=0.0] - The multiplier by which an implementation-specific value is multiplied with to create a constant depth offset. The default value is 0.
 * @fires og.EntityCollection#entitymove
 * @fires og.EntityCollection#draw
 * @fires og.EntityCollection#drawend
 * @fires og.EntityCollection#add
 * @fires og.EntityCollection#remove
 * @fires og.EntityCollection#entityadd
 * @fires og.EntityCollection#entityremove
 * @fires og.EntityCollection#visibilitychange
 * @fires og.EntityCollection#mousemove
 * @fires og.EntityCollection#mouseenter
 * @fires og.EntityCollection#mouseleave
 * @fires og.EntityCollection#lclick
 * @fires og.EntityCollection#rclick
 * @fires og.EntityCollection#mclick
 * @fires og.EntityCollection#ldblclick
 * @fires og.EntityCollection#rdblclick
 * @fires og.EntityCollection#mdblclick
 * @fires og.EntityCollection#lup
 * @fires og.EntityCollection#rup
 * @fires og.EntityCollection#mup
 * @fires og.EntityCollection#ldown
 * @fires og.EntityCollection#rdown
 * @fires og.EntityCollection#mdown
 * @fires og.EntityCollection#lhold
 * @fires og.EntityCollection#rhold
 * @fires og.EntityCollection#mhold
 * @fires og.EntityCollection#mousewheel
 * @fires og.EntityCollection#touchmove
 * @fires og.EntityCollection#touchstart
 * @fires og.EntityCollection#touchend
 * @fires og.EntityCollection#doubletouch
 * @fires og.EntityCollection#touchleave
 * @fires og.EntityCollection#touchenter
 */
export class EntityCollection {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(options: any);
    /**
     * Unic identifier.
     * @public
     * @readonly
     */
    public readonly id: number;
    /**
     * Render node collections array index.
     * @protected
     * @type {number}
     */
    protected _renderNodeIndex: number;
    /**
     * Render node context.
     * @public
     * @type {og.scene.RenderNode}
     */
    public renderNode: any;
    /**
     * Visibility option.
     * @protected
     * @type {boolean}
     */
    protected _visibility: boolean;
    /**
     * Specifies the scale factor for gl.polygonOffset function to calculate depth values, 0.0 is default.
     * @public
     * @type {Number}
     */
    public polygonOffsetFactor: number;
    /**
     * Specifies the scale Units for gl.polygonOffset function to calculate depth values, 0.0 is default.
     * @public
     * @type {Number}
     */
    public polygonOffsetUnits: number;
    /**
     * Billboards handler
     * @public
     * @type {og.BillboardHandler}
     */
    public billboardHandler: any;
    /**
     * Labels handler
     * @public
     * @type {og.LabelHandler}
     */
    public labelHandler: any;
    /**
     * Shape handler
     * @public
     * @type {og.ShapeHandler}
     */
    public shapeHandler: any;
    /**
     * Polyline handler
     * @public
     * @type {og.PolylineHandler}
     */
    public polylineHandler: any;
    /**
     * Ray handler
     * @public
     * @type {og.RayHandler}
     */
    public rayHandler: any;
    /**
     * PointCloud handler
     * @public
     * @type {og.PointCloudHandler}
     */
    public pointCloudHandler: any;
    /**
     * Strip handler
     * @public
     * @type {og.StripHandler}
     */
    public stripHandler: any;
    /**
     * Entities array.
     * @protected
     * @type {Array.<og.Entity>}
     */
    protected _entities: Array<any>;
    /**
     * First index - near distance to the entity, after entity becomes full scale.
     * Second index - far distance to the entity, when entity becomes zero scale.
     * Third index - far distance to the entity, when entity becomes invisible.
     * @public
     * @type {Array.<number,number,number>}
     */
    public scaleByDistance: Array<number>;
    pickingScale: any;
    /**
     * Global opacity.
     * @protected
     * @type {number}
     */
    protected _opacity: number;
    /**
     * Opacity state during the animated opacity.
     * @protected
     * @type {number}
     */
    protected _fadingOpacity: number;
    /**
     * Entity collection events handler.
     * @public
     * @type {og.Events}
     */
    public events: any;
    rendererEvents: any;
    setPolygonOffset(factor: any, units: any): void;
    /**
     * Sets collection visibility.
     * @public
     * @param {boolean} visibility - Visibility flag.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Returns collection visibility.
     * @public
     * @returns {boolean} -
     */
    public getVisibility(): boolean;
    /**
     * Sets collection opacity.
     * @public
     * @param {number} opacity - Opacity.
     */
    public setOpacity(opacity: number): void;
    /**
     * Sets collection picking ability.
     * @public
     * @param {boolean} enable - Picking enable flag.
     */
    public setPickingEnabled(enable: boolean): void;
    /**
     * Gets collection opacity.
     * @public
     * @returns {number} -
     */
    public getOpacity(): number;
    /**
     * Sets scale by distance parameters.
     * @public
     * @param {number} near - Full scale entity distance.
     * @param {number} far - Zerol scale entity distance.
     * @param {number} [farInvisible] - Entity visibility distance.
     */
    public setScaleByDistance(near: number, far: number, farInvisible?: number): void;
    _addRecursively(entity: any): void;
    /**
     * Adds entity to the collection and returns collection.
     * @public
     * @param {og.Entity} entity - Entity.
     * @returns {og.EntityCollection} -
     */
    public add(entity: any): any;
    /**
     * Adds entities array to the collection and returns collection.
     * @public
     * @param {Array.<og.Entity>} entities - Entities array.
     * @returns {og.EntityCollection} -
     */
    public addEntities(entities: Array<any>): any;
    /**
     * Returns true if the entity belongs this collection, otherwise returns false.
     * @public
     * @param {og.Entity} entity - Entity.
     * @returns {boolean} -
     */
    public belongs(entity: any): boolean;
    _removeRecursively(entity: any): void;
    /**
     * Removes entity from this collection.
     * @public
     * @param {og.Entity} entity - Entity to remove.
     */
    public removeEntity(entity: any): void;
    _removeEntitySilent(entity: any): void;
    /**
     * Creates or refresh collected entities picking color.
     * @public
     */
    public createPickingColors(): void;
    /**
     * Refresh collected entities indexes from startIndex entitytes collection array position.
     * @public
     * @param {number} startIndex - Entities collection array index.
     */
    public reindexEntitiesArray(startIndex: number): void;
    /**
     * Adds this collection to render node.
     * @public
     * @param {og.scene.RenderNode} renderNode - Render node.
     * @param {boolean} [isHidden] - Uses in vector layers that render in planet render specific function.
     * @returns {og.EntityCollection} -
     */
    public addTo(renderNode: any, isHidden?: boolean): any;
    /**
     * This function is called in the RenderNode assign function.
     * @param {og.RenderNode} renderNode
     */
    bindRenderNode(renderNode: any): void;
    /**
     * Updates coordiantes all lonLat entities in collection after collecction attached to the planet node.
     * @private
     * @param {og.Ellipsoid} ellipsoid - Globe ellipsoid.
     */
    private _updateGeodeticCoordinates;
    /**
     * Updates billboard texture atlas.
     * @public
     */
    public updateBillboardsTextureAtlas(): void;
    /**
     * Updates labels font atlas.
     * @public
     */
    public updateLabelsFontAtlas(): void;
    /**
     * Removes collection from render node.
     * @public
     */
    public remove(): void;
    /**
     * Gets entity array.
     * @public
     * @returns {Array.<og.Entity>} -
     */
    public getEntities(): Array<any>;
    /**
     * Safety entities loop.
     * @public
     * @param {function} callback - Entity callback.
     */
    public each(callback: Function): void;
    /**
     * Removes all entities from colection and clear handlers.
     * @public
     */
    public clear(): void;
    /**
     * Clears entity recursevely.
     * @private
     * @param {og.Entity} entity - Entity to clear.
     */
    private _clearEntity;
}
