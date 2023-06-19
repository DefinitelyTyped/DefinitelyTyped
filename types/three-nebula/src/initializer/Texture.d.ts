import Particle from '../core/Particle';
import Initializer from './Initializer';
import { DEFAULT_MATERIAL_PROPERTIES } from './constants';

interface MaterialProperties {
    [key: string]: string | number | boolean;
}
type MaterialPropertiesArgs = MaterialProperties | undefined;

export type MaterialPropertiesDefaults = typeof DEFAULT_MATERIAL_PROPERTIES | MaterialPropertiesArgs;

/**
 * Sets the body property to be a THREE.Sprite with a texture map on initialized particles.
 *
 * Constructs an Texture initializer.
 *
 */
export default class Texture extends Initializer {
    /**
     * @param {THREE} WebGLAPI - The Web GL API we are using eg., THREE
     * @param {THREE.Texture} loadedTexture - The sprite texture
     * @param {?object|undefined} materialProperties - The sprite material properties
     * @param {?boolean} isEnabled - Preloaded THREE.Texture instance
     */
    constructor(
        WebGLAPI: THREE,
        loadedTexture: THREE.Texture,
        materialProperties?: MaterialPropertiesDefaults,
        isEnabled?: boolean,
    );
    /**
     * @desc The material properties for this object's SpriteMaterial
     * NOTE This is required for testing purposes
     * @type {object}
     */
    materialProperties: MaterialPropertiesDefaults;
    /**
     * @desc The texture for the THREE.SpriteMaterial map.
     * @type {Texture}
     */
    texture: THREE.Texture;
    /**
     * @desc THREE.SpriteMaterial instance.
     * @type {SpriteMaterial}
     */
    material: THREE.SpriteMaterial;
    /**
     * @desc THREE.Sprite instance.
     * @type {Sprite}
     */
    sprite: THREE.Sprite;
    /**
     * Sets the particle body to the sprite.
     *
     * @param {Particle} particle - The particle to set the body of
     * @return void
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Texture initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {Texture} json.loadedTexture - The loaded sprite texture
     * @param {object} json.materialProperties - The sprite material properties
     * @return {BodySprite}
     */
    static fromJSON(
        json: {
            loadedTexture: THREE.Texture;
            materialProperties: MaterialPropertiesArgs;
        },
        WebGLAPI: THREE,
    ): Texture;
}

type THREE = typeof import('three');
