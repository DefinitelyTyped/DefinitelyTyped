import { Mesh, Object3D, Scene } from "three";

export interface SceneOptimizerOptions {
    debug?: boolean | undefined;
}

declare class SceneOptimizer {
    scene: Scene;
    debug: boolean;

    constructor(scene: Scene, options?: SceneOptimizerOptions);

    removeEmptyNodes(object: Object3D): void;
    disposeMeshes(meshesToRemove: Set<Mesh>): void;
    toBatchedMesh(): Scene;
}

export { SceneOptimizer };
