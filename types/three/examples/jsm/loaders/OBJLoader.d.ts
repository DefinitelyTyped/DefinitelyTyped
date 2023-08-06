import { Loader, LoadingManager, Group } from '../../../src/Three.js';
import { MTLLoader } from './MTLLoader.js';

export class OBJLoader extends Loader {
    constructor(manager?: LoadingManager);
    materials: MTLLoader.MaterialCreator;

    load(
        url: string,
        onLoad: (group: Group) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Group>;
    parse(data: string): Group;
    setMaterials(materials: MTLLoader.MaterialCreator): this;
}
