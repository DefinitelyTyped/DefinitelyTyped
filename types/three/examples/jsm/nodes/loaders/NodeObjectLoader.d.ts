import { Material, ObjectLoader, Texture } from "../../../../src/Three.js";
import { AnyJson } from "../core/constants.js";
import { NodeLoaderResult } from "./NodeLoader.js";

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: AnyJson, textures: { [key: string]: Texture }): NodeLoaderResult;

    parseMaterials(json: AnyJson, textures: { [key: string]: Texture }): { [key: string]: Material };
}
