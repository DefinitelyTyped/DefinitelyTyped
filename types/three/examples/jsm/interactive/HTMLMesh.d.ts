import { Mesh } from 'three';

export class HTMLMesh extends Mesh {
    constructor(dom: HTMLElement);
    dispose(): void;
}
