import { NodeMaterial, NodeMaterialParameters } from "three/tsl";

declare class LDrawConditionalLineMaterial extends NodeMaterial {
    readonly isLDrawConditionalLineMaterial: true;

    constructor(parameters?: NodeMaterialParameters);
}

export { LDrawConditionalLineMaterial };
