import { Loader, LoadingManager, Scene } from "three";

export class VRMLLoader extends Loader<Scene> {
    constructor(manager?: LoadingManager);

    parse(data: string, path: string): Scene;
}
