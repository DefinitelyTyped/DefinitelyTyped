import * as THREE from "three";
import Extent from "../Core/Geographic/Extent";
import Source from "../Source/Source";
import type { Strategy } from "./LayerUpdateStrategy";

export interface LayerOptions {
    source: Source | false;
    crs?: string;
    cacheLifeTime?: number;
    addLabelLayer?: {
        performance?: boolean;
        forceClampToTerrain?: boolean;
    };
    zoom?: {
        max?: number;
        min?: number;
    };
    updateStrategy?: {
        type: Strategy;
        options?: any;
    };
    // options: any;
    // mergeFeatures: boolean;
}

export class Layer extends THREE.EventDispatcher<THREE.Event> {
    protected constructor(id: string, config: LayerOptions);

    readonly isLayer: boolean;
    readonly id: string;

    source: Source;
    ready: boolean;
    whenReady: Promise<this>;
    zoom: { max: number; min: number };
    frozen: boolean; // TODO: event
    // cache: Cache;
    // info: InfoLayer;
    // options: any;
    addLabelLayer?: {
        performance: boolean;
        forceClampToTerrain: boolean;
    };
    // updateStrategy?: {
    //  type: number;
    //  options: any;
    // }; // TODO: STRATEGY_MIN_NETWORK_TRAFFIC enum
    // mergeFeatures: boolean;

    // addInitializationStep(): Promise<any>;

    defineLayerProperty<K extends string, V>(
        propertyName: K,
        defaultValue: V,
        onChange?: (o: this & Record<K, V>, prop: K) => void,
    ): asserts this is Record<K, V>;

    convert(data: any, extentDestination: Extent): any;

    // getData(from: any, to: any): any;

    isValidData(feature: any): any;

    delete(clearCache?: boolean): void;

    // TODO: update on all layers

    // TODO: preUpdate on children (GeometryLayer)

    // TODO postUpdate on inherited (GeometryLayer)
}

export default Layer;

export const ImageryLayers: { // TODO
    moveLayerToIndex(
        layer: any,
        newIndex: number,
        imageryLayers: any,
    ): void;

    moveLayerDown(layer: any, imageryLayers: any): void;

    moveLayerUp(layer: any, imageryLayers: any): void;

    getColorLayersIdOrderedBySequence(imageryLayers: any): any[];
};
