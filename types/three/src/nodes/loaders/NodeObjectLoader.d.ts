import { ObjectLoader } from "../../loaders/ObjectLoader.js";
import { Material } from "../../materials/Material.js";
import { Texture } from "../../textures/Texture.js";
import { NodeLoaderResult } from "./NodeLoader.js";

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: unknown, textures: { [key: string]: Texture }): NodeLoaderResult;

    parseMaterials(json: unknown, textures: { [key: string]: Texture }): { [key: string]: Material };
}
