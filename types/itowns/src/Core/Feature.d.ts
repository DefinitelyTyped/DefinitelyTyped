import * as THREE from "three";
import Layer from "../Layer/Layer";
import Coordinates from "./Geographic/Coordinates";
import Extent from "./Geographic/Extent";
import Style from "./Style";

export enum FEATURE_TYPES {
    POINT = 0,
    LINE = 1,
    POLYGON = 2,
}

export interface FeatureBuildingOptions { // TODO
    crs: string;
    structure?: "2d" | "3d";
    filteringExtent?: any; // Event | boolean
    buildExtent?: any; // boolean
    forcedExtentCrs?: string;
    filter?: any; // function
    mergeFeatures?: boolean;
    style?: Style;
}

type FeatureType = "point" | "line" | "polygon";

export class FeatureGeometry { // TODO
    constructor(feature: Feature);

    extent?: Extent;
    indices: any[]; // { offset: number, count: number, extent: Extent }
    properties: unknown;
    // size: number;
    // altitude: {
    //     min: number;
    //     max: number;
    // };

    startSubGeometry(count: number, feature: Feature): void;

    closeSubGeometry(count: number, feature: Feature): void;

    // getLastSubGeometry(): any;

    // baseAltitude(feature: any, coordinates: any): any;

    pushCoordinates(coordIn: Coordinates, feature: Feature): void;

    pushCoordinatesValues(
        feature: Feature,
        long: number,
        lat: number,
        normal?: THREE.Vector3,
    ): void;

    updateExtent(): void;
}

declare class Feature { // TODO
    constructor(
        type: FeatureType,
        collection: FeatureCollection,
    );

    type: FeatureType;
    vertices: number[];
    normals?: number[];
    size: number;
    hasRawElevationData: boolean;
    crs: string;
    geometries: FeatureGeometry[];
    extent?: Extent;
    // transformToLocalSystem: (coordinates: Coordinates) => Coordinates;
    // useCrsOut: boolean | undefined;
    // style: Style;
    // altitude: {
    //     min: number;
    //     max: number;
    // };

    bindNewGeometry(): FeatureGeometry;

    updateExtent(geometry: FeatureGeometry): void;

    get geometryCount(): number;
}

export default Feature;

export class FeatureCollection extends THREE.Object3D { // TODO
    constructor(options: FeatureBuildingOptions | Layer);

    readonly isFeatureCollection: boolean;

    features: Feature[];
    extent: Extent;
    crs: string;
    size: number;
    style: Style;
    isInverted: boolean;
    matrixWorldInverse: THREE.Matrix4;
    center: Coordinates;
    // mergeFeatures: boolean;
    // filterExtent: any;
    // normalMatrixInverse: THREE.Matrix3;
    // altitude: {
    //     min: number;
    //     max: number;
    // };

    transformToLocalSystem(coordinates: Coordinates): Coordinates;

    updateExtent(extent: Extent): void;

    updateMatrixWorld(force: boolean): void;

    removeEmptyFeature(): void;

    pushFeature(feature: Feature): void;

    // requestFeature(type: FeatureType, callback: any): any;

    requestFeatureByType(type: string): Feature;

    requestFeatureById(id: string, type: FeatureType): Feature;

    newFeatureByReference(feature: Feature): Feature;

    // setParentStyle(style: any): void;
}
