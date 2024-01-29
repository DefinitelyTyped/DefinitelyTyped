import * as THREE from "three";
import type C3DTBatchTable from "../Core/3DTiles/C3DTBatchTable";
import C3DTExtensions from "../Core/3DTiles/C3DTExtensions";
import type C3DTFeature from "../Core/3DTiles/C3DTFeature";
import C3DTileset from "../Core/3DTiles/C3DTileset";
import type Style from "../Core/Style";
import type View from "../Core/View";
import { PNTS_MODE } from "../Renderer/PointsMaterial";
import type C3DTileSource from "../Source/C3DTilesSource";
import GeometryLayer from "./GeometryLayer";

export interface C3DTilesLayerOptions {
    source: C3DTileSource;
    name?: string;
    sseThreshold?: number;
    cleanupDelay?: number;
    registeredExtensions?: C3DTExtensions;
    pntsMode?: PNTS_MODE;
    style?: Style;
}

export enum C3DTILES_LAYER_EVENTS {
    ON_TILE_CONTENT_LOADED = "on-tile-content-loaded",
    ON_TILE_REQUESTED = "on-tile-requested",
}

declare class C3DTilesLayer extends GeometryLayer {
    constructor(id: string, config: C3DTilesLayerOptions, view: View);

    readonly isC3DTilesLayer: boolean;
    readonly protocol: "3d-tiles";

    sseThreshold: number;
    cleanupDelay: number;
    name?: string;
    registeredExtensions: C3DTExtensions;
    tilesC3DTileFeatures: Map<number, Map<number, C3DTFeature>>;
    tileset: C3DTileset;

    // preUpdate(): any[];

    // update(context: any, layer: any, node: any): any;

    // getObjectToUpdateForAttachedLayers(meta: any): {
    //     elements: any[];
    //     parent: any;
    // } | {
    //     elements: any[];
    //     parent?: undefined;
    // } | undefined;

    findBatchTable(object: THREE.Object3D): C3DTBatchTable;

    getC3DTileFeatureFromIntersectsArray(intersects: any[]): C3DTFeature;

    onTileContentLoaded(tileContent: THREE.Object3D): void;

    initC3DTileFeatures(tileContent: THREE.Object3D): void;

    computeWorldBox3(c3DTFeature: C3DTFeature, target: THREE.Box3): THREE.Box3;

    updateStyle(allowTileIdList?: number[]): boolean;

    get materialCount(): number;

    set style(value: Style);

    get style(): Style;
}

export default C3DTilesLayer;
