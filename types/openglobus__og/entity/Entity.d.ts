/**
 * Entity instances aggregate multiple forms of visualization into a single high-level object.
 * They can be created manually and added to entity collection.
 *
 * @class
 * @param {Object} [options] - Entity options:
 * @param {string} [options.name] - A human readable name to display to users. It does not have to be unique.
 * @param {og.Vec3|Array.<number>} [options.cartesian] - Spatial entities like billboard, label, sphere etc. cartesian position.
 * @param {og.LonLat} [options.lonlat] - Geodetic coordiantes for an entities like billboard, label, sphere etc.
 * @param {boolean} [options.aground] - True for entities that have to be placed on the relief.
 * @param {boolean} [options.visibility] - Entity visibility.
 * @param {*} [options.billboard] - Billboard options(see {@link og.Billboard}).
 * @param {*} [options.label] - Label options(see {@link og.Label}).
 * @param {*} [options.sphere] - Sphere options(see {@link og.shape.Sphere}).
 * @param {*} [options.box] - Sphere options(see {@link og.shape.Box}).
 * @param {*} [options.polyline] - Polyline options(see {@link og.Polyline}).
 * @param {*} [options.ray] - Ray options(see {@link og.Ray}).
 * @param {*} [options.pointCloud] - Point cloud options(see {@link og.PointCloud}).
 * @param {*} [options.geometry] - Geometry options (see {@link og.Geometry}), available for vector layer only.
 * @param {*} [options.properties] - Entity custom properties.
 */
export class Entity {
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
     * Entity user defined properties.
     * @public
     * @type {Object}
     */
    public properties: any;
    /**
     * Children entities.
     * @public
     * @type {Array.<og.Entity>}
     */
    public childrenNodes: Array<any>;
    /**
     * Parent entity.
     * @public
     * @type {og.Entity}
     */
    public parent: any;
    /**
     * Entity cartesian position.
     * @protected
     * @type {og.Vec3}
     */
    protected _cartesian: any;
    /**
     * Geodetic entity coordiantes.
     * @protected
     * @type {og.LonLat}
     */
    protected _lonlat: any;
    /**
     * World Mercator entity coordinates.
     * @protected
     * @type {og.LonLat}
     */
    protected _lonlatMerc: any;
    /**
     * Entity visible terrain altitude.
     * @protected
     * @type {number}
     */
    protected _altitude: number;
    /**
     * Visibility flag.
     * @protected
     * @type {boolean}
     */
    protected _visibility: boolean;
    /**
     * Entity collection that this entity belongs to.
     * @protected
     * @type {og.EntityCollection}
     */
    protected _entityCollection: any;
    /**
     * Entity collection array store index.
     * @protected
     * @type {number}
     */
    protected _entityCollectionIndex: number;
    /**
     * Assigned vector layer pointer.
     * @protected
     * @type {og.layer.Vector}
     */
    protected _layer: any;
    /**
     * Assigned vector layer entity array index.
     * @protected
     * @type {number}
     */
    protected _layerIndex: number;
    /**
     * Picking color.
     * @protected
     * @type {og.Vec3}
     */
    protected _pickingColor: any;
    _featureConstructorArray: {
        billboard: (typeof Billboard | ((billboard: any) => any))[];
        label: (typeof Label | ((label: any) => any))[];
        sphere: (typeof Sphere | ((shape: any) => any))[];
        polyline: (typeof Polyline | ((polyline: any) => any))[];
        pointCloud: (typeof PointCloud | ((pointCloud: any) => any))[];
        geometry: (typeof Geometry | ((geometry: any) => any))[];
        strip: (typeof Strip | ((strip: any) => any))[];
        ray: (typeof Ray | ((ray: any) => any))[];
    };
    /**
     * Billboard entity.
     * @public
     * @type {og.Billboard}
     */
    public billboard: any;
    /**
     * Text label entity.
     * @public
     * @type {og.Label}
     */
    public label: any;
    /**
     * Shape entity.
     * @public
     * @type {og.shape.BaseShape}
     */
    public shape: any;
    /**
     * Polyline entity.
     * @public
     * @type {og.Polyline}
     */
    public polyline: any;
    /**
     * Ray entity.
     * @public
     * @type {og.ray}
     */
    public ray: any;
    /**
     * PointCloud entity.
     * @public
     * @type {og.PointCloud}
     */
    public pointCloud: any;
    /**
     * Geometry entity(available for vector layer only).
     * @public
     * @type {og.Geometry}
     */
    public geometry: any;
    /**
     * Strip entity.
     * @public
     * @type {og.Strip}
     */
    public strip: any;
    get instanceName(): string;
    _createOptionFeature(featureName: any, options: any): any;
    getCollectionIndex(): number;
    /**
     * Adds current entity into the specified entity collection.
     * @public
     * @param {og.EntityCollection|og.layer.Vector} collection - Specified entity collection or vector layer.
     * @param {Boolean} [rightNow=false] - Entity insertion option for vector layer.
     * @returns {og.Entity} - This object.
     */
    public addTo(collection: any | any, rightNow?: boolean): any;
    /**
     * Removes current entity from collection and layer.
     * @public
     */
    public remove(): void;
    /**
     * Sets the entity visibility.
     * @public
     * @param {boolean} visibility - Entity visibility.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Returns entity visibility.
     * @public
     * @returns {boolean} -
     */
    public getVisibility(): boolean;
    /**
     * Sets entity cartesian position.
     * @public
     * @param {og.Vec3} cartesian - Cartesian position in 3d space.
     */
    public setCartesian3v(cartesian: any): void;
    /**
     * Sets entity cartesian position.
     * @public
     * @param {number} x - 3d space X - position.
     * @param {number} y - 3d space Y - position.
     * @param {number} z - 3d space Z - position.
     */
    public setCartesian(x: number, y: number, z: number): void;
    /**
     * Sets entity cartesian position without event dispatching.
     * @protected
     * @param {og.Vec3} cartesian - Cartesian position in 3d space.
     * @param {boolean} skipLonLat - skip geodetic calculation.
     */
    protected _setCartesian3vSilent(cartesian: any, skipLonLat: boolean): void;
    /**
     * Gets entity geodetic coordinates.
     * @public
     * @returns {og.LonLat} -
     */
    public getLonLat(): any;
    /**
     * Sets geodetic coordinates of the entity point object.
     * @public
     * @param {og.LonLat} lonlat - WGS84 coordinates.
     */
    public setLonLat(lonlat: any): void;
    /**
     * Sets entity altitude over the planet.
     * @public
     * @param {number} altitude - Altitude.
     */
    public setAltitude(altitude: number): void;
    /**
     * Sets entity altitude over the planet.
     * @public
     * @return {number} Altitude.
     */
    public getAltitude(): number;
    /**
     * Returns carteain position.
     * @public
     * @returns {og.Vec3} -
     */
    public getCartesian(): any;
    /**
     * Sets entity billboard.
     * @public
     * @param {og.Billboard} billboard - Billboard object.
     * @returns {og.Billboard} -
     */
    public setBillboard(billboard: any): any;
    /**
     * Sets entity label.
     * @public
     * @param {og.Label} label - Text label.
     * @returns {og.Label} -
     */
    public setLabel(label: any): any;
    /**
     * Sets entity ray.
     * @public
     * @param {og.Ray} ray - Ray object.
     * @returns {og.Ray} -
     */
    public setRay(ray: any): any;
    /**
     * Sets entity shape.
     * @public
     * @param {og.BaseShape} shape - Shape object.
     * @returns {og.Polyline} -
     */
    public setShape(shape: any): any;
    /**
     * Sets entity polyline.
     * @public
     * @param {og.Polyline} polyline - Polyline object.
     * @returns {og.Polyline} -
     */
    public setPolyline(polyline: any): any;
    /**
     * Sets entity pointCloud.
     * @public
     * @param {og.PointCloud} pointCloud - PointCloud object.
     * @returns {og.PointCloud} -
     */
    public setPointCloud(pointCloud: any): any;
    /**
     * Sets entity geometry.
     * @public
     * @param {og.Geometry} geometry - Geometry object.
     * @returns {og.Geometry} -
     */
    public setGeometry(geometry: any): any;
    /**
     * Sets entity strip.
     * @public
     * @param {og.Strip} strip - Strip object.
     * @returns {og.Strip} -
     */
    public setStrip(strip: any): any;
    get layer(): any;
    get rendererEvents(): any;
    /**
     * Append child entity.
     * @public
     * @param {og.Entity} entity - Child entity.
     */
    public appendChild(entity: any): void;
    /**
     * Appends entity items(billboard, label etc.) picking color.
     * @public
     */
    public setPickingColor(): void;
    /**
     * Return geodethic extent.
     * @returns {og.Extent} -
     */
    getExtent(): any;
    isEqual(entity: any): boolean;
}
import { Billboard } from "./Billboard.js";
import { Label } from "./Label.js";
import { Sphere } from "../shapes/Sphere.js";
import { Polyline } from "./Polyline.js";
import { PointCloud } from "./PointCloud.js";
import { Geometry } from "./Geometry.js";
import { Strip } from "./Strip.js";
import { Ray } from "./Ray.js";
