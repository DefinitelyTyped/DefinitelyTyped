import { Mesh, Object3D, Vector3 } from "../../../src/Three.js";

export interface AmmoPhysicsObject {
    addScene: (scene: Object3D) => void;
    addMesh: (mesh: Mesh, mass?: number) => void;
    setMeshPosition: (mesh: Mesh, position: Vector3, index?: number) => void;
}

export function AmmoPhysics(): Promise<AmmoPhysicsObject>;
