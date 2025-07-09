import { BackgammonBoard } from "./board";
import { BackgammonChecker } from "./checker";
import { BackgammonMoveDirection } from "./game";
import { IntegerRange } from "./generics";
import { BackgammonCheckerContainerImport } from "./import";

export type BarPosition = "bar";
export type OffPosition = "off";

export interface BackgammonPointPosition {
    clockwise: BackgammonPointValue;
    counterclockwise: BackgammonPointValue;
}

export type BackgammonCheckerContainerPosition = BackgammonPointPosition | BarPosition | OffPosition;

export type CheckerContainerKind = "point" | "bar" | "off";
export interface BackgammonCheckerContainer {
    id: string;
    kind: CheckerContainerKind;
    position: BackgammonCheckerContainerPosition;
    checkers: BackgammonChecker[];
}

export interface BackgammonPoint extends BackgammonCheckerContainer {
    kind: "point";
    position: {
        clockwise: BackgammonPointValue;
        counterclockwise: BackgammonPointValue;
    };
}

export interface BackgammonBar extends BackgammonCheckerContainer {
    kind: "bar";
    direction: BackgammonMoveDirection;
    position: BarPosition;
}

export type BackgammonBarContainer = {
    [direction in BackgammonMoveDirection]: BackgammonBar;
};
export interface BackgammonOff extends BackgammonCheckerContainer {
    kind: "off";
    direction: BackgammonMoveDirection;
    position: OffPosition;
}

export type BackgammonOffContainer = {
    [direction in BackgammonMoveDirection]: BackgammonOff;
};

export type BackgammonPointValue = IntegerRange<1, 24>;

export type BackgammonPoints = [
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint,
    BackgammonPoint
];

export type BackgammonMoveOrigin = BackgammonPoint | BackgammonBar;
export type BackgammonMoveDestination = BackgammonPoint | BackgammonOff;

export interface CheckercontainerClass {
    getCheckercontainers: (board: BackgammonBoard) => BackgammonCheckerContainer[];
    getCheckercontainer: (board: BackgammonBoard, id: string) => BackgammonCheckerContainer;
    buildBar: (boardImport: BackgammonCheckerContainerImport[]) => {
        clockwise: BackgammonBar;
        counterclockwise: BackgammonBar;
    };
    buildOff: (boardImport: BackgammonCheckerContainerImport[]) => {
        clockwise: BackgammonOff;
        counterclockwise: BackgammonOff;
    };
}
