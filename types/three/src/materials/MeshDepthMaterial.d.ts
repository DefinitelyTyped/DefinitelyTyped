import { DepthPackingStrategies } from "../constants.js";
import { Texture } from "../textures/Texture.js";
import { Material, MaterialParameters } from "./Material.js";

export interface MeshDepthMaterialParameters extends MaterialParameters {
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    depthPacking?: DepthPackingStrategies | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
}

export class MeshDepthMaterial extends Material {
    constructor(parameters?: MeshDepthMaterialParameters);
    /**
     * Read-only flag to check if a given object is of type {@link MeshDepthMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMeshDepthMaterial: true;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default THREE.BasicDepthPacking
     */
    depthPacking: DepthPackingStrategies;

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

    setValues(parameters: MeshDepthMaterialParameters): void;
}
