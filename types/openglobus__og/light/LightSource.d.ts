/**
 * Represents basic light source.
 * @class
 * @param {string} [name] - Light source name.
 * @param {Object} [params] - Light parameters:
 * @param {og.Vec3} [params.position] - Light source position if it is a point light, otherwise it is a light direction vector.
 * @param {og.Vec3} [params.ambient]  - Ambient RGB color.
 * @param {og.Vec3} [params.diffuse]  - Diffuse RGB color.
 * @param {og.Vec3} [params.specular]  - Specular RGB color.
 * @param {number} [params.shininess]  - Specular shininess.
 */
export class LightSource {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(name: any, params: any);
    /**
     * Light name.
     * @protected
     * @type {string}
     */
    protected _name: string;
    /**
     * Render node where light is shines.
     * @protected
     * @type {og.scene.RenderNode}
     */
    protected _renderNode: any;
    /**
     * Light position.
     * @protected
     * @type {og.Vec3}
     */
    protected _position: any;
    /**
     * True if the light is directional.
     * @public
     * @type {boolean}
     */
    public directional: boolean;
    /**
     * Ambient color.
     * @protected
     * @type {og.Vec3}
     */
    protected _ambient: any;
    /**
     * Diffuse color.
     * @protected
     * @type {og.Vec3}
     */
    protected _diffuse: any;
    /**
     * Specular color.
     * @protected
     * @type {og.Vec3}
     */
    protected _specular: any;
    /**
     * Shininess.
     * @protected
     * @type {number}
     */
    protected _shininess: number;
    /**
     * Light activity.
     * @protected
     * @type {boolean}
     */
    protected _active: boolean;
    _tempAmbient: any;
    _tempDiffuse: any;
    _tempSpecular: any;
    _tempShininess: number;
    /**
     * Creates clone of the current light object.
     * @todo: TODO
     * @public
     * @returns {og.LightSource}
     */
    public clone(): any;
    /**
     * Set light activity. If activity is false the light doesn't shine.
     * @public
     * @param {boolean} active - Light activity.
     */
    public setActive(active: boolean): void;
    /**
     * Gets light activity.
     * @public
     * @returns {boolean}
     */
    public isActive(): boolean;
    /**
     * Set light source position, or if it is a directional type sets light direction vector.
     * @public
     * @param {og.Vec3} position - Light position or direction vector.
     * @returns {og.LightSource}
     */
    public setPosition3v(position: any): any;
    /**
     * Set light source position, or if it is a directional type sets light direction vector.
     * @public
     * @param {og.Vec3} position - Light position or direction vector.
     * @returns {og.LightSource}
     */
    public setPosition(x: any, y: any, z: any): any;
    /**
     * Returns light source position, or if it is a directional type sets light direction vector.
     * @public
     * @returns {og.Vec3} - Light source position/direction.
     */
    public getPosition(): any;
    /**
     * Set ambient color.
     * @public
     * @param {og.Vec3} rgb - Ambient color.
     * @returns {og.LightSource}
     */
    public setAmbient3v(rgb: any): any;
    /**
     * Set diffuse color.
     * @public
     * @param {og.Vec3} rgb - Diffuse color.
     * @returns {og.LightSource}
     */
    public setDiffuse3v(rgb: any): any;
    /**
     * Set specular color.
     * @public
     * @param {og.Vec3} rgb - Specular color.
     * @returns {og.LightSource}
     */
    public setSpecular3v(rgb: any): any;
    /**
 * Set ambient color.
 * @public
 * @param {og.Vec3} rgb - Ambient color.
 * @returns {og.LightSource}
 */
    public setAmbient(r: any, g: any, b: any): any;
    /**
     * Set diffuse color.
     * @public
     * @returns {og.LightSource}
     */
    public setDiffuse(r: any, g: any, b: any): any;
    /**
     * Set specular color.
     * @public
     * @returns {og.LightSource}
     */
    public setSpecular(r: any, g: any, b: any): any;
    /**
     * Set material shininess.
     * @public
     * @returns {og.LightSource}
     */
    public setShininess(shininess: any): any;
    /**
     * Sets light to black.
     * @public
     * @returns {og.LightSource}
     */
    public setBlack(): any;
    /**
     * Adds current light to the render node scene.
     * @public
     * @param {og.scene.RenderNode} renderNode - Render node scene.
     * @returns {og.LightSource}
     */
    public addTo(renderNode: any): any;
    /**
     * Removes from render node scene.
     * @public
     */
    public remove(): void;
}
