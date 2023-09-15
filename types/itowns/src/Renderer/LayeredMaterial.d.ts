import * as THREE from "three";

export function unpack1K(color: any, factor: any): number;

export function getMaxColorSamplerUnitsCount(): number;

export enum colorLayerEffects {
    noEffect = 0,
    removeLightColor = 1,
    removeWhiteColor = 2,
    customEffect = 3,
}

export enum ELEVATION_MODES {
    RGBA = 0,
    COLOR = 1,
    DATA = 2,
}

// TODO: hidden properties

declare class LayeredMaterial extends THREE.RawShaderMaterial {
    constructor(options?: THREE.ShaderMaterialParameters, crsCount?: number); // TODO: Change order in itowns

    // mode: RenderMode;
    // vertexShader: string;
    // fragmentShader: string;
    // diffuse: THREE.Color;
    // opacity: number;
    // lightingEnabled: boolean;
    // lightPosition: THREE.Vector3;
    // fogDistance: number;
    // fogColor: THREE.Color;
    // overlayAlpha: number;
    // overlayColor: THREE.Color;
    // objectId: number;
    // geoidHeight: number;
    // minBorderDistance: number;
    // layers: any[];
    // elevationLayerIds: any[];
    // colorLayerIds: any[];
    // visible: boolean;
    // layersNeedUpdate?: boolean;

    // onBeforeCompile(shader: any, renderer: any): void;

    // getUniformByType(type: any): {
    //     layers: THREE.IUniform<any>;
    //     textures: THREE.IUniform<any>;
    //     offsetScales: THREE.IUniform<any>;
    //     textureCount: THREE.IUniform<any>;
    // };

    // updateLayersUniforms(): void;

    // setSequence(sequenceLayer: any): void;

    // setSequenceElevation(layerId: any): void;

    // removeLayer(layerId: any): void;

    // addLayer(rasterNode: any): void;

    // getLayer(id: any): any;

    // getLayers(ids: any): any[];

    // getElevationLayer(): any;

    // setElevationScale(scale: any): void;
}

export default LayeredMaterial;
