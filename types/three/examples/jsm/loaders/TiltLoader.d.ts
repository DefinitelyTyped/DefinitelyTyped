import { Group, Loader, LoadingManager } from "../../../src/Three.js";

export class TiltLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): Group;
}
