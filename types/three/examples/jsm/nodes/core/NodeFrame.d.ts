import { Camera, Material, Object3D, Renderer, Scene } from "../../../../src/Three.js";

import Node from "./Node.js";

export default class NodeFrame {
    time: number;
    deltaTime: number;

    frameId: number;
    renderId: number;

    startTime: number | null;

    frameMap: WeakMap<Node, number>;
    frameBeforeMap: WeakMap<Node, number>;
    renderMap: WeakMap<Node, number>;
    renderBeforeMap: WeakMap<Node, number>;

    renderer: Renderer | null;
    material: Material | null;
    camera: Camera | null;
    object: Object3D | null;
    scene: Scene | null;

    constructor();

    updateBeforeNode(node: Node): void;

    updateNode(node: Node): void;
    update(): void;
}
