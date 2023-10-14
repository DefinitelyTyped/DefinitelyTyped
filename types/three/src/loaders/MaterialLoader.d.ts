import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { Texture } from '../textures/Texture.js';
import { Material } from '../materials/Material.js';

export class MaterialLoader extends Loader<Material> {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: unknown): Material;
}
