import { Loader, LoadingManager } from "three";

import { Volume } from "../misc/Volume.js";

export class NRRDLoader extends Loader<Volume> {
    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    path: string;

    fieldFunctions: object;

    parse(data: string): Volume;
    parseChars(array: number[], start?: number, end?: number): string;
    setPath(value: string): this;
}
