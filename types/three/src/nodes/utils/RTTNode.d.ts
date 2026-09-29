import { RenderTarget, RenderTargetOptions } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";

export interface RTTNodeOptions extends RenderTargetOptions {
    autoUpdate?: boolean | undefined; // true
    resolutionScale?: number | undefined; // 1
}

declare class RTTNode extends TextureNode {
    readonly isRTTNode: true;

    node: Node;
    width: number | null;
    height: number | null;

    renderTarget: RenderTarget | null;

    textureNeedsUpdate: boolean;
    autoUpdate: boolean;

    constructor(node: Node, width?: number | null, height?: number | null, options?: RTTNodeOptions);

    get autoResize(): boolean;

    setSize(width: number | null, height: number | null): void;

    setResolutionScale(resolutionScale: number): this;

    getResolutionScale(): number;
}

export default RTTNode;

export const rtt: (
    node: Node,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => RTTNode;
export const convertToTexture: (
    node: Node,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => RTTNode;
