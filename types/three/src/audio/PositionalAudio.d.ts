import { Audio } from "./Audio.js";

/**
 * Represents a positional audio object.
 *
 * ```js
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add( listener );
 *
 * // create the PositionalAudio object (passing in the listener)
 * const sound = new THREE.PositionalAudio( listener );
 *
 * // load a sound and set it as the PositionalAudio object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load( 'sounds/song.ogg', function( buffer ) {
 * 	sound.setBuffer( buffer );
 * 	sound.setRefDistance( 20 );
 * 	sound.play();
 * });
 *
 * // create an object for the sound to play from
 * const sphere = new THREE.SphereGeometry( 20, 32, 16 );
 * const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
 * const mesh = new THREE.Mesh( sphere, material );
 * scene.add( mesh );
 *
 * // finally add the sound to the mesh
 * mesh.add( sound );
 */
export class PositionalAudio extends Audio<PannerNode> {
    /**
     * The panner node represents the location, direction, and behavior of an audio
     * source in 3D space.
     */
    readonly panner: PannerNode;
    disconnect(): this;
    /**
     * Returns the current reference distance.
     *
     * @return {number} The reference distance.
     */
    getRefDistance(): number;
    /**
     * Defines the reference distance for reducing volume as the audio source moves
     * further from the listener – i.e. the distance at which the volume reduction
     * starts taking effect.
     *
     * @param {number} value - The reference distance to set.
     * @return {PositionalAudio} A reference to this instance.
     */
    setRefDistance(value: number): this;
    /**
     * Returns the current rolloff factor.
     *
     * @return {number} The rolloff factor.
     */
    getRolloffFactor(): number;
    /**
     * Defines how quickly the volume is reduced as the source moves away from the listener.
     *
     * @param {number} value - The rolloff factor.
     * @return {PositionalAudio} A reference to this instance.
     */
    setRolloffFactor(value: number): this;
    /**
     * Returns the current distance model.
     *
     * @return {('linear'|'inverse'|'exponential')} The distance model.
     */
    getDistanceModel(): "linear" | "inverse" | "exponential";
    /**
     * Defines which algorithm to use to reduce the volume of the audio source
     * as it moves away from the listener.
     *
     * Read [the spec](https://www.w3.org/TR/webaudio-1.1/#enumdef-distancemodeltype)
     * for more details.
     *
     * @param {('linear'|'inverse'|'exponential')} value - The distance model to set.
     * @return {PositionalAudio} A reference to this instance.
     */
    setDistanceModel(value: "linear" | "inverse" | "exponential"): this;
    /**
     * Returns the current max distance.
     *
     * @return {number} The max distance.
     */
    getMaxDistance(): number;
    /**
     * Defines the maximum distance between the audio source and the listener,
     * after which the volume is not reduced any further.
     *
     * This value is used only by the `linear` distance model.
     *
     * @param {number} value - The max distance.
     * @return {PositionalAudio} A reference to this instance.
     */
    setMaxDistance(value: number): this;
    /**
     * Sets the directional cone in which the audio can be listened.
     *
     * @param {number} coneInnerAngle - An angle, in degrees, of a cone inside of which there will be no volume reduction.
     * @param {number} coneOuterAngle - An angle, in degrees, of a cone outside of which the volume will be reduced by a constant value, defined by the `coneOuterGain` parameter.
     * @param {number} coneOuterGain - The amount of volume reduction outside the cone defined by the `coneOuterAngle`. When set to `0`, no sound can be heard.
     * @return {PositionalAudio} A reference to this instance.
     */
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
}
