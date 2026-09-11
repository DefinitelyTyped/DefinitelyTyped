import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { Node } from "../../nodes/Nodes.js";
import Renderer from "./Renderer.js";
import RenderPipeline from "./RenderPipeline.js";

// `render()` is omitted from the base type since it is overloaded with a different signature.
declare const DirectRenderPipeline_base: {
    new(renderer: Renderer, outputNode?: Node): Omit<RenderPipeline, "render">;
};

declare class DirectRenderPipeline extends DirectRenderPipeline_base {
    readonly isDirectRenderPipeline: true;

    constructor(renderer: Renderer, outputNode?: Node);

    render(scene: Object3D, camera: Camera): void;
}

export default DirectRenderPipeline;
