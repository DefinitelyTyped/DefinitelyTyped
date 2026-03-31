import { JSONMeta, Object3D, Object3DJSON, Object3DJSONObject } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";
import { Color } from "../math/Color.js";
import { Euler, EulerTuple } from "../math/Euler.js";
import { Texture } from "../textures/Texture.js";
import { Fog, FogJSON } from "./Fog.js";
import { FogExp2, FogExp2JSON } from "./FogExp2.js";

export interface SceneJSONObject extends Object3DJSONObject {
    fog?: FogJSON | FogExp2JSON;

    backgroundBlurriness?: number;
    backgroundIntensity?: number;
    backgroundRotation: EulerTuple;

    environmentIntensity?: number;
    environmentRotation: EulerTuple;
}

export interface SceneJSON extends Object3DJSON {
    object: SceneJSONObject;
}

/**
 * Scenes allow you to set up what is to be rendered and where by three.js.
 * This is where you place 3D objects like meshes, lines or lights.
 */
export class Scene extends Object3D {
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isScene: boolean;
    /**
     * Defines the background of the scene. Valid inputs are:
     *
     * - A color for defining a uniform colored background.
     * - A texture for defining a (flat) textured background.
     * - Cube textures or equirectangular textures for defining a skybox.
     *
     * @default null
     */
    background: (Color | Texture) | null;
    /**
     * Sets the environment map for all physical materials in the scene. However,
     * it's not possible to overwrite an existing texture assigned to the `envMap`
     * material property.
     *
     * @default null
     */
    environment: Texture | null;
    /**
     * A fog instance defining the type of fog that affects everything
     * rendered in the scene.
     *
     * @default null
     */
    fog: (Fog | FogExp2) | null;
    /**
     * Sets the blurriness of the background. Only influences environment maps
     * assigned to {@link Scene#background}. Valid input is a float between `0`
     * and `1`.
     *
     * @default 0
     */
    backgroundBlurriness: number;
    /**
     * Attenuates the color of the background. Only applies to background textures.
     *
     * @default 1
     */
    backgroundIntensity: number;
    /**
     * The rotation of the background in radians. Only influences environment maps
     * assigned to {@link Scene#background}.
     *
     * @default (0,0,0)
     */
    backgroundRotation: Euler;
    /**
     * Attenuates the color of the environment. Only influences environment maps
     * assigned to {@link Scene#environment}.
     *
     * @default 1
     */
    environmentIntensity: number;
    /**
     * The rotation of the environment map in radians. Only influences physical materials
     * in the scene when {@link Scene#environment} is used.
     *
     * @default (0,0,0)
     */
    environmentRotation: Euler;
    /**
     * Forces everything in the scene to be rendered with the defined material. It is possible
     * to exclude materials from override by setting {@link Material#allowOverride} to `false`.
     *
     * @default null
     */
    overrideMaterial: Material | null;
    copy(source: Scene, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): SceneJSON;
}
