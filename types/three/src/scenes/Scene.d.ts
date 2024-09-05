import { JSONMeta, Object3D, Object3DJSON, Object3DJSONObject } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";
import { Color } from "../math/Color.js";
import { Euler, EulerTuple } from "../math/Euler.js";
import { CubeTexture } from "../textures/CubeTexture.js";
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
 * Scenes allow you to set up what and where is to be rendered by three.js
 * @remarks
 * This is where you place objects, lights and cameras.
 * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
 * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual: Creating a scene}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
 */
export class Scene extends Object3D {
    /**
     * Create a new {@link Scene} object.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Scene}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isScene: true;

    /**
     * @defaultValue `Scene`
     */
    type: "Scene";

    /**
     * A {@link Fog | fog} instance defining the type of fog that affects everything rendered in the scene.
     * @defaultValue `null`
     */
    fog: Fog | FogExp2 | null;

    /**
     * Sets the blurriness of the background. Only influences environment maps assigned to {@link THREE.Scene.background | Scene.background}.
     * @defaultValue `0`
     * @remarks Expects a `Float` between `0` and `1`.
     */
    backgroundBlurriness: number;

    /**
     * Attenuates the color of the background. Only applies to background textures.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    backgroundIntensity: number;

    /**
     * Forces everything in the {@link Scene} to be rendered with the defined material.
     * @defaultValue `null`
     */
    overrideMaterial: Material | null;

    /**
     * Defines the background of the scene.
     * @remarks Valid inputs are:
     *  - A {@link THREE.Color | Color} for defining a uniform colored background.
     *  - A {@link THREE.Texture | Texture} for defining a (flat) textured background.
     *  - Texture cubes ({@link THREE.CubeTexture | CubeTexture}) or equirectangular textures for defining a skybox.</li>
     * @defaultValue `null`
     */
    background: Color | Texture | CubeTexture | null;

    /**
     * The rotation of the background in radians. Only influences environment maps assigned to {@link .background}.
     * Default is `(0,0,0)`.
     */
    backgroundRotation: Euler;

    /**
     * Sets the environment map for all physical materials in the scene.
     * However, it's not possible to overwrite an existing texture assigned to {@link THREE.MeshStandardMaterial.envMap | MeshStandardMaterial.envMap}.
     * @defaultValue `null`
     */
    environment: Texture | null;

    /**
     * Attenuates the color of the environment. Only influences environment maps assigned to {@link Scene.environment}.
     * @default 1
     */
    environmentIntensity: number;

    /**
     * The rotation of the environment map in radians. Only influences physical materials in the scene when
     * {@link .environment} is used. Default is `(0,0,0)`.
     */
    environmentRotation: Euler;

    /**
     * Convert the {@link Scene} to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as textures or images for the scene.
     */
    toJSON(meta?: JSONMeta): SceneJSON;
}
