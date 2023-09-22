import Particle from "../core/Particle";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";
import { MaterialPropertiesDefaults } from "./Texture";
/**
 * Sets the body property to be a THREE.Sprite on initialized particles.
 *
 * NOTE The texture map MUST be set on the SpriteMaterial in the TextureLoader.load
 * callback. Not doing so will cause WebGL buffer errors.
 */

export default class BodySprite extends Initializer {
    constructor(THREE: THREE, texture: string, materialProperties?: MaterialPropertiesDefaults, isEnabled?: boolean);
    /**
     * @description The material properties for this object's SpriteMaterial
     * NOTE This is required for testing purposes
     */
    materialProperties: MaterialPropertiesDefaults;
    /**
     * Sets the particle body to the sprite.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a BodySprite initializer from JSON.
     */
    static fromJSON(json: JSONObject, THREE: THREE.WebGLRenderer): BodySprite;
}

export type THREE = typeof import("three");
