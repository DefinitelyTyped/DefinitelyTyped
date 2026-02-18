import Renderer from "../../renderers/common/Renderer.js";
import ReferenceNode from "./ReferenceNode.js";

export default class RendererReferenceNode extends ReferenceNode<unknown, Renderer> {
    renderer: Renderer | null;

    constructor(property: string, inputType: string, renderer?: Renderer | null);
}

export const rendererReference: (
    name: string,
    type: string,
    renderer?: Renderer | null,
) => RendererReferenceNode;
