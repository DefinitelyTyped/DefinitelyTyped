// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/MTLLoader.js


import { Material } from "./three-core";
import {LoadingManager} from "./three-core";
import {Mapping} from "./three-core";
import {EventDispatcher} from "./three-core";
import {BufferGeometry} from "./three-core";
import {Side} from "./three-core";
import {Texture} from "./three-core";
import {Vector2} from "./three-core";
import {Wrapping} from "./three-core";

export interface MaterialCreatorOptions {
    /**
     * side: Which side to apply the material
     * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     */
    side?: Side;
    /*
     * wrap: What type of wrapping to apply for textures
     * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     */
    wrap?: Wrapping;
    /*
     * normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
     * Default: false, assumed to be already normalized
     */
    normalizeRGB?: boolean;
    /*
     * ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
     * Default: false
     */
    ignoreZeroRGBs?: boolean;
    /*
     * invertTrProperty: Use values 1 of Tr field for fully opaque. This option is useful for obj
     * exported from 3ds MAX, vcglib or meshlab.
     * Default: false
     */
    invertTrProperty?: boolean;
}

export class MTLLoader extends EventDispatcher {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    materialOptions: MaterialCreatorOptions;
    path: string;
    texturePath: string;
    crossOrigin: boolean;

    load(url: string, onLoad: (materialCreator: MaterialCreator) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(text: string) : MaterialCreator;
    setPath(path: string) : void;
    setTexturePath(path: string) : void;
    setBaseUrl(path: string) : void;
    setCrossOrigin(value: boolean) : void;
    setMaterialOptions(value: MaterialCreatorOptions) : void;
}

export interface MaterialInfo {
    ks?: number[];
    kd?: number[];
    ke?: number[];
    map_kd?: string;
    map_ks?: string;
    map_ke?: string;
    norm?: string;
    map_bump?: string;
    bump?: string;
    map_d?: string;
    ns?: number;
    d?: number;
    tr?: number;
}

export interface TexParams {
    scale: Vector2;
    offset: Vector2;
    url: string;
}

export class MaterialCreator {

    constructor(baseUrl?: string, options?: MaterialCreatorOptions);

    baseUrl : string;
    options : MaterialCreatorOptions;
    materialsInfo : {[key: string]: MaterialInfo};
    materials : {[key: string]: Material};
    private materialsArray : Material[];
    nameLookup : {[key: string]: number};
    side : Side;
    wrap : Wrapping;

    setCrossOrigin( value: boolean ) : void;
    setManager( value: LoadingManager ) : void;
    setMaterials( materialsInfo: {[key: string]: MaterialInfo} ) : void;
    convert( materialsInfo: {[key: string]: MaterialInfo} ) : {[key: string]: MaterialInfo};
    preload() : void;
    getIndex( materialName: string ) : Material;
    getAsArray() : Material[];
    create( materialName: string ) : Material;
    createMaterial_( materialName: string ) : Material;
    getTextureParams( value: string, matParams: any ) : TexParams;
    loadTexture(url: string, mapping?: Mapping, onLoad?: (bufferGeometry: BufferGeometry) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): Texture;

}
