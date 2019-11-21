import { Extent } from '../extent';
import GeometryType from '../geom/GeometryType';
import { ProjectionLike } from '../proj';

export default class RenderFeature {
    constructor(type: GeometryType, flatCoordinates: number[], ends: number[] | number[][], properties: { [key: string]: any }, id: number | string | undefined);
    get(key: string): any;
    getExtent(): Extent;
    getFlatInteriorPoint(): number[];
    getFlatInteriorPoints(): number[];
    getFlatMidpoint(): number[];
    getFlatMidpoints(): number[];
    getGeometry(): RenderFeature;
    getId(): number | string | undefined;
    getOrientedFlatCoordinates(): number[];
    getProperties(): { [key: string]: any };
    getSimplifiedGeometry(squaredTolerance: number): RenderFeature;
    getStride(): number;
    getStyleFunction(): undefined;
    getType(): GeometryType;
    transform(source: ProjectionLike, destination: ProjectionLike): void;
}
