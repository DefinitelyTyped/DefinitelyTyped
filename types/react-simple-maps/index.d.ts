// Type definitions for react-simple-maps 0.12
// Project: https://github.com/zcreativelabs/react-simple-maps#readme
// Definitions by: Novikov Mihail <https://github.com/thepocp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Point = [number, number];

export interface Line {
    coordinates: {
        start: Point;
        end: Point;
    };
}

export interface ComposableMapProps {
    width?: number;
    height?: number;
    projection?: string | (() => void);
    projectionConfig?: {
        scale?: number;
        xOffset?: number;
        yOffset?: number;
        rotation?: number[];
        precision?: number;
    };
    style?: React.CSSProperties;
    defs?: SVGDefsElement;
}

export interface ZoomableProps {
    zoom?: number;
    center?: Point;
    style?: React.CSSProperties;
    onMoveStart?: (currentCenter: Point) => void;
    onMoveEnd?: (newCenter: Point) => void;
}

export interface ZoomableGroupProps extends ZoomableProps {
    disablePanning?: boolean;
}

export interface GeographiesProps {
    disableOptimization?: boolean;
    geography?: string | { [key: string]: any } | string[];
    children?: (geographies: object[], projection: (point: Point) => void) => void;
}

export interface GeographyProps {
    cacheId?: number | string | null;
    precision?: number;
    round?: boolean;
    geography?: object;
    projection?: (point: Point) => void;
    tabable?: boolean;
    style?: {
        default?: React.CSSProperties;
        hover?: React.CSSProperties;
        pressed?: React.CSSProperties;
    };
}

export interface MarkerProps {
    marker?: {
        coordinates: Point;
    };
    tabable?: boolean;
    style?: {
        default?: React.CSSProperties;
        hover?: React.CSSProperties;
        pressed?: React.CSSProperties;
    };
    preserveMarkerAspect?: boolean;
}

export interface AnnotationProps {
    subject?: Point;
    dx?: number;
    dy?: number;
    zoom?: number;
    stroke?: string;
    strokeWidth?: number;
    style?: React.CSSProperties;
    markerEnd?: string;
    curve?: number;
}

export interface GraticuleProps {
    step?: Point;
    round?: boolean;
    precision?: number;
    outline?: boolean;
    stroke?: string;
    fill?: string;
    style?: React.CSSProperties;
    disableOptimization?: boolean;
    Globe?: boolean;
}

export interface LineProps {
    line?: Line;
    tabable?: boolean;
    style?: {
        default?: React.CSSProperties;
        hover?: React.CSSProperties;
        pressed?: React.CSSProperties;
    };
    preserveMarkerAspect?: boolean;
    buildPath?: (start: Point, end: Point, line: Line) => string;
}

export class ComposableMap extends React.Component<ComposableMapProps> {}
export class ZoomableGroup extends React.Component<ZoomableGroupProps> {}
export class ZoomableGlobe extends React.Component<ZoomableProps> {}
export class Geographies extends React.Component<GeographiesProps> {}
export class Geography extends React.Component<GeographyProps> {}
export class Markers extends React.Component {}
export class Marker extends React.Component<MarkerProps> {}
export class Annotations extends React.Component {}
export class Annotation extends React.Component<AnnotationProps> {}
export class Graticule extends React.Component<GraticuleProps> {}
export class Lines extends React.Component {}
export class Line extends React.Component<LineProps> {}
