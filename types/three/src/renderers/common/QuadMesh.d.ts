import { OrthographicCamera } from "../../cameras/OrthographicCamera.js";
import { Material } from "../../materials/Material.js";
import { Mesh } from "../../objects/Mesh.js";
import Renderer from "./Renderer.js";

export default class QuadMesh extends Mesh {
    camera: OrthographicCamera;

    readonly isQuadMesh: true;

    constructor(material?: Material | null);

    renderAsync(renderer: Renderer): Promise<void>;

    render(renderer: Renderer): void;
}
