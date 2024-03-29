import Renderer from "../../renderers/common/Renderer.js";
import { NodeTypeOption } from "../core/constants.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import ReferenceNode from "./ReferenceNode.js";

export default class RendererReferenceNode extends ReferenceNode<Renderer> {
    renderer: Renderer | null;

    constructor(property: string, inputType: NodeTypeOption, renderer?: Renderer | null);
}

export const rendererReference: (
    name: string,
    type: NodeTypeOption,
    renderer?: Renderer | null,
) => ShaderNodeObject<RendererReferenceNode>;
