import { Material, ObjectLoader, Texture } from "three";
import { NodeLoaderResult } from "./NodeLoader.js";

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: unknown, textures: { [key: string]: Texture }): NodeLoaderResult;

    parseMaterials(json: unknown, textures: { [key: string]: Texture }): { [key: string]: Material };
}
