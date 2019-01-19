// Type definitions for react-sparklines 1.7
// Project: https://github.com/borisyankov/react-sparklines#readme
// Definitions by: Henri Normak <https://github.com/henrinormak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface Point {
    x: number;
    y: number;
}

export interface SparklinesProps {
    data?: number[];
    limit?: number;
    width?: number;
    height?: number;
    svgWidth?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['width'];
    svgHeight?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['height'];
    preserveAspectRatio?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['preserveAspectRatio'];
    margin?: number;
    min?: number;
    max?: number;
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
}
export class Sparklines extends React.PureComponent<SparklinesProps> {}

export interface SparklinesBarsProps {
    points?: Point[];
    height?: number;
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
    barWidth?: number;
    margin?: number;
    onMouseMove?: (p: Point, event: ReactDOM.MouseEvent<ReactDOM.ReactSVGElement>) => void;
}
export class SparklinesBars extends React.Component<SparklinesBarsProps> {}

export interface SparklinesCurveProps {
    color?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['color'];
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
}
export class SparklinesCurve extends React.Component<SparklinesCurveProps> {}

export interface SparklinesLineProps {
    color?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['color'];
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
    onMouseMove?: (event: 'enter' | 'click', value: number, point: Point) => void;
}
export class SparklinesLine extends React.Component<SparklinesLineProps> {}

export interface SparklinesNormalBandProps {
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
}
export class SparklinesNormalBand extends React.Component<SparklinesNormalBandProps> {}

export interface SparklinesReferenceLineProps {
    type?: 'max' | 'min' | 'mean' | 'avg' | 'median' | 'custom';
    value?: number;
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
}
export class SparklinesReferenceLine extends React.Component<SparklinesReferenceLineProps> {}

export interface SparklinesSpotsProps {
    size?: number;
    style?: ReactDOM.SVGAttributes<ReactDOM.ReactSVGElement>['style'];
    spotColors?: { [change: string]: string };
}
export class SparklinesSpots extends React.Component<SparklinesSpotsProps> {}

export interface SparklinesTextProps {
    text?: string;
    point?: Point;
    fontSize?: number;
    fontFamily?: string;
}
export class SparklinesText extends React.Component<SparklinesTextProps> {}
