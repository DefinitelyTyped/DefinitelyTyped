import { Group, Loader, LoadingManager } from "three";

export class AMFLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): Group;
}
