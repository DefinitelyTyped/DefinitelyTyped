// Type definitions for nowigence-react-simple-maps 1.0
// Project: https://github.com/zcreativelabs/react-simple-maps#readme
// Definitions by: Akash Sharma <https://github.com/akashuplers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { GeoPath, GeoProjection } from 'd3-geo';
import { D3ZoomEvent } from 'd3-zoom';
import { Feature } from 'geojson';
import * as React from 'react';

export type Point = [number, number];

export interface ProjectionConfig {
    scale?: number | undefined;
    center?: [number, number] | undefined;
    parallels?: [number, number] | undefined;
    rotate?: [number, number, number] | undefined;
}
export type ProjectionFunction = (width: number, height: number, config: ProjectionConfig) => GeoProjection;

export interface ComposableMapProps extends React.SVGAttributes<SVGSVGElement> {
    /**
     * @default 800
     */
    width?: number | undefined;
    /**
     * @default 600
     */
    height?: number | undefined;
    /**
     * @default "geoEqualEarth"
     */
    projection?: string | ProjectionFunction | undefined;
    /**
     * @default {}
     */
    projectionConfig?: ProjectionConfig | undefined;
}

export interface Position {
    x: number;
    y: number;
    last: Point;
    zoom: number;
    dragging: boolean;
    zooming: boolean;
}

export interface ZoomableGroupProps extends React.SVGAttributes<SVGGElement> {
    /**
     * @default [0, 0]
     */
    center?: Point | undefined;
    /**
     * @default 1
     */
    zoom?: number | undefined;
    /**
     * @default 1
     */
    minZoom?: number | undefined;
    /**
     * @default 5
     */
    maxZoom?: number | undefined;
    /**
     * @default 0.025
     */
    zoomSensitivity?: number | undefined;
    /**
     * @default false
     */
    disablePanning?: boolean | undefined;
    /**
     * @default false
     */
    disableZooming?: boolean | undefined;
    onMoveStart?: ((position: { coordinates: [number, number], zoom: number }, event: D3ZoomEvent<SVGElement, any>) => void) | undefined;
    onMove?: ((position: {x: number, y: number, k: number, dragging: WheelEvent }, event: D3ZoomEvent<SVGElement, any>) => void) | undefined;
    onMoveEnd?: ((position: { coordinates: [number, number], zoom: number }, event: D3ZoomEvent<SVGElement, any>) => void) | undefined;
    filterZoomEvent?: ((element: SVGElement) => boolean) | undefined;
    translateExtent?: [[number, number], [number, number]] | undefined;
}

interface GeographiesChildrenArgument {
    geographies: any[];
    path: GeoPath;
    projection: GeoProjection;
}

export interface GeographiesProps extends Omit<React.SVGAttributes<SVGGElement>, 'children'> {
    parseGeographies?: ((features: Array<Feature<any, any>>) => Array<Feature<any, any>>) | undefined;
    geography?: string | Record<string, any> | string[] | undefined;
    children?: ((data: GeographiesChildrenArgument) => void) | undefined;
}

export interface GeographyProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'style'>> {
    geography?: any;
    style?: {
        default?: React.CSSProperties | undefined;
        hover?: React.CSSProperties | undefined;
        pressed?: React.CSSProperties | undefined;
    } | undefined;
    onMouseEnter?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseDown?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<SVGPathElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<SVGPathElement>) => void) | undefined;
}

export interface MarkerProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'style'>> {
    coordinates?: Point | undefined;
    style?: {
        default?: React.CSSProperties | undefined;
        hover?: React.CSSProperties | undefined;
        pressed?: React.CSSProperties | undefined;
    } | undefined;
    onMouseEnter?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseDown?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<SVGPathElement, MouseEvent>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<SVGPathElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<SVGPathElement>) => void) | undefined;
}

export interface AnnotationProps extends React.SVGProps<SVGGElement> {
    subject?: Point | undefined;
    connectorProps: React.SVGProps<SVGPathElement>;
    /**
     * @default 30
     */
    dx?: number | string | undefined;
    /**
     * @default 30
     */
    dy?: number | string | undefined;
    /**
     * @default 0
     */
    curve?: number | undefined;
}

export interface GraticuleProps extends React.SVGProps<SVGPathElement> {
    /**
     * @default [10, 10]
     */
    step?: Point | undefined;
    /**
     * @default "currentcolor"
     */
    stroke?: string | undefined;
    /**
     * @default "transparent"
     */
    fill?: string | undefined;
}

export interface LineProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'from' | 'to'>> {
    /**
     * @default [0, 0]
     */
    from?: Point | undefined;
    /**
     * @default [0, 0]
     */
    to?: Point | undefined;
    /**
     * @default [[0, 0], [0, 0]]
     */
    coordinates?: Point[] | undefined;
    /**
     * @default "currentcolor"
     */
    stroke?: string | undefined;
    /**
     * @default 3
     */
    strokeWidth?: number | string | undefined;
    /**
     * @default "transparent"
     */
    fill?: string | undefined;
}

interface SphereProps extends React.SVGProps<SVGPathElement> {
    /**
     * @default "rsm-sphere"
     */
    id: string;
    /**
     * @default "transparent"
     */
    fill: string;
    /**
     * @default "currentcolor"
     */
    stroke: string;
    /**
     * @default 0.5
     */
    strokeWidth: number;
}

declare const ComposableMap: React.FunctionComponent<ComposableMapProps>;
declare const ZoomableGroup: React.FunctionComponent<ZoomableGroupProps>;
declare const Geographies: React.FunctionComponent<GeographiesProps>;
declare const Geography: React.FunctionComponent<GeographyProps>;
declare const Marker: React.FunctionComponent<MarkerProps>;
declare const Annotation: React.FunctionComponent<AnnotationProps>;
declare const Graticule: React.FunctionComponent<GraticuleProps>;
declare const Line: React.FunctionComponent<LineProps>;
declare const Sphere: React.FunctionComponent<SphereProps>;

export { ComposableMap, ZoomableGroup, Geographies, Geography, Marker, Annotation, Graticule, Line, Sphere };
