import { Coordinate } from './coordinate';
import { Extent } from './extent';
import Projection from './proj/Projection';
import Units from './proj/Units';

export type ProjectionLike = Projection | string;
export type TransformFunction = (p0: number[], p1?: number[], p2?: number) => number[];
export function addCommon(): void;
export function addCoordinateTransforms(
    source: ProjectionLike,
    destination: ProjectionLike,
    forward: (p0: Coordinate) => Coordinate,
    inverse: (p0: Coordinate) => Coordinate,
): void;
export function addEquivalentProjections(projections: Projection[]): void;
export function addEquivalentTransforms(
    projections1: Projection[],
    projections2: Projection[],
    forwardTransform: TransformFunction,
    inverseTransform: TransformFunction,
): void;
export function addProjection(projection: Projection): void;
export function addProjections(projections: Projection[]): void;
export function clearAllProjections(): void;
export function clearUserProjection(): void;
export function cloneTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];
export function createProjection(projection: Projection | string | undefined, defaultCode: string): Projection;
export function createTransformFromCoordinateTransform(
    coordTransform: (p0: Coordinate) => Coordinate,
): TransformFunction;
export function equivalent(projection1: Projection, projection2: Projection): boolean;
export function fromLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;
export function fromUserCoordinate(coordinate: number[], destProjection: ProjectionLike): number[];
export function fromUserExtent(extent: Extent, destProjection: ProjectionLike): Extent;
export function get(projectionLike: ProjectionLike): Projection;
export function getPointResolution(
    projection: ProjectionLike,
    resolution: number,
    point: Coordinate,
    opt_units?: Units,
): number;
export function getTransform(source: ProjectionLike, destination: ProjectionLike): TransformFunction;
export function getTransformFromProjections(
    sourceProjection: Projection,
    destinationProjection: Projection,
): TransformFunction;
export function getUserProjection(): Projection;
export function identityTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];
export function setUserProjection(projection: ProjectionLike): void;
export function toLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;
export function toUserCoordinate(coordinate: number[], sourceProjection: ProjectionLike): number[];
export function toUserExtent(extent: Extent, sourceProjection: ProjectionLike): Extent;
export function transform(coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike): Coordinate;
export function transformExtent(extent: Extent, source: ProjectionLike, destination: ProjectionLike): Extent;
export function transformWithProjections(
    point: Coordinate,
    sourceProjection: Projection,
    destinationProjection: Projection,
): Coordinate;
export function useGeographic(): void;
