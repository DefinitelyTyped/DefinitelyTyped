import { Loader, LoadingManager } from "three";

import { Collada } from "./ColladaLoader.js";

export class KMZLoader extends Loader<Collada> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): Collada;
}
