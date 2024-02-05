import { NormalMapTypes } from "../constants.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { Material, MaterialParameters } from "./Material.js";

export interface MeshNormalMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;

    flatShading?: boolean | undefined;
}

export class MeshNormalMaterial extends Material {
    constructor(parameters?: MeshNormalMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link MeshNormalMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMeshNormalMaterial: true;

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    setValues(parameters: MeshNormalMaterialParameters): void;
}
