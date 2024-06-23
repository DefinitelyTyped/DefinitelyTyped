import { Loader, LoadingManager } from "three";
import { FontData } from "./FontLoader.js";

export class TTFLoader extends Loader<FontData> {
    reversed: boolean;

    constructor(manager?: LoadingManager);

    parse(arraybuffer: ArrayBuffer): FontData;
}
