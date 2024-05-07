import { Group, Loader, LoadingManager, Mesh } from "three";

export class USDAParser {
    parse(text: string): object;
}

export class USDZLoader extends Loader<Mesh> {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer | string): Group;
}
