import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class AudioLoader extends Loader<AudioBuffer> {
    constructor(manager?: LoadingManager);
}
