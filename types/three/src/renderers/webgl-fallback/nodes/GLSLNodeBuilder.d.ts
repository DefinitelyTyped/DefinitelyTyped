import { Object3D } from "../../../core/Object3D.js";
import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import Renderer from "../../common/Renderer.js";

declare class GLSLNodeBuilder extends NodeBuilder {
    constructor(object: Object3D, renderer: Renderer);
}

export default GLSLNodeBuilder;
