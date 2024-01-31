import { BufferGeometry, Loader, LoadingManager } from "../../../src/Three.js";

export class STLLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string): BufferGeometry;
}
