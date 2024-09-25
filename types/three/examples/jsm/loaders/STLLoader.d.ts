import { BufferGeometry, Loader, LoadingManager } from "three";

export class STLLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string): BufferGeometry;
}
