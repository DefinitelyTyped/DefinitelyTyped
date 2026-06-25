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

    createMaterialFromType(type: string): Material;

    static createMaterialFromType(type: string): Material;

    /**
     * Registers the given material at the internal material library.
     *
     * @param type The material type.
     * @param materialClass The material class.
     */
    static registerMaterial(type: string, materialClass: new() => Material): void;
}
