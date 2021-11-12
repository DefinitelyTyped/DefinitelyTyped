// Type definitions for svg-path-parser 1.1
// Project: https://github.com/hughsk/svg-path-parser#readme
// Definitions by: tyru <https://github.com/tyru>
//                 sozysozbot <https://github.com/sozysozbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parseSVG(input: string): Command[];

// This function modifies the `commands` in place and returns it.
// In TypeScript, the only way to modify the argument's type is to write
// `function f(cs: Command[]): asserts cs is CommandMadeAbsolute[];`, but then this makes the function return void.
// Hence, the only solution possible is to exploit the fact that this function returns the modified argument
// and make the return value be of type `CommandMadeAbsolute[]` and the argument to remain in `Command[]`.
export function makeAbsolute(commands: Command[]): CommandMadeAbsolute[];

export type CommandMadeAbsolute = (
    MoveToCommandMadeAbsolute |
    LineToCommandMadeAbsolute |
    HorizontalLineToCommandMadeAbsolute |
    VerticalLineToCommandMadeAbsolute |
    ClosePathCommandMadeAbsolute |
    CurveToCommandMadeAbsolute |
    SmoothCurveToCommandMadeAbsolute |
    QuadraticCurveToCommandMadeAbsolute |
    SmoothQuadraticCurveToCommandMadeAbsolute |
    EllipticalArcCommandMadeAbsolute
);

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
    relative?: boolean | undefined;
}

export interface MoveToCommand extends BaseCommand {
    code: 'm' | 'M';
    command: 'moveto';
    relative?: boolean | undefined;
    x: number;
    y: number;
}

export interface LineToCommand extends BaseCommand {
    code: 'l' | 'L';
    command: 'lineto';
    relative?: boolean | undefined;
    x: number;
    y: number;
}

export interface HorizontalLineToCommand extends BaseCommand {
    code: 'h' | 'H';
    command: 'horizontal lineto';
    relative?: boolean | undefined;
    x: number;
}

export interface VerticalLineToCommand extends BaseCommand {
    code: 'v' | 'V';
    command: 'vertical lineto';
    relative?: boolean | undefined;
    y: number;
}

export interface ClosePathCommand extends BaseCommand {
    code: 'z' | 'Z';
    command: 'closepath';
    relative?: boolean | undefined;
}

export interface CurveToCommand extends BaseCommand {
    code: 'c' | 'C';
    command: 'curveto';
    relative?: boolean | undefined;
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
    relative?: boolean | undefined;
    x2: number;
    y2: number;
    x: number;
    y: number;
}

export interface QuadraticCurveToCommand extends BaseCommand {
    code: 'q' | 'Q';
    command: 'quadratic curveto';
    relative?: boolean | undefined;
    x1: number;
    y1: number;
    x: number;
    y: number;
}

export interface SmoothQuadraticCurveToCommand extends BaseCommand {
    code: 't' | 'T';
    command: 'smooth quadratic curveto';
    relative?: boolean | undefined;
    x: number;
    y: number;
}

export interface EllipticalArcCommand extends BaseCommand {
    code: 'a' | 'A';
    command: 'elliptical arc';
    relative?: boolean | undefined;
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArc: boolean;
    sweep: boolean;
    x: number;
    y: number;
}

export interface MoveToCommandMadeAbsolute extends BaseCommand {
    code: 'M';
    command: 'moveto';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface LineToCommandMadeAbsolute extends BaseCommand {
    code: 'L';
    command: 'lineto';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface HorizontalLineToCommandMadeAbsolute extends BaseCommand {
    code: 'H';
    command: 'horizontal lineto';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface VerticalLineToCommandMadeAbsolute extends BaseCommand {
    code: 'V';
    command: 'vertical lineto';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface ClosePathCommandMadeAbsolute extends BaseCommand {
    code: 'Z';
    command: 'closepath';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface CurveToCommandMadeAbsolute extends BaseCommand {
    code: 'C';
    command: 'curveto';
    relative: false;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface SmoothCurveToCommandMadeAbsolute extends BaseCommand {
    code: 'S';
    command: 'smooth curveto';
    relative: false;
    x2: number;
    y2: number;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface QuadraticCurveToCommandMadeAbsolute extends BaseCommand {
    code: 'Q';
    command: 'quadratic curveto';
    relative: false;
    x1: number;
    y1: number;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface SmoothQuadraticCurveToCommandMadeAbsolute extends BaseCommand {
    code: 'T';
    command: 'smooth quadratic curveto';
    relative: false;
    x: number;
    y: number;
    x0: number;
    y0: number;
}

export interface EllipticalArcCommandMadeAbsolute extends BaseCommand {
    code: 'A';
    command: 'elliptical arc';
    relative: false;
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArc: boolean;
    sweep: boolean;
    x: number;
    y: number;
    x0: number;
    y0: number;
}
