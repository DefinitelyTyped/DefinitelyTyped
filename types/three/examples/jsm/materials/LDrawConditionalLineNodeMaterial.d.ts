import { NodeMaterial, NodeMaterialParameters } from "three/webgpu";

declare class LDrawConditionalLineMaterial extends NodeMaterial {
    readonly isLDrawConditionalLineMaterial: true;

    constructor(parameters?: NodeMaterialParameters);
}

export { LDrawConditionalLineMaterial };
