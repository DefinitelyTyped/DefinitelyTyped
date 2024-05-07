import { Group, Loader, LoadingManager } from "three";

export class GCodeLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);
    splitLayer: boolean;

    parse(data: string): Group;
}
