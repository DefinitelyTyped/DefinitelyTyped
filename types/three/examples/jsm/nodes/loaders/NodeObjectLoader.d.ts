import { NodeLoaderResult } from './NodeLoader.js';
import { Material, ObjectLoader, Texture } from '../../../../src/Three.js';
import { AnyJson } from '../core/constants.js';

export default class NodeObjectLoader extends ObjectLoader {
    parseNodes(json: AnyJson, textures: { [key: string]: Texture }): NodeLoaderResult;

    // tslint:disable-next-line:comment-format
    //@ts-expect-error
    parseMaterials(json: AnyJson, textures: { [key: string]: Texture }): { [key: string]: Material };
}
