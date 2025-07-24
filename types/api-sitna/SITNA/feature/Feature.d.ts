import { Layer } from "../../SITNA/layer/Layer";

export interface FeatureOptions {
    data?: object | string;
    group?: string;
    layer?: string | Layer;
    showPopup?: boolean;
    showsPopup?: boolean;
    selected?: boolean;
    selection?: object;
    pointArray?: boolean;
    id?: string;
}

export interface MeasurementOptions {
    crs?: string;
    geometryCrs?: string;
}

export type Geometry = Array<GeometryElement>;
export type GeometryElement = number | Geometry;

export class Feature {
    constructor(coords: Geometry, options?: FeatureOptions);

    getId(): string;
    getCoordinates(options?: MeasurementOptions): Geometry;
    setCoordinates(coords: Geometry): this;
    getData(): object | string;
    setData(data: object | string): this;
}

export default Feature;
