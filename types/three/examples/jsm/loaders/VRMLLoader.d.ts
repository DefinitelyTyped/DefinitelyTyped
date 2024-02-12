import { Loader, LoadingManager, Scene } from "../../../src/Three.js";

export class VRMLLoader extends Loader<Scene> {
    constructor(manager?: LoadingManager);

    parse(data: string, path: string): Scene;
}
