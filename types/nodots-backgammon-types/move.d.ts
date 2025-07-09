import { BackgammonBoard } from "./board";
import {
    BackgammonCheckerContainer,
    BackgammonMoveDestination,
    BackgammonMoveOrigin,
    BackgammonPoint,
} from "./checkercontainer";
import { BackgammonDieValue } from "./dice";
import { BackgammonMoveDirection } from "./game";
import { BackgammonPlayer, BackgammonPlayerMoving, BackgammonPlayerRolled } from "./player";

export type BackgammonMoveStateKind = "ready" | "in-progress" | "completed" | "confirmed";

export type BackgammonMoveKind = "no-move" | "point-to-point" | "reenter" | "bear-off";

export interface BackgammonMoveSkeleton {
    dieValue: BackgammonDieValue;
    direction: BackgammonMoveDirection;
    origin: BackgammonMoveOrigin;
    destination: BackgammonMoveDestination;
}

export interface BackgammonMoveBase {
    id: string;
    player: BackgammonPlayer;
    dieValue: BackgammonDieValue;
    stateKind: BackgammonMoveStateKind;
    moveKind: BackgammonMoveKind;
    possibleMoves: BackgammonMoveSkeleton[];
}

export interface BackgammonMoveReady extends BackgammonMoveBase {
    stateKind: "ready";
    origin: BackgammonMoveOrigin;
}

export interface BackgammonMoveInProgress extends BackgammonMoveBase {
    stateKind: "in-progress";
    origin: BackgammonMoveOrigin;
    destination: BackgammonMoveDestination;
}

export interface BackgammonMoveCompletedWithMove extends BackgammonMoveBase {
    stateKind: "completed";
    moveKind: "point-to-point" | "reenter" | "bear-off";
    origin: BackgammonMoveOrigin;
    destination: BackgammonMoveDestination;
    isHit: boolean;
}

export interface BackgammonMoveCompletedNoMove extends BackgammonMoveBase {
    stateKind: "completed";
    moveKind: "no-move";
    origin?: undefined;
    destination?: undefined;
    isHit: false;
}

export type BackgammonMoveCompleted = BackgammonMoveCompletedWithMove | BackgammonMoveCompletedNoMove;

export interface BackgammonMoveConfirmedWithMove extends BackgammonMoveBase {
    stateKind: "confirmed";
    moveKind: "point-to-point" | "reenter" | "bear-off";
    origin: BackgammonMoveOrigin;
    destination: BackgammonMoveDestination;
    isHit: boolean;
}

export interface BackgammonMoveConfirmedNoMove extends BackgammonMoveBase {
    stateKind: "confirmed";
    moveKind: "no-move";
    origin?: undefined;
    destination?: undefined;
    isHit: false;
}

export type BackgammonMoveConfirmed = BackgammonMoveConfirmedWithMove | BackgammonMoveConfirmedNoMove;

export type BackgammonMove =
    | BackgammonMoveReady
    | BackgammonMoveInProgress
    | BackgammonMoveCompleted
    | BackgammonMoveConfirmed;

export interface BackgammonMoveResult {
    board: BackgammonBoard;
    move: BackgammonMoveCompleted;
}

export interface BackgammonMoveDryRunResult {
    board: BackgammonBoard;
    move: BackgammonMoveReady | BackgammonMoveCompleted;
}

export type BackgammonMoves = Set<BackgammonMove>;

export interface MoveProps {
    move: BackgammonMove;
    origin: BackgammonMoveOrigin;
}

export interface MoveClass {
    player: BackgammonPlayer;
    id: string;
    dieValue: BackgammonDieValue;
    stateKind: BackgammonMoveStateKind;
    moveKind: BackgammonMoveKind | undefined;
    origin: BackgammonCheckerContainer | undefined;
    destination: BackgammonCheckerContainer | undefined;

    initialize: (props: MoveProps) => BackgammonMove;
    isPointOpen: (point: BackgammonPoint, player: BackgammonPlayerMoving | BackgammonPlayerRolled) => boolean;
    move: (
        board: BackgammonBoard,
        move: BackgammonMoveReady,
        isDryRun?: boolean
    ) => BackgammonMoveResult | BackgammonMoveDryRunResult;
    confirmMove: (move: BackgammonMoveInProgress) => BackgammonMoveConfirmed;
}
