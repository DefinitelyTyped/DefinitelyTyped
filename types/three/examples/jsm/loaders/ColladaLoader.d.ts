import { Loader, LoadingManager, Scene } from '../../../src/Three.js';

export interface Collada {
    kinematics: object;
    library: object;
    scene: Scene;
}

export class ColladaLoader extends Loader<Collada> {
    constructor(manager?: LoadingManager);

    parse(text: string, path: string): Collada;
}
