import { BufferGeometry, Loader, LoadingManager } from "three";

export class VTKLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string, path: string): BufferGeometry;
}
