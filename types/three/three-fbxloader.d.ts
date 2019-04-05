// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/FBXLoader.js

import { LoadingManager } from "./three-core";
import { AnimationClip, Group } from "./three-core";

interface IFbxSceneGraph extends Group {
    animations: AnimationClip[];
}
export class FBXLoader {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;

    load(url: string, onLoad: (group: IFbxSceneGraph) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(FBXText: string, resourceDirectory: string) : Group;

}
