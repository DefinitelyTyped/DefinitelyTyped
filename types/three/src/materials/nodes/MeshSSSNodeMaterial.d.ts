import InputNode from "../../nodes/core/InputNode.js";
import { LightingModelDirectInput } from "../../nodes/core/LightingModel.js";
import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import PhysicalLightingModel from "../../nodes/functions/PhysicalLightingModel.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshPhysicalMaterialParameters, MeshPhysicalMaterialProperties } from "../MeshPhysicalMaterial.js";
import MeshPhysicalNodeMaterial, { MeshPhysicalNodeMaterialNodeProperties } from "./MeshPhysicalNodeMaterial.js";

/**
 * Represents the lighting model for {@link MeshSSSNodeMaterial}.
 */
declare class SSSLightingModel extends PhysicalLightingModel {
    /**
     * Constructs a new physical lighting model.
     *
     * @param {boolean} [clearcoat=false] - Whether clearcoat is supported or not.
     * @param {boolean} [sheen=false] - Whether sheen is supported or not.
     * @param {boolean} [iridescence=false] - Whether iridescence is supported or not.
     * @param {boolean} [anisotropy=false] - Whether anisotropy is supported or not.
     * @param {boolean} [transmission=false] - Whether transmission is supported or not.
     * @param {boolean} [dispersion=false] - Whether dispersion is supported or not.
     * @param {boolean} [sss=false] - Whether SSS is supported or not.
     */
    constructor(
        clearcoat?: boolean,
        sheen?: boolean,
        iridescence?: boolean,
        anisotropy?: boolean,
        transmission?: boolean,
        dispersion?: boolean,
        sss?: boolean,
    );
    /**
     * Whether the lighting model should use SSS or not.
     *
     * @default false
     */
    useSSS: boolean;
    /**
     * Extends the default implementation with a SSS term.
     *
     * Reference: [Approximating Translucency for a Fast, Cheap and Convincing Subsurface Scattering Look](https://colinbarrebrisebois.com/2011/03/07/gdc-2011-approximating-translucency-for-a-fast-cheap-and-convincing-subsurface-scattering-look/)
     *
     * @param {Object} input - The input data.
     * @param {NodeBuilder} builder - The current node builder.
     */
    direct(input: LightingModelDirectInput, builder: NodeBuilder): void;
}

export interface MeshSSSNodeMaterialNodeProperties extends MeshPhysicalNodeMaterialNodeProperties {
    /**
     * Represents the thickness color.
     *
     * @default null
     */
    thicknessColorNode: Node | null;
    /**
     * Represents the distortion factor.
     */
    thicknessDistortionNode: InputNode<number>;
    /**
     * Represents the thickness ambient factor.
     */
    thicknessAmbientNode: InputNode<number>;
    /**
     * Represents the thickness attenuation.
     */
    thicknessAttenuationNode: InputNode<number>;
    /**
     * Represents the thickness power.
     */
    thicknessPowerNode: InputNode<number>;
    /**
     * Represents the thickness scale.
     */
    thicknessScaleNode: InputNode<number>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshSSSNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshSSSNodeMaterialNodeProperties>>,
        MeshPhysicalMaterialParameters
{}

/**
 * This node material is an experimental extension of {@link MeshPhysicalNodeMaterial}
 * that implements a Subsurface scattering (SSS) term.
 *
 * @augments MeshPhysicalNodeMaterial
 */
declare class MeshSSSNodeMaterial extends MeshPhysicalNodeMaterial {
    constructor(parameters?: MeshSSSNodeMaterialParameters);
    setValues(values?: MeshSSSNodeMaterialParameters): void;
    /**
     * Whether the lighting model should use SSS or not.
     *
     * @default true
     */
    get useSSS(): boolean;
    /**
     * Setups the lighting model.
     *
     * @return {SSSLightingModel} The lighting model.
     */
    setupLightingModel(): SSSLightingModel;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshSSSNodeMaterial extends MeshSSSNodeMaterialNodeProperties, MeshPhysicalMaterialProperties {}

export default MeshSSSNodeMaterial;
