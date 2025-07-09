import { BackgammonBoard } from "./board";
import { BackgammonChecker } from "./checker";
import { BackgammonMoveOrigin, BackgammonPoint } from "./checkercontainer";
import { BackgammonDice, BackgammonDiceInactive, BackgammonDiceRolled, BackgammonDiceRolling } from "./dice";
import { BackgammonColor, BackgammonMoveDirection } from "./game";
import { BackgammonMoveReady, BackgammonMoveResult } from "./move";
import { BackgammonPips } from "./pip";
import { BackgammonPlayMoving } from "./play";

export type BackgammonPlayerStateKind =
    | "inactive"
    | "rolling-for-start"
    | "rolled-for-start"
    | "rolling"
    | "rolled"
    | "doubled"
    | "moving"
    | "moved"
    | "winner";

export interface BasePlayer {
    id?: string;
    userId: string;
    color: BackgammonColor;
    direction: BackgammonMoveDirection;
    dice: BackgammonDice;
    pipCount: BackgammonPips;
    isRobot: boolean;
}

export interface Player extends BasePlayer {
    stateKind: BackgammonPlayerStateKind;
}

export type BackgammonPlayerInitializing = Player & {
    stateKind: "initializing";
};

export type BackgammonPlayerInactive = Player & {
    id: string;
    stateKind: "inactive";
    dice: BackgammonDiceInactive;
};

export type BackgammonPlayerRollingForStart = Player & {
    id: string;
    stateKind: "rolling-for-start";
    dice: BackgammonDiceInactive;
};

export type BackgammonPlayerRolledForStart = Player & {
    id: string;
    stateKind: "rolled-for-start";
    dice: BackgammonDiceInactive;
};

export type BackgammonPlayerRolling = Player & {
    id: string;
    stateKind: "rolling";
    dice: BackgammonDiceRolling;
};

export type BackgammonPlayerRolled = Player & {
    id: string;
    stateKind: "rolled";
    dice: BackgammonDiceRolled;
};

export type BackgammonPlayerDoubled = Player & {
    id: string;
    stateKind: "doubled";
    dice: BackgammonDiceRolled;
};

export type BackgammonPlayerMoving = Player & {
    id: string;
    stateKind: "moving";
    dice: BackgammonDiceRolled;
};

export type BackgammonPlayerMoved = Player & {
    id: string;
    stateKind: "moved";
    dice: BackgammonDiceRolled;
};

export type BackgammonPlayerWinner = Player & {
    id: string;
    stateKind: "winner";
    dice: BackgammonDiceRolled;
};

export type BackgammonPlayer =
    | BackgammonPlayerInactive
    | BackgammonPlayerRollingForStart
    | BackgammonPlayerRolledForStart
    | BackgammonPlayerRolling
    | BackgammonPlayerRolled
    | BackgammonPlayerDoubled
    | BackgammonPlayerMoving
    | BackgammonPlayerMoved
    | BackgammonPlayerWinner;

export type BackgammonPlayerActive =
    | BackgammonPlayerRollingForStart
    | BackgammonPlayerRolledForStart
    | BackgammonPlayerRolling
    | BackgammonPlayerRolled
    | BackgammonPlayerDoubled
    | BackgammonPlayerMoving
    | BackgammonPlayerMoved;

export type BackgammonPlayers = [BackgammonPlayer, BackgammonPlayer];

export type BackgammonPlayerCheckers<T extends BackgammonChecker = BackgammonChecker> = [
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T,
    T
];

export interface PlayerClass {
    id: string;
    stateKind: BackgammonPlayerStateKind;
    dice: BackgammonDice;
    pipCount: number;

    initialize: (
        color: BackgammonColor,
        direction: BackgammonMoveDirection,
        dice?: BackgammonDice,
        id?: string,
        stateKind?: BackgammonPlayerStateKind
    ) => BackgammonPlayer;
    roll: (player: BackgammonPlayerRolling) => BackgammonPlayerRolled;
    double: (player: BackgammonPlayerRolled) => BackgammonPlayerDoubled;
    move: (board: BackgammonBoard, play: BackgammonPlayMoving, origin: BackgammonMoveOrigin) => BackgammonMoveResult;
    getHomeBoard: (board: BackgammonBoard, player: BackgammonPlayer) => BackgammonPoint[];
    getOpponentBoard: (board: BackgammonBoard, player: BackgammonPlayer) => BackgammonPoint[];
    getBestMove: (possibleMoves: BackgammonMoveReady[]) => BackgammonMoveReady;
    toMoving: (player: BackgammonPlayerRolled | BackgammonPlayerDoubled) => BackgammonPlayerMoving;
    toDoubling: (player: BackgammonPlayerRolled) => BackgammonPlayerDoubled;
}
