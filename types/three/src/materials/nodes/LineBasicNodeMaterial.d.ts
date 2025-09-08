import { LineBasicMaterialParameters, LineBasicMaterialProperties } from "../LineBasicMaterial.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import NodeMaterial, { NodeMaterialNodeProperties } from "./NodeMaterial.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineBasicNodeMaterialNodeProperties extends NodeMaterialNodeProperties {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineBasicNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<LineBasicNodeMaterialNodeProperties>>,
        LineBasicMaterialParameters
{}

/**
 * Node material version of {@link LineBasicMaterial}.
 *
 * @augments NodeMaterial
 */
declare class LineBasicNodeMaterial extends NodeMaterial {
    /**
     * Constructs a new line basic node material.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: LineBasicNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isLineBasicNodeMaterial: boolean;
    setValues(values?: LineBasicNodeMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LineBasicNodeMaterial extends LineBasicNodeMaterialNodeProperties, LineBasicMaterialProperties {}

export default LineBasicNodeMaterial;
