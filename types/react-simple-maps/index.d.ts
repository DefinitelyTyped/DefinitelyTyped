// Type definitions for react-simple-maps 0.12
// Project: https://github.com/zcreativelabs/react-simple-maps#readme
// Definitions by: Novikov Mihail <https://github.com/thepocp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface ZoomableProps {
    center?: Point;
    zoom?: number;
    disablePanning?: boolean;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
    onMoveStart?: (currentCenter: Point) => void;
    onMoveEnd?: (newCenter: Point) => void;
}

interface Events<T> {
    onClick?: (geography: object, evt: React.MouseEvent<T>) => void;
    onMouseEnter?: (geography: object, evt: React.MouseEvent<T>) => void;
    onMouseMove?: (geography: object, evt: React.MouseEvent<T>) => void;
    onMouseLeave?: (geography: object, evt: React.MouseEvent<T>) => void;
    onMouseDown?: (geography: object, evt: React.MouseEvent<T>) => void;
    onMouseUp?: (geography: object, evt: React.MouseEvent<T>) => void;
    onFocus?: (geography: object, evt: React.FocusEvent<T>) => void;
    onBlur?: (geography: object, evt: React.FocusEvent<T>) => void;
}

export type Point = [number, number];

export type MarkerType = {
    coordinates: Point;
};

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
    className?: string;
    showCenter?: boolean;
    preserveAspectRatio?: string;
    viewBox?: string;
}

export interface ZoomableGlobeProps extends ZoomableProps {
    sensitivity?: number;
}

export interface ZoomableGroupProps extends ZoomableProps {
    backdrop?: {
        x: Point;
        y: Point;
    };
}

export interface GeographiesProps {
    disableOptimization?: boolean;
    geography?: string | { [key: string]: any } | string[];
    children?: (geographies: object[], projection: (point: Point) => void) => void;
}

export interface GeographyProps extends Events<SVGPathElement> {
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

export interface MarkerProps extends Events<SVGGElement> {
    marker?: MarkerType;
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

export interface LineProps extends Events<SVGPathElement> {
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
export class ZoomableGlobe extends React.Component<ZoomableGlobeProps> {}
export class Geographies extends React.Component<GeographiesProps> {}
export class Geography extends React.Component<GeographyProps> {}
export class Markers extends React.Component {}
export class Marker extends React.Component<MarkerProps> {}
export class Annotations extends React.Component {}
export class Annotation extends React.Component<AnnotationProps> {}
export class Graticule extends React.Component<GraticuleProps> {}
export class Lines extends React.Component {}
export class Line extends React.Component<LineProps> {}
