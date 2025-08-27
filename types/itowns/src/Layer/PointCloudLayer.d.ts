import * as THREE from "three";
import { PNTS_MODE } from "../Renderer/PointsMaterial";
import GeometryLayer, { GeometryLayerOptions } from "./GeometryLayer";

interface PointCloudLayer {
    group: THREE.Group;
    bboxes: THREE.Group;
    octreeDepthLimit: number;
    pointBudget: number;
    sseThreshold: number;
    pointSize: number;
    material: THREE.Material;
    mode: PNTS_MODE;
    minIntensityRange: number;
    maxIntensityRange: number;
}

export type PointCloudLayerOptions = Partial<PointCloudLayer> & GeometryLayerOptions; // TODO: check output type

// TODO: Define public API
declare class PointCloudLayer extends GeometryLayer {
    constructor(id: string, config?: PointCloudLayerOptions);

    readonly isPointCloudLayer: true;
    readonly protocol: "pointcloud";

    root: any; // TODO

    displayedCount: number;

    // preUpdate(context: any, changeSources: any): any[];
    // update(context: any, layer: any, elt: any): any;
    // pickObjectsAt(view: any, mouse: any, radius: any, target?: any[]): any[] | undefined;
    // getObjectToUpdateForAttachedLayers(meta: any): {
    //     element: any;
    //     parent: any;
    // } | {
    //     element: any;
    //     parent?: undefined;
    // } | undefined;
}

export default PointCloudLayer;
