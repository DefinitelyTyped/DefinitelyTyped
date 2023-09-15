import { Points, Loader, LoadingManager } from '../../../src/Three.js';

export class PCDLoader extends Loader<Points> {
    constructor(manager?: LoadingManager);
    littleEndian: boolean;

    parse(data: ArrayBuffer | string): Points;
}
