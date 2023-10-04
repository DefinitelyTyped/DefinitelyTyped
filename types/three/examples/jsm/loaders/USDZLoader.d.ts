import { Loader, LoadingManager, Mesh } from '../../../src/Three.js';

export class USDAParser {
    parse(text: string): object;
}

export class USDZLoader extends Loader<Mesh> {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer | string): THREE.Group;
}
