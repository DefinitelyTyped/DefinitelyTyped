type RelMoveCommand = ["m", number, number];
type AbsMoveCommand = ["M", number, number];
type MoveCommand = RelMoveCommand | AbsMoveCommand;
type RelLineCommand = ["l", number, number];
type AbsLineCommand = ["L", number, number];
type LineCommand = RelLineCommand | AbsLineCommand;
type RelHorizontalCommand = ["h", number];
type AbsHorizontalCommand = ["H", number];
type HorizontalCommand = RelHorizontalCommand | AbsHorizontalCommand;
type RelVerticalCommand = ["v", number];
type AbsVerticalCommand = ["V", number];
type VerticalCommand = RelVerticalCommand | AbsVerticalCommand;
type RelClosePathCommand = ["z"];
type AbsClosePathCommand = ["Z"];
type ClosePathCommand = RelClosePathCommand | AbsClosePathCommand;
type RelBezierCurveCommand = ["c", number, number, number, number, number, number];
type AbsBezierCurveCommand = ["C", number, number, number, number, number, number];
type BezierCurveCommand = RelBezierCurveCommand | AbsBezierCurveCommand;
type RelFollowingBezierCurveCommand = ["s", number, number, number, number];
type AbsFollowingBezierCurveCommand = ["S", number, number, number, number];
type FollowingBezierCurveCommand = RelFollowingBezierCurveCommand | AbsFollowingBezierCurveCommand;
type RelQuadraticCurveCommand = ["q", number, number, number, number];
type AbsQuadraticCurveCommand = ["Q", number, number, number, number];
type QuadraticCurveCommand = RelQuadraticCurveCommand | AbsQuadraticCurveCommand;
type RelFollowingQuadraticCurveCommand = ["t", number, number];
type AbsFollowingQuadraticCurveCommand = ["T", number, number];
type FollowingQuadraticCurveCommand = RelFollowingQuadraticCurveCommand | AbsFollowingQuadraticCurveCommand;
type RelArcCommand = ["a", number, number, number, number, number, number, number];
type AbsArcCommand = ["A", number, number, number, number, number, number, number];
type ArcCommand = RelArcCommand | AbsArcCommand;
type AnyCommand =
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
type AbsAnyCommand =
    | AbsMoveCommand
    | AbsLineCommand
    | AbsHorizontalCommand
    | AbsVerticalCommand
    | AbsClosePathCommand
    | AbsBezierCurveCommand
    | AbsFollowingBezierCurveCommand
    | AbsQuadraticCurveCommand
    | AbsFollowingQuadraticCurveCommand
    | AbsArcCommand;
declare function absolutize(path: AnyCommand[]): AbsAnyCommand[];
export = absolutize;
