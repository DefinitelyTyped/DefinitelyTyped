import { Material } from '../../../src/Three.js';
import Renderer from '../renderers/common/Renderer.js';

export default class QuadMesh {
    constructor(material?: Material | null);

    dispose(): void;

    render(renderer: Renderer): void;

    get material(): Material;
    set material(value: Material);
}
