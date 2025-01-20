import { Loader, Scene } from "three";

export interface Collada {
    kinematics: object;
    library: object;
    scene: Scene;
}

export class ColladaLoader extends Loader<Collada> {
    parse(text: string, path: string): Collada;
}
