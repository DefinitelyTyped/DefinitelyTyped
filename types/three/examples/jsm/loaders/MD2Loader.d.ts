import { BufferGeometry, Loader, LoadingManager } from '../../../src/Three.js';

export class MD2Loader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): BufferGeometry;
}
