// Type definitions for parse-svg-path 0.1.2
// Project: https://github.com/jkroso/parse-svg-path
// Definitions by: Liam Martens <https://github.com/LiamMartens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type MoveCommand = ['M' | 'm', number, number];
type LineCommand = ['L' | 'l', number, number];
type HorizontalCommand = ['H' | 'h', number];
type VerticalCommand = ['V' | 'v', number];
type ClosePathCommand = ['Z' | 'z'];
type BezierCurveCommand = ['C' | 'c', number, number, number, number, number, number];
type FollowingBezierCurveCommand = ['S' | 's', number, number, number, number];
type QuadraticCurveCommand = ['Q' | 'q', number, number, number, number];
type FollowingQuadraticCurveCommand = ['T' | 't', number, number];
type ArcCommand = ['A' | 'a', number, number, number, number, number, number, number];
type AnyCommand = MoveCommand | LineCommand | HorizontalCommand | VerticalCommand |
    ClosePathCommand | BezierCurveCommand | FollowingBezierCurveCommand |
    QuadraticCurveCommand | FollowingQuadraticCurveCommand | ArcCommand;
export default function parse(path: string): AnyCommand[];
