import { ShaderMaterialParameters, ShaderMaterial } from './ShaderMaterial.js';

export class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters?: ShaderMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link RawShaderMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isRawShaderMaterial: true;

    override readonly type: 'RawShaderMaterial';
}
