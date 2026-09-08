import { BufferGeometry, Loader, LoadingManager } from "three";

declare class SPLATLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): BufferGeometry;
}

export { SPLATLoader };
