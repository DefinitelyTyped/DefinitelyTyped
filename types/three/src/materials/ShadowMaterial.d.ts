import { Color } from "../math/Color.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface ShadowMaterialProperties extends MaterialProperties {
    /**
     * Color of the material.
     *
     * @default (0,0,0)
     */
    color: Color;
    /**
     * Whether the material is affected by fog or not.
     *
     * @default true
     */
    fog: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShadowMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<ShadowMaterialProperties>>
{}

/**
 * This material can receive shadows, but otherwise is completely transparent.
 *
 * ```js
 * const geometry = new THREE.PlaneGeometry( 2000, 2000 );
 * geometry.rotateX( - Math.PI / 2 );
 *
 * const material = new THREE.ShadowMaterial();
 * material.opacity = 0.2;
 *
 * const plane = new THREE.Mesh( geometry, material );
 * plane.position.y = -200;
 * plane.receiveShadow = true;
 * scene.add( plane );
 * ```
 */
export class ShadowMaterial extends Material {
    /**
     * Constructs a new shadow material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: ShadowMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isShadowMaterial: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShadowMaterial extends ShadowMaterialProperties {}
