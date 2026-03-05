import { Loader, Scene } from "three";

export interface ColladaKinematics {
    joints: unknown;
    getJointValue: unknown;
    setJointValue: unknown;
}

export interface ColladaLibrary {
    animations: Record<string, unknown>;
    clips: Record<string, unknown>;
    controllers: Record<string, unknown>;
    images: Record<string, unknown>;
    effects: Record<string, unknown>;
    materials: Record<string, unknown>;
    cameras: Record<string, unknown>;
    lights: Record<string, unknown>;
    geometries: Record<string, unknown>;
    nodes: Record<string, unknown>;
    visualScenes: Record<string, unknown>;
    kinematicsModels: Record<string, unknown>;
    physicsModels: Record<string, unknown>;
    kinematicsScenes: Record<string, unknown>;
}

export interface Collada {
    kinematics?: ColladaKinematics;
    library?: ColladaLibrary;
    scene: Scene;
}

export class ColladaLoader extends Loader<Collada | null> {
    parse(text: string, path: string): Collada | null;
}
