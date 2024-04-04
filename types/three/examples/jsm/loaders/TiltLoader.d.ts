import { Group, Loader, LoadingManager } from "three";

export class TiltLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): Group;
}
