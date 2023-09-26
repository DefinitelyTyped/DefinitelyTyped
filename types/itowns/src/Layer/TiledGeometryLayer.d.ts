import GeometryLayer from "./GeometryLayer";
import Layer from "./Layer";
// import { InfoTiledGeometryLayer } from "./InfoLayer";

export type TiledGeometryLayerOptions = any;

declare class TiledGeometryLayer extends GeometryLayer {
    static hasEnoughTexturesToSubdivide(
        context: any,
        node: /* TileMesh */ any,
    ): boolean;

    constructor(
        id: string,
        object3d: THREE.Object3D,
        schemeTile: any[],
        builder: any,
        config?: TiledGeometryLayerOptions,
    );

    readonly isTiledGeometryLayer: boolean;
    readonly protocol: "tile";

    sseSubdivisionThreshold: number;
    schemeTile: any[];
    builder: object;
    info: /* InfoTiledGeometryLayer */ any;
    level0Nodes: any[];
    colorLayersOrder?: any[];

    preUpdate(
        context: object,
        sources: Set</* GeometryLayer | TileMesh */ any>,
    ): /* TileMesh */ any[];

    update(context: object, layer: Layer, node: /* TileMesh */ any): object;

    convert(requester: any, extent: any): any;

    countColorLayersTextures(...layers: any[]): number;

    culling(node: any, camera: any): boolean;

    subdivideNode(context: object, node: /* TileMesh */ any): Promise<any>;

    subdivision(
        context: object,
        layer: /* PlanarLayer */ any,
        node: /* TileMesh */ any,
    ): boolean;
}
export default TiledGeometryLayer;
