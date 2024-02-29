import { BufferGeometry, Loader, LoadingManager } from "three";

export class MD2Loader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): BufferGeometry;
}
