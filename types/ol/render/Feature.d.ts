import { Extent } from '../extent';
import GeometryType from '../geom/GeometryType';
import { ProjectionLike, TransformFunction } from '../proj';

export default class RenderFeature {
    constructor(
        type: GeometryType,
        flatCoordinates: number[],
        ends: number[] | number[][],
        properties: { [key: string]: any },
        id: number | string | undefined,
    );
    get(key: string): any;
    getEnds(): number[] | number[][];
    getExtent(): Extent;
    getFlatInteriorPoint(): number[];
    getFlatInteriorPoints(): number[];
    getFlatMidpoint(): number[];
    getFlatMidpoints(): number[];
    getGeometry(): RenderFeature;
    getId(): number | string;
    getOrientedFlatCoordinates(): number[];
    getProperties(): { [key: string]: any };
    getSimplifiedGeometry(squaredTolerance: number): RenderFeature;
    getStride(): number;
    getStyleFunction(): any;
    getType(): GeometryType;
    simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): RenderFeature;
    transform(source: ProjectionLike, destination: ProjectionLike): void;
}
