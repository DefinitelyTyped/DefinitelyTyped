// Type definitions for react-simple-maps 1.0
// Project: https://github.com/zcreativelabs/react-simple-maps#readme
// Definitions by: Novikov Mihail <https://github.com/thepocp>
//                 Andrej Mihajlov <https://github.com/pronebird>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { GeoPath, GeoProjection } from 'd3-geo';
import { Feature } from 'geojson';
import * as React from 'react';

export type Point = [number, number];

export interface ProjectionConfig {
    scale?: number;
    xOffset?: number;
    yOffset?: number;
    rotate?: [number, number, number];
    precision?: number;
}
export type ProjectionFunction = (width: number, height: number, config: ProjectionConfig) => GeoProjection;

export interface ComposableMapProps extends React.SVGAttributes<SVGSVGElement> {
    /**
     * @default 800
     */
    width?: number;
    /**
     * @default 600
     */
    height?: number;
    /**
     * @default "geoEqualEarth"
     */
    projection?: string | ProjectionFunction;
    /**
     * @default {}
     */
    projectionConfig?: ProjectionConfig;
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
    center?: Point;
    /**
     * @default 1
     */
    zoom?: number;
    /**
     * @default 1
     */
    minZoom?: number;
    /**
     * @default 5
     */
    maxZoom?: number;
    /**
     * @default 0.025
     */
    zoomSensitivity?: number;
    /**
     * @default false
     */
    disablePanning?: boolean;
    /**
     * @default false
     */
    disableZooming?: boolean;
    onMoveStart?: (event: any, position: Position) => void;
    onMoveEnd?: (event: any, position: Position) => void;
    onZoomStart?: (event: any, position: Position) => void;
    onZoomEnd?: (event: any, position: Position) => void;
}

interface GeographiesChildrenArgument {
    geographies: any[];
    path: GeoPath;
    projection: GeoProjection;
}

export interface GeographiesProps extends React.SVGAttributes<SVGGElement> {
    parseGeographies?: (features: Array<Feature<any, any>>) => Array<Feature<any, any>>;
    geography?: string | Record<string, any> | string[];
    children?: (data: GeographiesChildrenArgument) => void;
}

export interface GeographyProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'style'>> {
    geography?: any;
    style?: {
        default?: React.CSSProperties;
        hover?: React.CSSProperties;
        pressed?: React.CSSProperties;
    };
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseDown?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseUp?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onFocus?: (event: React.FocusEvent<SVGPathElement>) => void;
    onBlur?: (event: React.FocusEvent<SVGPathElement>) => void;
}

export interface MarkerProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'style'>> {
    coordinates?: Point;
    style?: {
        default?: React.CSSProperties;
        hover?: React.CSSProperties;
        pressed?: React.CSSProperties;
    };
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseDown?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onMouseUp?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
    onFocus?: (event: React.FocusEvent<SVGPathElement>) => void;
    onBlur?: (event: React.FocusEvent<SVGPathElement>) => void;
}

export interface AnnotationProps extends React.SVGProps<SVGGElement> {
    subject?: Point;
    connectorProps: React.SVGProps<SVGPathElement>;
    /**
     * @default 30
     */
    dx?: number | string;
    /**
     * @default 30
     */
    dy?: number | string;
    /**
     * @default 0
     */
    curve?: number;
}

export interface GraticuleProps extends React.SVGProps<SVGPathElement> {
    /**
     * @default [10, 10]
     */
    step?: Point;
    /**
     * @default "currentcolor"
     */
    stroke?: string;
    /**
     * @default "transparent"
     */
    fill?: string;
}

export interface LineProps
    extends Pick<React.SVGProps<SVGPathElement>, Exclude<keyof React.SVGProps<SVGPathElement>, 'from' | 'to'>> {
    /**
     * @default [0, 0]
     */
    from?: Point;
    /**
     * @default [0, 0]
     */
    to?: Point;
    /**
     * @default [[0, 0], [0, 0]]
     */
    coordinates?: Point[];
    /**
     * @default "currentcolor"
     */
    stroke?: string;
    /**
     * @default 3
     */
    strokeWidth?: number | string;
    /**
     * @default "transparent"
     */
    fill?: string;
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
