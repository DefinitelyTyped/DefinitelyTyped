import { Loader, Scene } from "../../../src/Three.js";

export interface Collada {
    kinematics: object;
    library: object;
    scene: Scene;
}

export class ColladaLoader extends Loader<Collada> {
    parse(text: string, path: string): Collada;
}
