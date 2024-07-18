import {
    DataTexture,
    IUniform,
    MagnificationTextureFilter,
    Material,
    MinificationTextureFilter,
    ShaderMaterial,
    Texture,
    TextureDataType,
    TextureFilter,
    WebGLRenderer,
    WebGLRenderTarget,
    Wrapping,
} from "three";

export interface Variable {
    name: string;
    initialValueTexture: Texture;
    material: ShaderMaterial;
    dependencies: Variable[];
    renderTargets: WebGLRenderTarget[];
    wrapS: number;
    wrapT: number;
    minFilter: number;
    magFilter: number;
}

export class GPUComputationRenderer {
    constructor(sizeX: number, sizeY: number, renderer: WebGLRenderer);

    setDataType(type: TextureDataType): void;

    addVariable(variableName: string, computeFragmentShader: string, initialValueTexture: Texture): Variable;
    setVariableDependencies(variable: Variable, dependencies: Variable[] | null): void;

    init(): string | null;
    compute(): void;

    getCurrentRenderTarget(variable: Variable): WebGLRenderTarget;
    getAlternateRenderTarget(variable: Variable): WebGLRenderTarget;
    addResolutionDefine(materialShader: ShaderMaterial): void;
    createShaderMaterial(computeFragmentShader: string, uniforms?: { [uniform: string]: IUniform }): ShaderMaterial;
    createRenderTarget(
        sizeXTexture: number,
        sizeYTexture: number,
        wrapS: Wrapping,
        wrapT: number,
        minFilter: MinificationTextureFilter,
        magFilter: MagnificationTextureFilter,
    ): WebGLRenderTarget;
    createTexture(): DataTexture;
    renderTexture(input: Texture, output: WebGLRenderTarget): void;
    doRenderTarget(material: Material, output: WebGLRenderTarget): void;
    dispose(): void;
}
