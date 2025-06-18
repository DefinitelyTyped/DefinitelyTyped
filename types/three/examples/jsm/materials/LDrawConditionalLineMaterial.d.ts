import { ShaderMaterial, ShaderMaterialParameters } from "three";

declare class LDrawConditionalLineMaterial extends ShaderMaterial {
    readonly isLDrawConditionalLineMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}

export { LDrawConditionalLineMaterial };
