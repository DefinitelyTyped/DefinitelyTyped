declare namespace Contours {
    type MoveCommand = [code: "m" | "M", x: number, y: number];
    type LineCommand = [code: "l" | "L", x: number, y: number];
    type HorizontalCommand = [code: "h" | "H", x: number];
    type VerticalCommand = [code: "v" | "V", y: number];
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    type ClosePathCommand = [code: "z" | "Z"];
    type BezierCurveCommand = [code: "c" | "C", x1: number, y1: number, x2: number, y2: number, x: number, y: number];
    type FollowingBezierCurveCommand = [code: "s" | "S", x2: number, y2: number, x: number, y: number];
    type QuadraticCurveCommand = [code: "q" | "Q", x1: number, y1: number, x: number, y: number];
    type FollowingQuadraticCurveCommand = [code: "t" | "T", x: number, y: number];
    type ArcCommand = [
        code: "a" | "A",
        rx: number,
        ry: number,
        xRot: number,
        largeArcFlag: number,
        sweepFlag: number,
        x: number,
        y: number,
    ];
    type Command =
        | MoveCommand
        | LineCommand
        | HorizontalCommand
        | VerticalCommand
        | ClosePathCommand
        | BezierCurveCommand
        | FollowingBezierCurveCommand
        | QuadraticCurveCommand
        | FollowingQuadraticCurveCommand
        | ArcCommand;
}

declare function Contours(path: Contours.Command[], scale?: number): Contours.Command[];
export = Contours;
