/**
 * Planet camera.
 * @class
 * @extends {og.Camera}
 * @param {og.RenderNode} planet - Planet render node.
 * @param {Object} [options] - Planet camera options:
 * @param {Object} [options.name] - Camera name.
 * @param {number} [options.viewAngle=37] - Camera angle of view. Default is 35.0
 * @param {number} [options.near] - Camera near plane distance. Default is 1.0
 * @param {number} [options.far] - Camera far plane distance. Deafult is og.math.MAX
 * @param {number} [options.minAltitude] - Minimal altitude for the camera. Deafult is 1
 * @param {number} [options.maxAltitude] - Maximal altitude for the camera. Deafult is 20000000
 * @param {og.Vec3} [options.eye] - Camera eye position. Default (0,0,0)
 * @param {og.Vec3} [options.look] - Camera look position. Default (0,0,0)
 * @param {og.Vec3} [options.up] - Camera eye position. Default (0,1,0)
 */
export class PlanetCamera {
    constructor(planet: any, options: any);
    /**
     * Assigned camera's planet.
     * @public
     * @type {og.scene.Planet}
     */
    public planet: any;
    /**
     * Minimal alltitude that camera can reach over the terrain.
     * @public
     * @type {number}
     */
    public minAltitude: number;
    /**
     * Maximal alltitude that camera can reach over the globe.
     * @public
     * @type {number}
     */
    public maxAltitude: number;
    /**
     * Current geographical degree position.
     * @protected
     * @type {og.LonLat}
     */
    protected _lonLat: any;
    /**
     * Current geographical mercator position.
     * @protected
     * @type {og.LonLat}
     */
    protected _lonLatMerc: any;
    /**
     * Current altitude.
     * @protected
     * @type {number}
     */
    protected _terrainAltitude: number;
    /**
     * Cartesian coordinates on the terrain.
     * @protected
     * @type {og.Vec3}
     */
    protected _terrainPoint: any;
    /**
     * Quad node that camera flies over.
     * @protected
     * @type {og.quadTree.Node}
     */
    protected _insideSegment: any;
    /**
     * Coordinates that depends on what segment class we are fling over.
     * It can be WGS84 or Mercator coordinates. Gets in og.quadTree.Node
     * @protected
     * @type {og.LonLat}
     */
    protected _insideSegmentPosition: any;
    slope: number;
    _keyLock: Key;
    _framesArr: any[];
    _framesCounter: number;
    _numFrames: number;
    _completeCallback: any;
    _flying: boolean;
    /**
     * Updates camera view space.
     * @public
     * @virtual
     */
    public update(): void;
    eyeNorm: any;
    updateGeodeticPosition(): void;
    /**
     * Sets altitude over the terrain.
     * @public
     * @param {number} alt - Altitude over the terrain.
     */
    public setAltitude(alt: number): void;
    /**
     * Gets altitude over the terrain.
     * @public
     */
    public getAltitude(): number;
    /**
     * Places camera to view to the geographical point.
     * @public
     * @param {og.LonLat} lonlat - New camera and camera view position.
     * @param {og.LonLat} [lookLonLat] - Look up coordinates.
     * @param {og.Vec3} [up] - Camera UP vector. Default (0,1,0)
     */
    public setLonLat(lonlat: any, lookLonLat?: any, up?: any): void;
    /**
     * Returns camera geographical position.
     * @public
     * @returns {og.LonLat}
     */
    public getLonLat(): any;
    /**
     * Returns camera height.
     * @public
     * @returns {number}
     */
    public getHeight(): number;
    /**
     * Gets position by viewable extent.
     * @public
     * @param {og.Extent} extent - Viewable extent.
     * @param {Number} height - Camera height
     * @returns {og.Vec3}
     */
    public getExtentPosition(extent: any, height: number): any;
    /**
     * View current extent.
     * @public
     * @param {og.Extent} extent - Current extent.
     */
    public viewExtent(extent: any, height: any): void;
    /**
     * Flies to the current extent.
     * @public
     * @param {og.Extent} extent - Current extent.
     * @param {og.Vec3} [up] - Camera UP in the end of flying. Default - (0,1,0)
     * @param {Number} [ampl] - Altitude amplitude factor.
     * @param {cameraCallback} [completeCallback] - Callback that calls after flying when flying is finished.
     * @param {cameraCallback} [startCallback] - Callback that calls befor the flying begins.
     */
    public flyExtent(extent: any, height: any, up?: any, ampl?: number, completeCallback?: any, startCallback?: any, frameCallback: any): void;
    viewDistance(cartesian: any, distance?: number): void;
    flyDistance(cartesian: any, distance: number, ampl: number, completeCallback: any, startCallback: any, frameCallback: any): void;
    /**
     * Flies to the cartesian coordinates.
     * @public
     * @param {og.Vec3} cartesian - Finish cartesian coordinates.
     * @param {og.Vec3} [look] - Camera LOOK in the end of flying. Default - (0,0,0)
     * @param {og.Vec3} [up] - Camera UP vector in the end of flying. Default - (0,1,0)
     * @param {Number} [ampl=1.0] - Altitude amplitude factor.
     * @param {cameraCallback} [completeCallback] - Callback that calls after flying when flying is finished.
     * @param {cameraCallback} [startCallback] - Callback that calls befor the flying begins.
     */
    public flyCartesian(cartesian: any, look?: any, up?: any, ampl?: number, completeCallback?: any, startCallback?: any, frameCallback: any): void;
    _frameCallback: any;
    /**
     * Flies to the geo coordiantes.
     * @public
     * @param {og.LonLat} lonlat - Finish coordinates.
     * @param {og.Vec3} [look] - Camera LOOK in the end of flying. Default - (0,0,0)
     * @param {og.Vec3} [up] - Camera UP vector in the end of flying. Default - (0,1,0)
     * @param {Number} [ampl] - Altitude amplitude factor.
     * @param {cameraCallback} [completeCallback] - Callback that calls after flying when flying is finished.
     * @param {cameraCallback} [startCallback] - Callback that calls befor the flying begins.
     */
    public flyLonLat(lonlat: any, look?: any, up?: any, ampl?: number, completeCallback?: any, startCallback?: any): void;
    /**
     * Breaks the flight.
     * @public
     */
    public stopFlying(): void;
    /**
     * Returns camera is flying.
     * @public
     * @returns {boolean}
     */
    public isFlying(): boolean;
    /**
     * Rotates around planet to the left.
     * @public
     * @param {number} angle - Rotation angle.
     * @param {boolean} [spin] - If its true rotates around globe spin.
     */
    public rotateLeft(angle: number, spin?: boolean): void;
    /**
     * Rotates around planet to the right.
     * @public
     * @param {number} angle - Rotation angle.
     * @param {boolean} [spin] - If its true rotates around globe spin.
     */
    public rotateRight(angle: number, spin?: boolean): void;
    /**
     * Rotates around planet to the north pole.
     * @public
     * @param {number} angle - Rotation angle.
     */
    public rotateUp(angle: number): void;
    /**
     * Rotates around planet to the south pole.
     * @public
     * @param {number} angle - Rotation angle.
     */
    public rotateDown(angle: number): void;
    rotateVertical(angle: any, center: any, minSlope?: number): void;
    eye: any;
    _v: any;
    _u: any;
    _n: any;
    /**
     * Prepare camera to the frame. Used in render node frame function.
     * @public
     */
    public checkFly(): void;
    checkTerrainCollision(): void;
    getSurfaceVisibleDistance(d: any): number;
    getHeading(): number;
}
import { Key } from "../Lock.js";
