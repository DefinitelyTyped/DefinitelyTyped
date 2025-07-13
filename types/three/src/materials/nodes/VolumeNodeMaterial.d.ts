import Node from "../../nodes/core/Node.js";
import VolumetricLightingModel from "../../nodes/functions/VolumetricLightingModel.js";
import { ShaderNodeObject } from "../../nodes/tsl/TSLCore.js";
import { MapColorPropertiesToColorRepresentations, MaterialParameters, MaterialProperties } from "../Material.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

export interface VolumeNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
    /**
     * Number of steps used for raymarching.
     *
     * @default 25
     */
    steps: number;
    /**
     * Offsets the distance a ray has been traveled through a volume.
     * Can be used to implement dithering to reduce banding.
     *
     * @default null
     */
    offsetNode: Node;
    /**
     * Node used for scattering calculations.
     *
     * @default null
     */
    scatteringNode: (params: { positionRay: ShaderNodeObject<Node> }) => Node | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VolumeNodeMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<VolumeNodeMaterialNodeProperties>>, MaterialParameters
{}

/**
 * Volume node material.
 *
 * @augments NodeMaterial
 */
declare class VolumeNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new volume node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: VolumeNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isVolumeNodeMaterial: boolean;
    setupLightingModel(): VolumetricLightingModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface VolumeNodeMaterial extends VolumeNodeMaterialNodeProperties, MaterialProperties {}

export default VolumeNodeMaterial;
