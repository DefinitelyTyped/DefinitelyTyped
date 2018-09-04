// Type definitions for viewport-mercator-project 5.2
// Project: https://github.com/uber-common/viewport-mercator-project#readme
// Definitions by: Fabio Berta <https://github.com/fnberta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface ProjectOptions {
    topLeft?: boolean;
}

export interface UnprojectOptions extends ProjectOptions {
    targetZ?: number;
}

export type Coordinates = [number, number];

export type CoordinatesZ = [number, number, number];

export type ViewMatrix = number[];

export type ProjectionMatrix = number[];

export interface ViewportOptions {
    width?: number;
    height?: number;
    viewMatrix?: ViewMatrix;
    projectionMatrix?: ProjectionMatrix;
}

export class Viewport {
    width: number;
    height: number;
    scale: number;
    viewMatrix: ViewMatrix;
    projectionMatrix: ProjectionMatrix;

    constructor(opts?: ViewportOptions);

    equals(viewport: Viewport): boolean;
    project(lngLat: Coordinates, opts?: ProjectOptions): Coordinates;
    project(lngLatZ: CoordinatesZ, opts?: ProjectOptions): CoordinatesZ;
    unproject(xy: Coordinates, opts?: UnprojectOptions): Coordinates;
    unproject(xyz: CoordinatesZ, opts?: UnprojectOptions): CoordinatesZ;
}

export type Padding = number | { top: number; right: number; bottom: number; left: number };

export type Bounds = [Coordinates, Coordinates];

export interface WebMercatorViewportOptions {
    width?: number;
    height?: number;
    longitude?: number;
    latitude?: number;
    zoom?: number;
    pitch?: number;
    bearing?: number;
    altitude?: number;
    farZMultiplier?: number;
}

// Type comes from https://github.com/uber-web/math.gl
export class Vector3 extends Array {}

export class WebMercatorViewport extends Viewport {
    latitude: number;
    longitude: number;
    zoom: number;
    pitch: number;
    bearing: number;
    altitude: number;
    center: Vector3;

    constructor(opts?: WebMercatorViewportOptions);

    projectFlat(lngLat: Coordinates, scale?: number): Coordinates;
    unprojectFlat(xy: Coordinates, scale?: number): Coordinates;
    getMapCenterByLngLatPosition(opts: { lngLat: Coordinates; pos: Coordinates }): Coordinates;
    fitBounds(bounds: Bounds, opts?: { padding?: Padding; offset?: Coordinates }): WebMercatorViewport;
}

export default WebMercatorViewport;

export interface FittedBounds {
    latitude: number;
    longitude: number;
    zoom: number;
}

export function fitBounds(options: { width: number; height: number; bounds: Bounds; padding?: Padding; offset?: Coordinates }): FittedBounds;

export interface BaseViewportProps {
    width: number;
    height: number;
    longitude: number;
    latitude: number;
    zoom: number;
}

export interface ViewportProps extends BaseViewportProps {
    pitch?: number;
    bearing?: number;
}

export interface NormalizedViewportProps extends BaseViewportProps {
    pitch: number;
    bearing: number;
}

export function normalizeViewportProps(props: ViewportProps): NormalizedViewportProps;

export function flyToViewport(startProps: BaseViewportProps, endProps: BaseViewportProps, t: number): BaseViewportProps;

export function lngLatToWorld(lngLat: Coordinates, scale: number): Coordinates;

export function worldToLngLat(point: Coordinates, scale: number): Coordinates;

export function worldToPixels(coordinates: Coordinates | CoordinatesZ, pixelProjectionMatrix: ProjectionMatrix): CoordinatesZ;

export function pixelsToWorld(pixels: Coordinates | CoordinatesZ, pixelUnprojectionMatrix: ProjectionMatrix, targetZ?: number): CoordinatesZ;

export function getMeterZoom(input: { latitude: number }): number;

export interface DistanceScales {
    pixelsPerMeter: [number, number, number];
    metersPerPixel: [number, number, number];
    pixelsPerDegree: [number, number, number];
    degreesPerPixel: [number, number, number];
}

export interface HighPrecisionDistanceScales extends DistanceScales {
    pixelsPerDegree2: [number, number, number];
    pixelsPerMeter2: [number, number, number];
}

export interface BaseDistanceScalesInput {
    longitude: number;
    latitude: number;
}

export type DistanceScalesInput = BaseDistanceScalesInput & { zoom: number } | BaseDistanceScalesInput & { scale: number };

export interface BaseHighPrecisionDistanceScalesInput extends BaseDistanceScalesInput {
    highPrecision: true;
}

export type HighPrecisionDistanceScalesInput = BaseHighPrecisionDistanceScalesInput & { zoom: number } | BaseHighPrecisionDistanceScalesInput & { scale: number };

export function getDistanceScales(input: DistanceScalesInput): DistanceScales;

export function getDistanceScales(input: HighPrecisionDistanceScalesInput): HighPrecisionDistanceScales;

export function getWorldPosition(input: { longitude: number; latitude: number; zoom: number; scale: number; meterOffset?: number; distanceScales?: DistanceScales }): Vector3;

export function getViewMatrix(input: { height: number; pitch: number; bearing: number; altitude: number; center?: CoordinatesZ; flipY?: boolean }): ViewMatrix;

export interface ProjectionParametersInput {
    width: number;
    height: number;
    pitch?: number;
    altitude?: number;
    farZMultiplier?: number;
}

export interface ProjectionParameters {
    fov: number;
    aspect: number;
    focalDistance: number;
    near: number;
    far: number;
}

export function getProjectionParameters(input: ProjectionParametersInput): ProjectionParameters;

export function getProjectionMatrix(input: ProjectionParametersInput): ProjectionMatrix;
