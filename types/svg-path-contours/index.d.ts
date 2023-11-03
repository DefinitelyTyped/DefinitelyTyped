type MoveCommand = ["m" | "M", number, number];
type LineCommand = ["l" | "L", number, number];
type HorizontalCommand = ["h" | "H", number];
type VerticalCommand = ["v" | "V", number];
type ClosePathCommand = ["z" | "Z"];
type BezierCurveCommand = ["c" | "C", number, number, number, number, number, number];
type FollowingBezierCurveCommand = ["s" | "S", number, number, number, number];
type QuadraticCurveCommand = ["q" | "Q", number, number, number, number];
type FollowingQuadraticCurveCommand = ["t" | "T", number, number];
type ArcCommand = ["a" | "A", number, number, number, number, number, number, number];
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

declare function contours(path: Command[], scale?: number): Command[];
export = contours;
