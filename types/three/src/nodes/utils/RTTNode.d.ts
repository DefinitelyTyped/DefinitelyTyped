import { TextureDataType } from "../../constants.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export interface RTTNodeOptions {
    type: TextureDataType;
}

declare class RTTNode extends TextureNode {
    node: Node;
    width: number | null;
    height: number | null;

    renderTarget: RenderTarget | null;

    textureNeedsUpdate: boolean;
    autoUpdate: boolean;

    pixelRatio?: number;

    constructor(node: Node, width?: number | null, height?: number | null, options?: RTTNodeOptions);

    get autoResize(): boolean;

    setSize(width: number | null, height: number | null): void;

    setPixelRatio(pixelRatio: number): void;
}

export default RTTNode;

export const rtt: (
    node: Node,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => ShaderNodeObject<RTTNode>;
export const convertToTexture: (
    node: Node,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => ShaderNodeObject<RTTNode>;
