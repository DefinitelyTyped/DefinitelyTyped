import { Mesh, MeshBasicMaterial, Object3DEventMap, PlaneGeometry } from "three";

export interface HTMLMeshEventMap extends Object3DEventMap {
    mousedown: { data: { x: number; y: number } };
    mousemove: { data: { x: number; y: number } };
    mouseup: { data: { x: number; y: number } };
    click: { data: { x: number; y: number } };
}

export class HTMLMesh extends Mesh<PlaneGeometry, MeshBasicMaterial, HTMLMeshEventMap> {
    constructor(dom: HTMLElement);
    dispose(): void;
}
