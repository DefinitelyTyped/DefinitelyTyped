import { Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class HTMLMesh extends Mesh<PlaneGeometry, MeshBasicMaterial> {
    constructor(dom: HTMLElement);
    dispose(): void;
}
