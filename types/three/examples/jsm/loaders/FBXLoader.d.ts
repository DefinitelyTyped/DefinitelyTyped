import { Group, Loader, LoadingManager } from "three";

export class FBXLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(FBXBuffer: ArrayBuffer | string, path: string): Group;
}
