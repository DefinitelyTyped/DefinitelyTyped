import { Three } from "../../src/core/three";
import Particle from "../core/Particle";
import { DEFAULT_MATERIAL_PROPERTIES } from "./constants";
import Initializer from "./Initializer";

export interface MaterialProperties {
    [key: string]: string | number | boolean;
}
export type MaterialPropertiesArgs = MaterialProperties | undefined;

export type MaterialPropertiesDefaults = typeof DEFAULT_MATERIAL_PROPERTIES | MaterialPropertiesArgs;

/**
 * Sets the body property to be a THREE.Sprite with a texture map on initialized particles.
 *
 * Constructs an Texture initializer.
 */
export default class Texture extends Initializer {
    constructor(
        WebGLAPI: Three,
        loadedTexture: THREE.Texture,
        materialProperties?: MaterialPropertiesDefaults,
        isEnabled?: boolean,
    );
    /**
     * @description The material properties for this object's SpriteMaterial
     * NOTE This is required for testing purposes
     */
    materialProperties: MaterialPropertiesDefaults;
    /**
     * @description The texture for the THREE.SpriteMaterial map.
     */
    texture: THREE.Texture;
    /**
     * @description THREE.SpriteMaterial instance.
     */
    material: THREE.SpriteMaterial;
    /**
     * @description THREE.Sprite instance.
     */
    sprite: THREE.Sprite;
    /**
     * Sets the particle body to the sprite.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Texture initializer from JSON.
     */
    static fromJSON(
        json: {
            loadedTexture: THREE.Texture;
            materialProperties: MaterialPropertiesArgs;
        },
        WebGLAPI: Three,
    ): Texture;
}
