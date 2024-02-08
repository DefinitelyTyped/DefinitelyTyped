import { Group, Loader, LoadingManager } from "../../../src/Three.js";

export class GCodeLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);
    splitLayer: boolean;

    parse(data: string): Group;
}
