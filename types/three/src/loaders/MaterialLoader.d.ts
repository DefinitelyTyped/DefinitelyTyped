import { Material } from "../materials/Material.js";
import { Texture } from "../textures/Texture.js";
import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class MaterialLoader extends Loader<Material> {
    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    constructor(manager?: LoadingManager);

    parse(json: unknown): Material;

    setTextures(textures: { [key: string]: Texture }): this;

    static createMaterialFromType(type: string): Material;
}
