import { Camera, AnimationClip, FileLoader, Loader, LoadingManager, SkinnedMesh, ShaderMaterial, Color, Texture } from '../../../src/Three.js';

export interface MMDLoaderAnimationObject {
    animation: AnimationClip;
    mesh: SkinnedMesh;
}

export class MMDLoader extends Loader<SkinnedMesh> {
    constructor(manager?: LoadingManager);
    animationBuilder: object;
    animationPath: string;
    loader: FileLoader;
    meshBuilder: object;
    parser: object | null;

    loadAnimation(
        url: string,
        object: SkinnedMesh | Camera,
        onLoad: (object: SkinnedMesh | AnimationClip) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadPMD(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadPMX(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadVMD(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadVPD(
        url: string,
        isUnicode: boolean,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadWithAnimation(
        url: string,
        vmdUrl: string | string[],
        onLoad: (object: MMDLoaderAnimationObject) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    setAnimationPath(animationPath: string): this;
}

export type MMDToonMaterial = {
    isMMDToonMaterial: boolean;
    type: "MMDToonMaterial";
    
    // emissiveIntensity is used to control the intensity or strength of emissive light emitted by a material
    emissiveIntensity: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    flatShading: boolean;
    lights: boolean;

    normalMapType: number;
    matcapCombine: number;
    combine: number;

    specular: Color;
	opacity: number;
	diffuse: Color;

	map: Texture;
	matcap: Texture;
	gradientMap: Texture;

	lightMap: Texture;
	lightMapIntensity: number;

	aoMap: Texture;
	aoMapIntensity: number;

	emissive: Color;
	emissiveMap: Texture;

	bumpMap: Texture;
    bumpScale: number;

	normalMap: Texture;
	normalScale: number;

	displacemantBias: number;
	displacemantMap: Texture;
	displacemantScale: number;

	specularMap: Texture;
	alphaMap: Texture;

	reflectivity: number;
	refractionRatio: number;
    
    shininess: number;
    color: Color;
};
