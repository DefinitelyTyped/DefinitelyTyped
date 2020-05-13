// Type definitions for react-hexgrid 1.0
// Project: https://github.com/Hellenic/react-hexgrid
// Definitions by: jsarihan <https://github.com/jsarihan/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface HexagonProps extends React.HTMLAttributes<Element> {
    q: number;
    r: number;
    s: number;
    fill?: string;
    cellStyle?: any;
    className?: string;
    data?: any;
}
export interface HexagonState {
    hex?: any;
    pixel?: any;
}
export class Hexagon extends React.Component<HexagonProps, HexagonState> { }

export interface TextProps extends React.HTMLAttributes<Element> {
    x?: string | number;
    y?: string | number;
    className?: string;
}
export class Text extends React.Component<TextProps, any> { }
export class Hex {
    q: number;
    r: number;
    s: number;
    constructor(q: number, r: number, s: number);
}
export class Orientation {
    b0: number;
    b1: number;
    b2: number;
    b3: number;
    f0: number;
    f1: number;
    f2: number;
    f3: number;
    startAngle: number;
    constructor(f0: number, f1: number, f2: number, f3: number, b0: number, b1: number, b2: number, b3: number, startAngle: number);
}
export class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
}

export class HexUtils {
    DIRECTIONS: Hex[];
    static equals(a: Hex, b: Hex): boolean;
    static add(a: Hex, b: Hex): number;
    static subtract(a: Hex, b: Hex): number;
    static multiply(a: Hex, b: number): Hex;
    static lengths(hex: Hex): number;
    static distance(a: Hex, b: Hex): number;
    static direction(direction: number): Hex;
    static neighbour(a: Hex, direction: number): Hex;
    static neighbours(hex: Hex): Hex[];
    static round(hex: Hex): Hex;
    static hexToPixel(hex: Hex, layout: any): Point;
    static pixelToHex(point: Point, layout: any): Hex;
    static lerp(a: number, b: number, t: number): number;
    static hexLerp(a: Hex, b: Hex, t: Hex): Hex;
    static getId(hex: Hex): string;
}

export class GridGenerator {
    static getGenerator(name: string): (...args: any[]) => any;
    static ring(center: Hex, mapRadius: number): Hex[];
    static spiral(center: Hex, mapRadius: number): Hex[];
    static parallelogram(q1: number, q2: number, r1: number, r2: number): Hex[];
    static triangle(mapSize: number): Hex[];
    static hexagon(mapSize: number): Hex; static rectangle(mapWidth: number, mapHeight: number): Hex[];
    static orientedRectangle(mapWidth: number, mapHeight: number): Hex[];
}

export interface HexGridProps extends React.HTMLAttributes<Element> {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
}
export class HexGrid extends React.Component<HexGridProps, any> { }

export interface LayoutProps extends React.HTMLAttributes<Element> {
    className?: string;
    flat?: boolean;
    origin?: Point;
    size?: Point;
    spacing?: number;
    rest?: any;
}
export class Layout extends React.Component<LayoutProps, any> { }

export interface PathProps extends React.HTMLAttributes<Element> {
    start?: Hex;
    end?: Hex;
    layout?: any;
}
export class Path extends React.Component<PathProps, any> { }

export interface PatternProps extends React.HTMLAttributes<Element> {
    id: string;
    link: string;
    size?: any;
}
export class Pattern extends React.Component<PatternProps, any> { }
