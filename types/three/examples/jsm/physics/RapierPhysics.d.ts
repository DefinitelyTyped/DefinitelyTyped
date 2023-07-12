import { Mesh } from '../../../src/Three.js';

type Vector = { x: number; y: number; z: number };

export interface RapierPhysicsObject {
    addMesh: (mesh: Mesh, mass?: number, restitution?: number) => void;
    setMeshPosition: (mesh: Mesh, position: Vector, index?: number) => void;
    setMeshVelocity: (mesh: Mesh, velocity: Vector, index?: number) => void;
}

export function RapierPhysics(): Promise<RapierPhysicsObject>;
