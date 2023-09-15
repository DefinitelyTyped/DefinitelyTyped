import { Loader, LoadingManager, Group } from '../../../src/Three.js';
import { MTLLoader } from './MTLLoader.js';

export class OBJLoader extends Loader<Group> {
    constructor(manager?: LoadingManager);
    materials: MTLLoader.MaterialCreator;

    parse(data: string): Group;
    setMaterials(materials: MTLLoader.MaterialCreator): this;
}
