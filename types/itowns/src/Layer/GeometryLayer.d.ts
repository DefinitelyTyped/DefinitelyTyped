import View from "../Core/View";
import Layer, { LayerOptions } from "./Layer";

export interface GeometryLayerOptions extends LayerOptions {
    visible?: boolean;
}

declare class GeometryLayer extends Layer {
    constructor(
        id: string,
        object3d: THREE.Object3D,
        config?: GeometryLayerOptions,
    );

    readonly isGeometryLayer: boolean;
    readonly object3d: THREE.Object3D;

    opacity: number;
    wireframe: boolean;
    attachedLayers: Layer[];

    get visible(): boolean;
    set visible(value: boolean); // TODO visible-property-changed
    // getObjectToUpdateForAttachedLayers(obj: any): {
    //     element: any;
    //     parent: any;
    // } | undefined;
    postUpdate(): void;
    culling(node: any, camera: any): boolean;

    attach(layer: Layer): void;
    detach(layer: Layer): boolean;

    pickObjectsAt(
        view: View,
        coordinates: { x: number; y: number },
        radius?: number,
        target?: any[],
    ): any[]; // TODO: any is THREE.Object3D ?
}
export default GeometryLayer;
