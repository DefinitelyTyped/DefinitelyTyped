import GeometryLayer from "./GeometryLayer";

export type OrientedImageLayerOptions = any;

// TODO: Define public API
declare class OrientedImageLayer extends GeometryLayer {
    constructor(id: string, config: OrientedImageLayerOptions);
}

export default OrientedImageLayer;
