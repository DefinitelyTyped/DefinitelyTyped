import { BufferGeometry } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import Renderer from "../../renderers/common/Renderer.js";

export default abstract class NodeBuilder {
    object: Object3D;
    material: Material;
    geometry: BufferGeometry;
    renderer: Renderer;
    context: unknown;
}
