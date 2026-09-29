import { BufferGeometry, Loader, LoadingManager } from "three";

declare class GaussianSplatPLYLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string): BufferGeometry;
}

export { GaussianSplatPLYLoader };
