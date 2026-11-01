import { BufferGeometry, Loader, LoadingManager } from "three";

declare class KSPLATLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): BufferGeometry;
}

export { KSPLATLoader };
