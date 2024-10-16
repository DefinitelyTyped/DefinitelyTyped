import Renderer from "../../renderers/common/Renderer.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ReferenceNode from "./ReferenceNode.js";

export default class RendererReferenceNode extends ReferenceNode<Renderer> {
    renderer: Renderer | null;

    constructor(property: string, inputType: string, renderer?: Renderer | null);
}

export const rendererReference: (
    name: string,
    type: string,
    renderer?: Renderer | null,
) => ShaderNodeObject<RendererReferenceNode>;
