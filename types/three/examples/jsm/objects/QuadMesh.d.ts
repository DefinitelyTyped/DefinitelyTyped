import { Material } from "../../../src/Three.js";
import Renderer from "../renderers/common/Renderer.js";

export default class QuadMesh {
    constructor(material?: Material | null);

    dispose(): void;

    renderAsync(renderer: Renderer): Promise<void>;

    get material(): Material;
    set material(value: Material);

    get render(): (renderer: Renderer) => Promise<void>;
}
