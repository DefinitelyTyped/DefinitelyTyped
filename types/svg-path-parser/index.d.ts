// Type definitions for svg-path-parser 1.1
// Project: https://github.com/hughsk/svg-path-parser#readme
// Definitions by: tyru <https://github.com/tyru>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parseSVG(input: string): Command[];
export function makeAbsolute(commands: Command[]): Command[];

export type Command = (
    MoveToCommand |
    LineToCommand |
    HorizontalLineToCommand |
    VerticalLineToCommand |
    ClosePathCommand |
    CurveToCommand |
    SmoothCurveToCommand |
    QuadraticCurveToCommand |
    SmoothQuadraticCurveToCommand |
    EllipticalArcCommand
);

export interface BaseCommand {
    code: 'm' | 'M' | 'l' | 'L' | 'h' | 'H' | 'v' | 'V' | 'c' | 'C' | 's' | 'S' | 'q' | 'Q' | 't' | 'T' | 'a' | 'A' | 'z' | 'Z';
    command: 'moveto' | 'lineto' | 'horizontal lineto' | 'vertical lineto' | 'curveto' | 'smooth curveto' | 'quadratic curveto' | 'smooth quadratic curveto' | 'elliptical arc' | 'closepath';
    relative?: boolean;
}

export interface MoveToCommand extends BaseCommand {
    code: 'm' | 'M';
    command: 'moveto';
    relative?: boolean;
    x: number;
    y: number;
}

export interface LineToCommand extends BaseCommand {
    code: 'l' | 'L';
    command: 'lineto';
    relative?: boolean;
    x: number;
    y: number;
}

export interface HorizontalLineToCommand extends BaseCommand {
    code: 'h' | 'H';
    command: 'horizontal lineto';
    relative?: boolean;
    x: number;
}

export interface VerticalLineToCommand extends BaseCommand {
    code: 'v' | 'V';
    command: 'vertical lineto';
    relative?: boolean;
    y: number;
}

export interface ClosePathCommand extends BaseCommand {
    code: 'z' | 'Z';
    command: 'closepath';
    relative?: boolean;
}

export interface CurveToCommand extends BaseCommand {
    code: 'c' | 'C';
    command: 'curveto';
    relative?: boolean;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
}

export interface SmoothCurveToCommand extends BaseCommand {
    code: 's' | 'S';
    command: 'smooth curveto';
    relative?: boolean;
    x2: number;
    y2: number;
    x: number;
    y: number;
}

export interface QuadraticCurveToCommand extends BaseCommand {
    code: 'q' | 'Q';
    command: 'quadratic curveto';
    relative?: boolean;
    x1: number;
    y1: number;
    x: number;
    y: number;
}

export interface SmoothQuadraticCurveToCommand extends BaseCommand {
    code: 't' | 'T';
    command: 'smooth quadratic curveto';
    relative?: boolean;
    x: number;
    y: number;
}

export interface EllipticalArcCommand extends BaseCommand {
    code: 'a' | 'A';
    command: 'elliptical arc';
    relative?: boolean;
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArc: boolean;
    sweep: boolean;
    x: number;
    y: number;
}
