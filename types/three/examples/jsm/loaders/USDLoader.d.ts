import { Group, Loader, LoadingManager } from "three";

declare class USDLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer | string): Group;
}

export { USDLoader };
