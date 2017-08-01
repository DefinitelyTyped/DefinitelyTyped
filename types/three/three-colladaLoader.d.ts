import {
    Scene
} from "./three-core";

export interface ColladaLoaderReturnType {
}

export class ColladaModel {
    animations: any[];
    kinematics: any;
    scene: Scene;
    library: any;
}
export class ColladaLoader {
    constructor();

    load(url: string, onLoad: (model: ColladaModel) => void, onProgress?: (request: ProgressEvent) => void, onError?:(event: ErrorEvent) => void): void;
    setCrossOrigin(value: any): void;
    parse(text: string): ColladaModel;
}