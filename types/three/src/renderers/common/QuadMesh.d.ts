import { OrthographicCamera } from "../../cameras/OrthographicCamera.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import { Mesh } from "../../objects/Mesh.js";
import Renderer from "./Renderer.js";

export default class QuadMesh extends Mesh {
    camera: OrthographicCamera;

    readonly isQuadMesh: true;

    constructor(material: NodeMaterial);

    /**
     * @deprecated "renderAsync()" has been deprecated. Use "render()" and "await renderer.init();" when creating the renderer.
     */
    renderAsync(renderer: Renderer): Promise<void>;

    render(renderer: Renderer): void;
}
