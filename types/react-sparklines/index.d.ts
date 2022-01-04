// Type definitions for react-sparklines 1.7
// Project: https://github.com/borisyankov/react-sparklines#readme
// Definitions by: Henri Normak <https://github.com/henrinormak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Point {
    x: number;
    y: number;
}

export interface SparklinesProps {
    children?: React.ReactNode;
    data?: number[] | undefined;
    limit?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    svgWidth?: React.SVGAttributes<React.ReactSVGElement>['width'] | undefined;
    svgHeight?: React.SVGAttributes<React.ReactSVGElement>['height'] | undefined;
    preserveAspectRatio?: React.SVGAttributes<React.ReactSVGElement>['preserveAspectRatio'] | undefined;
    margin?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
}
export class Sparklines extends React.PureComponent<SparklinesProps> {}

export interface SparklinesBarsProps {
    points?: Point[] | undefined;
    height?: number | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
    barWidth?: number | undefined;
    margin?: number | undefined;
    onMouseMove?: ((p: Point, event: React.MouseEvent<React.ReactSVGElement>) => void) | undefined;
}
export class SparklinesBars extends React.Component<SparklinesBarsProps> {}

export interface SparklinesCurveProps {
    color?: React.SVGAttributes<React.ReactSVGElement>['color'] | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
}
export class SparklinesCurve extends React.Component<SparklinesCurveProps> {}

export interface SparklinesLineProps {
    color?: React.SVGAttributes<React.ReactSVGElement>['color'] | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
    onMouseMove?: ((event: 'enter' | 'click', value: number, point: Point) => void) | undefined;
}
export class SparklinesLine extends React.Component<SparklinesLineProps> {}

export interface SparklinesNormalBandProps {
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
}
export class SparklinesNormalBand extends React.Component<SparklinesNormalBandProps> {}

export interface SparklinesReferenceLineProps {
    type?: 'max' | 'min' | 'mean' | 'avg' | 'median' | 'custom' | undefined;
    value?: number | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
}
export class SparklinesReferenceLine extends React.Component<SparklinesReferenceLineProps> {}

export interface SparklinesSpotsProps {
    size?: number | undefined;
    style?: React.SVGAttributes<React.ReactSVGElement>['style'] | undefined;
    spotColors?: { [change: string]: string } | undefined;
}
export class SparklinesSpots extends React.Component<SparklinesSpotsProps> {}

export interface SparklinesTextProps {
    text?: string | undefined;
    point?: Point | undefined;
    fontSize?: number | undefined;
    fontFamily?: string | undefined;
}
export class SparklinesText extends React.Component<SparklinesTextProps> {}
