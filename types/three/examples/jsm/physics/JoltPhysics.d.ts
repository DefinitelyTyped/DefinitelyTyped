import { Mesh, Object3D, Vector3Like } from "three";

export interface JoltPhysicsObject {
    addScene: (scene: Object3D) => void;
    addMesh: (mesh: Mesh, mass?: number, restitution?: number) => void;
    setMeshPosition: (mesh: Mesh, position: Vector3Like, index?: number) => void;
    setMeshVelocity: (mesh: Mesh, velocity: Vector3Like, index?: number) => void;
}

export function JoltPhysics(): Promise<JoltPhysicsObject>;
