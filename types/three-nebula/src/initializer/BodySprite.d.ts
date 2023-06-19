import Particle from '../core/Particle';
import Initializer from './Initializer';
import { JSONObject } from './Rate';
import { MaterialPropertiesDefaults } from './Texture';
/**
 * Sets the body property to be a THREE.Sprite on initialized particles.
 *
 * NOTE The texture map MUST be set on the SpriteMaterial in the TextureLoader.load
 * callback. Not doing so will cause WebGL buffer errors.
 * @param {THREE} THREE - The Web GL API we are using eg., THREE
 * @param {string} texture - The sprite texture
 * @param {object} materialProperties - The sprite material properties
 * @param {boolean} [isEnabled=true] - Determines if the initializer is enabled or not
 * @return void
 */

export default class BodySprite extends Initializer {
    constructor(THREE: THREE, texture: string, materialProperties?: MaterialPropertiesDefaults, isEnabled?: boolean);
    /**
     * @desc The material properties for this object's SpriteMaterial
     * NOTE This is required for testing purposes
     * @type {object}
     */
    materialProperties: MaterialPropertiesDefaults;
    /**
     * Sets the particle body to the sprite.
     *
     * @param {Particle} particle - The particle to set the body of
     * @return void
     */
    initialize(particle: Particle): void;
    /**
     * Creates a BodySprite initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {string} json.texture - The sprite texture
     * @param {object} json.materialProperties - The sprite material properties
     * @return {BodySprite}
     */
    static fromJSON(json: JSONObject, THREE: THREE.WebGLRenderer): BodySprite;
}

type THREE = typeof import('three');
