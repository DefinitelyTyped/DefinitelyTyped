import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { Texture } from './../textures/Texture.js';
import { Material } from './../materials/Material.js';

export class MaterialLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    load(
        url: string,
        onLoad: (material: Material) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Material>;
    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: any): Material;
}
