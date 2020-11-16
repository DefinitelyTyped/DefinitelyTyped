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
    /**
     * Get a feature property by its key.
     */
    get(key: string): any;
    getEnds(): number[] | number[][];
    /**
     * Get the extent of this feature's geometry.
     */
    getExtent(): Extent;
    getFlatInteriorPoint(): number[];
    getFlatInteriorPoints(): number[];
    getFlatMidpoint(): number[];
    getFlatMidpoints(): number[];
    /**
     * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
     * determining the geometry type in style function (see {@link #getType}).
     */
    getGeometry(): RenderFeature;
    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is set when reading data from a remote source.
     */
    getId(): number | string | undefined;
    getOrientedFlatCoordinates(): number[];
    /**
     * Get the feature properties.
     */
    getProperties(): { [key: string]: any };
    getSimplifiedGeometry(squaredTolerance: number): RenderFeature;
    getStride(): number;
    getStyleFunction(): undefined;
    /**
     * Get the type of this feature's geometry.
     */
    getType(): GeometryType;
    /**
     * Get a transformed and simplified version of the geometry.
     */
    simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): RenderFeature;
    /**
     * Transform geometry coordinates from tile pixel space to projected.
     * The SRS of the source and destination are expected to be the same.
     */
    transform(source: ProjectionLike, destination: ProjectionLike): void;
}
