import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { Object3D } from '../core/Object3D.js';
import { Texture } from '../textures/Texture.js';
import { Material } from '../materials/Material.js';
import { AnimationClip } from '../animation/AnimationClip.js';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { Source } from '../textures/Source.js';

export class ObjectLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (object: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync<ObjectType extends Object3D>(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): // tslint:disable-next-line:no-unnecessary-generics
    Promise<ObjectType>;
    // tslint:disable-next-line:no-unnecessary-generics
    parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
    // tslint:disable-next-line:no-unnecessary-generics
    parseAsync<T extends Object3D>(json: any): Promise<T>;
    parseGeometries(json: any): { [key: string]: InstancedBufferGeometry | BufferGeometry };
    parseMaterials(json: any, textures: { [key: string]: Texture }): { [key: string]: Material };
    parseAnimations(json: any): AnimationClip[];
    parseImages(json: any, onLoad?: () => void): { [key: string]: Source };
    parseImagesAsync(json: any): Promise<{ [key: string]: Source }>;
    parseTextures(json: any, images: { [key: string]: Source }): { [key: string]: Texture };
    parseObject<T extends Object3D>(
        data: any,
        geometries: any[],
        materials: Material[],
        animations: AnimationClip[],
    ): // tslint:disable-next-line:no-unnecessary-generics
    T;
}
