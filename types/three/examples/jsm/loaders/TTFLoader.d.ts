import { Loader, LoadingManager } from "three";

export class TTFLoader extends Loader<object> {
    constructor(manager?: LoadingManager);
    reversed: boolean;

    parse(arraybuffer: ArrayBuffer): object;
}
