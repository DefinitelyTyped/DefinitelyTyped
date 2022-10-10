import NodeBuilder from '../../../nodes/core/NodeBuilder';
import { Texture, TextureEncoding, Renderer, Object3D } from '../../../../../src/Three';
import Node from '../../../nodes/core/Node';
import SlotNode from './SlotNode';
import { NodeShaderStageOption } from '../../../nodes/core/constants';

export class WebGLNodeBuilder extends NodeBuilder {
    constructor(
        object: Object3D,
        renderer: Renderer,
        shader: { uniforms: any; vertexShader: any; fragmentShader: any },
    );

    addSlot(shaderStage: NodeShaderStageOption, slotNode: SlotNode): Node;
    addFlowCode(code: string): string;

    getTexture(textureProperty: string, uvSnippet: string): string;
    getTextureBias(textureProperty: string, uvSnippet: string, biasSnippet: string): string;

    getTextureLevel(
        textureProperty: string,
        uvSnippet: string,
        biasSnippet: string,
        shaderStage?: NodeShaderStageOption,
    ): string;
    getCubeTexture(texturePropert: string, uvSnippet: string, shaderStage?: NodeShaderStageOption): string;

    getCubeTextureLevel(
        textureProperty: string,
        uvSnippet: string,
        biasSnippet: string,
        shaderStage?: NodeShaderStageOption,
    ): string;

    getCubeTextureBias(textureProperty: string, uvSnippet: string, biasSnippet: string): string;
    getUniforms(shaderStage: string): string;

    getAttributes(shaderStage: string): string;

    getVarys(shaderStage: string): string;

    addCodeAfterCode(shaderStage: string, snippet: string, code: string): string;
    addCodeAfterInclude(shaderStage: string, snippet: string, code: string): string;

    replaceCode(shaderStage: string, source: string, target: string): void;
    parseInclude(shaderStage: string, ...includes: string[]): void;
    getTextureEncodingFromMap(map: Texture): TextureEncoding;

    getInstanceIndex(): string;
    getFrontFacing(): string;

    buildCode(): void;
    build(): this;

    getSlot(shaderStage: string, name: string): Node;
}
