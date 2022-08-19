import { Camera, Material, Object3D, Renderer } from '../../../../src/Three';

import Node from './Node';

export default class NodeFrame {
    time: number;
    deltaTime: number;
    frameId: number;
    startTime: null | number;
    renderer: null | Renderer;
    material: null | Material;
    camera: null | Camera;
    object: null | Object3D;

    constructor();

    updateNode(node: Node): void;
    update(): void;
}
