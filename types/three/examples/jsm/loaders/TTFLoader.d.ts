import { Loader, LoadingManager } from '../../../src/Three.js';

export class TTFLoader extends Loader<object> {
    constructor(manager?: LoadingManager);
    reversed: boolean;

    parse(arraybuffer: ArrayBuffer): object;
}
